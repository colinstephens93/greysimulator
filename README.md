# Grey Simulator

A gentle, endless photo-based caretaking sandbox. Open `index.html` through a web server (for example `python -m http.server 8000`) or host this repository on GitHub Pages. No build step. Three.js 0.160.1 is loaded from jsDelivr, so an internet connection is required.

## Play

- Pet & tickle: drag slowly over Grey's head to soothe; rub his tummy or feet for giggles.
- Peek-a-boo: hold the on-screen button, the scene, or Space; release after 1.2–2.5 seconds for a bigger reaction.
- Rattle: drag and shake at a steady rhythm.
- Plush: select and tap the scene to squeeze.
- Mobile: select and tap to wind 20 seconds of synthesized lullaby.
- Bubbles / boo: a playful sound initially; shimmering bubbles unlock at level 4. Tap bubbles to pop them.

Bond saves on this browser/device. Switching activities earns a variety bonus. Levels 2–5 add colored mobile stars, bunny ears and rattle color, bubbles, and sunset lighting. Sound starts muted; use Sound off to enable it after a tap. Optional `assets/coo.mp3`, `assets/giggle.mp3`, and `assets/laugh.mp3` replace synthesized voices automatically. Missing samples safely use synthesis.

## Image and browser behavior

The supplied photo is loaded automatically with relative path fallbacks. The feathered subject mask is calibrated to this exact photograph, including removal of screenshot overlays. The Load photo picker processes images locally and does not upload them. Use that picker if file:// security prevents canvas processing. Browsers that reject local image pixels also reject those pixels as WebGL textures, so a secure Blob URL from the picker is the reliable recovery, rather than an unsafe texture-upload workaround.

This is an articulated photo relief, not a reconstructed human: unseen angles, independent limb motion, and new photorealistic facial expressions cannot be recovered from one photo. Blink, breathing, gaze and joyful movements are deliberately subtle. The nursery uses procedural geometry and textures; its visual fidelity is a stylized realistic scene rather than a scanned photorealistic room. The peek cover is a soft hand-colored visual cover, not photographed anatomical hands. Procedural voices are synthesized effects, not authentic recordings of Grey.

Reduced-motion preferences reduce character movement and camera sway. Dock controls support keyboard focus; Space supports peek-a-boo. Pointer events unify mouse, pen and touch, with scene scrolling disabled. WebGL is required. Mobile Safari and real-device performance still require device validation; a consistent 60 FPS is not guaranteed.

## Delivery

`PLAN.md` contains the implementation review and plan. The application is self-contained in `index.html` apart from the supplied photograph, the pinned Three.js CDN dependency, and optional audio files. Hosting is ready, but GitHub Pages has not been enabled or deployed by this change.

## Validation

Chromium automated checks cover photo processing/rendering, timed peek-a-boo rewards, lullaby state, sound activation, plush and rattle input, persistent bond, cosmetic unlocks, bubble spawning and mobile layout width. To repeat with Playwright installed, serve the root on port 8000 and run `node tests/browser.cjs`; optional `GREY_URL` and `CHROMIUM_PATH` override the target and browser executable. Test screenshots are written to `/tmp`. Safari hardware testing and listening review of synthesized audio remain manual checks.
