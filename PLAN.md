# Grey Simulator implementation plan

1. Build a single HTML application with a warm responsive HUD and Three.js nursery.
2. Segment the supplied photograph with an anatomically calibrated feathered silhouette; generate normal/depth relief and animate six body zones. Preserve image identity with deliberately subtle motion.
3. Implement pointer/touch petting, timed peekaboo, rhythmic rattle, plush squeaks, mobile lullaby and bubbles; persistent bond, variety and cosmetic unlocks.
4. Provide procedural Web Audio with optional sample overrides, mute, lighting, file-picker recovery, reduced motion and accessible controls.
5. Run browser checks for loading, rendering, interactions, persistence and mobile layout; document delivery and limitations.

## Review decisions
A single photo cannot reconstruct hidden anatomy or realistic new facial expressions. This implementation uses restrained relief deformation rather than claiming a full reconstructed human. Canvas masking is calibrated to the supplied image, not general-purpose AI segmentation. Browsers may prohibit any WebGL upload of file:// images: a user-selected Blob URL is the secure recovery path. A photo picker is always available. Three.js requires network access to its pinned CDN. No deployment or Pages settings changes are needed to implement the application.

## Implementation status

Steps 1–4 implemented as a playable single-file first version. Chromium desktop checks passed without JavaScript or shader errors: image load, peek sweet spot, lullaby, audio activation, plush, rattle, persistence, cosmetic unlocks, bubbles, and responsive width. Mobile screenshot review prompted tighter HUD text and removal of peek-cover edge artifacts. Real Safari/Chrome device performance, audio listening review, more realistic hands, more sophisticated segmentation and nursery visual polish remain release-hardening work; production photorealism is not claimed.

## Rigged character replacement (2026-11-07)

User rejected the photo-based character and approved integration of a licensed rigged baby. Replaced the relief pipeline with Grab3D's CC0 Baby Toddler GLB (source/license preserved under assets/baby). Adapted imported bones into seated V-sit; normalized posed skinned bounds; added procedural gaze, breathing, arm and leg reactions; enabled full side/rear camera orbit and loading recovery. This supersedes the original single-photo character requirement. The model is generic, with sage knit clothing and fuller hair, not an exact Grey likeness. Facial blendshape authoring and artist-quality likeness customization remain outside this stock-model integration.
