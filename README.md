# Grey Simulator

An endless caretaking sandbox with a fully modeled, textured and skeletal baby character in a 3D nursery. Static HTML/JS; no build step. Serve the repository root (for example `python -m http.server 8000`) or enable GitHub Pages on main/root. An internet connection is required for the pinned Three.js 0.160.1 CDN modules. Open through HTTP(S); GLB loading is not supported under file://.

## Camera

Tap **Camera** and drag one finger to orbit around the crib, including side and rear views. Tap Camera again to resume caretaking. Desktop also supports Shift-drag or right-drag, plus scroll to zoom. **Center** restores the starting viewpoint.

## Play

Pet & tickle: drag slowly over the head to soothe or rub the body for giggles. Peek-a-boo: hold the scene/on-screen button or Space, then release after 1.2–2.5 seconds. Rattle: shake with a steady drag rhythm. Plush: tap to squeeze. Mobile: select and tap for a 20-second lullaby. Bubbles / boo: initially a playful sound; soap bubbles unlock at level 4.

Bond saves locally on this browser. Switching actions grants variety bonuses. Levels 2–5 add colored mobile stars, bunny ears/rattle color, bubbles and sunset lighting. Audio starts muted; tap Sound off to enable it. Optional `assets/coo.mp3`, `assets/giggle.mp3` and `assets/laugh.mp3` replace synthesized voices. Missing samples fall back to synthesis.

## Character and license

The character is now an original model of Grey in a Nintendogs-style design, with painted textures, a striped romper, embedded glossy eyes and a full skeleton. It is tuned toward the reference photo: a thin, translucent strawberry-blond fuzz with a high hairline instead of a bowl cut, blue-grey eyes, faint light brows, rosy cheeks, larger ears, an open-mouthed smile, and a cream romper with narrow sage pinstripe groups. The hair fades in through per-vertex alpha (`COLOR_0`) on an alpha-blended material. `assets/baby/grey.glb` is approximately 690 KB with three embedded textures. The loader keeps the same height normalization, centering, world-axis seated pose and hip-weighted mattress grounding. Grey faces the default camera after a 180° Y rotation.

Head tracking, breathing, arm bounces and kicks remain procedural. Only the supplied `IdleBlink_Eye_L` and `IdleBlink_Eye_R` clips run through an AnimationMixer, scaling the eye objects for blinking. Their authored eye roughness is preserved; other mesh materials receive the existing .85 roughness treatment. Reduced-motion mode pauses the blink mixer.

The previous Grab3D CC0 toddler is retained at `assets/baby/baby-rigged.glb` as a manual fallback, alongside its unchanged [source disclosure](assets/baby/SOURCE.md) and [license](assets/baby/LICENSE.txt). To restore it, change the loader path back and remove the custom model's 180° rotation. The loader shows its existing error/retry UI if the custom asset cannot load; it does not silently substitute the stock character.

## Validation

Chromium checks cover model load and skeleton, seated bounds, side/rear orbit and reset, interaction feedback, and a 390×844 touch-emulated layout. Run `node tests/rigged.cjs` with Playwright and Chromium installed and the local server running. Real iPhone Safari, audio listening, and sustained mobile frame-rate testing remain manual validation.

Seat grounding uses the lowest contact patch of hip-weighted skinned vertices, rather than the overall model's lowest vertex. The pelvis remains fixed vertically during reactions; only the upper body and limbs animate. A soft shadow stays centered beneath the seated pelvis.
