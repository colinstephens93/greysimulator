# Baby character source

Model: Baby Toddler (rigged GLB) by Grab3D
Source: https://grab3d.com/models/characters/baby-character/
Download: https://grab3d.com/dl/baby-character-rigged/baby-character-rigged.glb
License source: https://grab3d.com/dl/baby-character-rigged/LICENSE.txt
Retrieved: 2026-11-07
License: CC0-1.0. Full supplied notice in LICENSE.txt.

Publisher discloses AI-assisted generation using Meshy, Blender cleanup and automated Meshy rigging. The model is a generic toddler; it is not a scan or reconstruction of Grey. We adapted the skeleton into a seated pose and drive procedural seated movements instead of the supplied walking/running clips. Source geometry and textures are unmodified. The photograph remains in the repo as a reference and is not used as the character surface.
## grey-realistic.glb

Model: "Sunlit Little Smile", generated with Meshy (meshy.ai) from a photograph of Grey, 2026-11-07.
License: CC BY 4.0. Model created with Meshy – CC BY 4.0 License. Attribution to Meshy is required when redistributing.
Processing: the Meshy download arrived truncated (only the tail of the normal map was missing; it was rebuilt from its last intact rows). The mesh was then reduced from ~631k to ~45k triangles, duplicate vertices welded, textures downscaled to 1024, and a 19-bone skeleton matching this game's bone names (Hips, Spine, Spine1, Neck, Head, shoulders/arms/hands, legs/feet) was built and skinned in Blender. The model's rest pose is already seated. The unmodified Meshy download is not in this repo.

Cleanup, 2026-11-08: removed the normal and metallic-roughness textures (baked for the 631k mesh, they mis-lit the reduced one), snapped T-junction seam vertices together and split seam edges at stray corners so ~85% of the seam cracks close, made the material single-sided, smoothed vertex normals, re-padded UV island gutters, and re-encoded the base color JPEG (quality 88). Geometry shape and the skeleton are otherwise unchanged. File size went from 6.3 MB to 3.7 MB.
