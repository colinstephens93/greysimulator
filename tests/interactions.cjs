// Petting hit zones, touch hearts, and Grey's lean toward the player.
// Run with the local server up: CHROMIUM_PATH=/path/to/chromium node tests/interactions.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 }, deviceScaleFactor: .5 });
  page.setDefaultTimeout(90000);
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('http://localhost:8000');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForFunction(() => babyLoaded);

  // Screen positions of the head centre and the tummy (midway between hips and neck).
  const spots = await page.evaluate(() => {
    const toScreen = v => { v.project(camera); return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight } };
    const head = babyBones.Head.localToWorld(babyHit.headLocal.clone());
    const hips = babyBones.Hips.getWorldPosition(new THREE.Vector3()), neck = babyBones.Neck.getWorldPosition(new THREE.Vector3());
    return { head: toScreen(head), tummy: toScreen(hips.lerp(neck, .5)) };
  });

  const zoneAt = (p) => page.evaluate(({ x, y }) => { pointer.set(x / innerWidth * 2 - 1, 1 - y / innerHeight * 2); ray.setFromCamera(pointer, camera); return petZone()?.name ?? null }, p);
  assert.equal(await zoneAt(spots.head), 'head', 'head centre is a head hit');
  assert.equal(await zoneAt(spots.tummy), 'body', 'tummy is a body hit');
  assert.equal(await zoneAt({ x: 40, y: 400 }), null, 'empty space misses Grey');

  // Hit testing must stay cheap: 200 tests well under a frame each.
  const ms = await page.evaluate(() => { const t = performance.now(); for (let i = 0; i < 200; i++) { pointer.set(Math.random() * .4 - .2, Math.random() * .6 - .1); ray.setFromCamera(pointer, camera); petZone() } return (performance.now() - t) / 200 });
  assert(ms < 1, `petZone took ${ms}ms`);

  // A slow stroke over the head soothes and pops a heart; a quick rub on the tummy tickles.
  // Gesture speed is measured between pointer events, so drawing is paused during the drags:
  // headless software rendering can take most of a second per frame, which would make any scripted drag look motionless.
  await page.evaluate(() => { window.__render = renderer.render; renderer.render = () => {} });
  const drag = async (p, dx, steps) => { await page.mouse.move(p.x - dx, p.y); await page.mouse.down(); await page.mouse.move(p.x + dx, p.y, { steps }); await page.mouse.up(); await page.waitForTimeout(900) };
  const before = await page.evaluate(() => ({ xp, n: particles.length }));
  await drag(spots.head, 20, 5);
  const afterStroke = await page.evaluate(() => ({ xp, n: particles.length, mood: document.querySelector('#mood').textContent }));
  assert(afterStroke.xp > before.xp, 'stroke rewarded');
  assert(afterStroke.n > before.n, 'stroke popped a heart');
  assert.match(afterStroke.mood, /soothed/);
  await drag(spots.tummy, 60, 3);
  const afterTickle = await page.evaluate(() => ({ xp, mood: document.querySelector('#mood').textContent }));
  assert(afterTickle.xp > afterStroke.xp, 'tickle rewarded');
  assert.match(afterTickle.mood, /happy/);
  await page.evaluate(() => { renderer.render = window.__render });

  // He leans in from the spine; the pelvis stays grounded.
  const lean = await page.evaluate(() => { animateBaby(0); const e = new THREE.Euler().setFromQuaternion(babyRest.get('Spine').clone().invert().multiply(babyBones.Spine.quaternion)); return e.x });
  assert(lean < -.1, 'spine leans toward the player');

  assert.deepEqual(errors, []);
  console.log('Interactions passed', { headZone: spots.head, msPerHitTest: +ms.toFixed(3), xp: afterTickle.xp });
  await browser.close();
})();
