# Grey Simulator

An endless caretaking sandbox with a fully modeled, textured and skeletal baby character in a 3D nursery. Static HTML/JS; no build step. Serve the repository root (for example `python -m http.server 8000`) or enable GitHub Pages on main/root. An internet connection is required for the pinned Three.js 0.160.1 CDN modules. Open through HTTP(S); GLB loading is not supported under file://.

## Camera

Tap **Camera** and drag one finger to orbit around the crib, including side and rear views. Tap Camera again to resume caretaking. Desktop also supports Shift-drag or right-drag, plus scroll to zoom. **Center** restores the starting viewpoint.

## Play

Pet & tickle: drag slowly over the head to soothe or rub the body for giggles. Peek-a-boo: hold the scene/on-screen button or Space, then release after 1.2–2.5 seconds. Rattle: shake with a steady drag rhythm. Plush: tap to squeeze. Mobile: select and tap for a 20-second lullaby. Bubbles / boo: initially a playful sound; soap bubbles unlock at level 4.

Bond saves locally on this browser. Switching actions grants variety bonuses. Levels 2–5 add colored mobile stars, bunny ears/rattle color, bubbles and sunset lighting. Audio starts muted; tap Sound off to enable it. Optional `assets/coo.mp3`, `assets/giggle.mp3` and `assets/laugh.mp3` replace synthesized voices. Missing samples fall back to synthesis.

## Character and license

The former photographed relief has been replaced with a full skinned mesh, physical lighting, normal/textured materials and cast/received shadows. The skeleton is adapted to a seated pose, with breathing, gaze tracking, arm bounces and alternating kicks. A secure model-loading error/retry UI replaces the photo picker.

The model is Grab3D's **Baby Toddler**, licensed CC0; see [source and disclosure](assets/baby/SOURCE.md) and [supplied license](assets/baby/LICENSE.txt). It is AI-assisted and generic: fuller brown hair and a sage knit outfit, rather than an exact likeness of Grey or his striped sleeveless romper. It has no facial blendshapes; independent realistic eyelid/mouth expressions would require artist-authored facial rigging. No likeness match or production photorealism is claimed. The original photograph stays as reference, not as the character texture.

The self-hosted model is about 14 MB with 300k triangles. First load can take a moment; older mobile hardware needs performance validation. No runtime model API or third-party model hosting is required. The distributed GLB contains the original rig and walking/running clips; gameplay uses our seated procedural pose rather than those locomotion clips.

## Validation

Chromium checks cover model load and skeleton, seated bounds, side/rear orbit and reset, interaction feedback, and a 390×844 touch-emulated layout. Run `node tests/rigged.cjs` with Playwright and Chromium installed and the local server running. Real iPhone Safari, audio listening, and sustained mobile frame-rate testing remain manual validation.
