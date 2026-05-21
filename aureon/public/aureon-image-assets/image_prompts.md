# AUREON — Image Generation Prompts

> All prompts formatted as JSON for Nano Banana / API-based image generation.
> Each entry includes the target filename, dimensions, and a detailed prompt.

---

## 1. Cloud Overlay

```json
{
  "filename": "cloud-overlay.png",
  "path": "public/images/cloud-overlay.png",
  "width": 1920,
  "height": 1080,
  "prompt": "Ethereal wispy white and light grey cloud formations floating against a pure black background. Volumetric fog tendrils with soft edges. Multiple cloud layers at varying densities creating natural depth. Thin cirrus wisps mixed with denser cumulus puffs. No ground, no sky gradient, just isolated cloud forms on solid black. High contrast. Transparent-feeling edges that dissolve into nothing. Shot from within the clouds looking horizontally. Cinematic atmospheric texture overlay. 8K resolution, photorealistic.",
  "negative_prompt": "blue sky, ground, landscape, sun, stars, text, watermark, low resolution, cartoon, illustration",
  "style": "photorealistic",
  "usage": "Screen blend mode overlay for hero cloud transition — 4 layers with parallax"
}
```

---

## 2. Private Mansion

```json
{
  "filename": "private-mansion.png",
  "path": "public/images/private-mansion.png",
  "width": 1920,
  "height": 1080,
  "prompt": "Ultra-luxury modern mansion estate photographed from an elevated aerial perspective at twilight. Dramatic exterior architecture with floor-to-ceiling glass walls glowing warm amber from interior lighting. Infinity pool reflecting the dark sky. Minimalist landscaping with mature olive trees. Dark moody atmosphere with deep blue-black sky. The mansion is a horizontal sprawling single-story compound with flat rooflines and cantilevered concrete volumes. Warm bronze accent lighting along walkways. Architectural photography, editorial quality, cinematic color grading with deep shadows and selective warm highlights.",
  "negative_prompt": "daytime, bright colors, suburban, small house, cluttered, people, cars, text, watermark",
  "style": "architectural photography",
  "usage": "PrivateAccessSection — dark flashlight/spotlight cursor reveal effect background"
}
```

---

## 3. Amenities — Spa

```json
{
  "filename": "amenities/spa.png",
  "path": "public/images/amenities/spa.png",
  "width": 800,
  "height": 1000,
  "prompt": "Ultra-luxury private spa interior with dark basalt stone walls and a glowing heated plunge pool. Moody dramatic lighting with warm amber uplights embedded in the floor. Steam rising from the turquoise-tinted water surface. Minimalist Japanese-inspired design with clean lines. Raw concrete ceiling with recessed linear LED strips. A single wooden bench carved from a solid block of teak. Towels rolled neatly on a stone shelf. Shot with a wide-angle architectural lens. Editorial luxury interior photography with rich shadows and selective warm pool glow. Vertical composition, portrait orientation.",
  "negative_prompt": "people, bright fluorescent lighting, cheap tiles, cluttered, outdoor, text, watermark",
  "style": "luxury interior photography",
  "usage": "SignatureAmenitiesSection — amenity card with curtain-reveal scroll animation"
}
```

---

## 4. Amenities — Vault

```json
{
  "filename": "amenities/vault.png",
  "path": "public/images/amenities/vault.png",
  "width": 800,
  "height": 1000,
  "prompt": "Climate-controlled underground private art vault with dramatic museum-quality lighting. A long corridor-like gallery space with polished dark concrete floors reflecting ceiling spotlights. Walls of brushed steel and dark oak paneling. Glass-enclosed display cases housing sculptures and rare artifacts lit with precise halogen spots. Deep shadows with pools of warm directional light creating cinematic contrast. Industrial-luxury aesthetic mixing raw concrete with bronze hardware details. Vertical composition, portrait orientation. Architectural photography, Dezeen magazine quality.",
  "negative_prompt": "bright, colorful, messy, people, outdoor, cheap materials, text, watermark",
  "style": "luxury interior photography",
  "usage": "SignatureAmenitiesSection — amenity card with curtain-reveal scroll animation"
}
```

---

## 5. Amenities — Pool

```json
{
  "filename": "amenities/pool.png",
  "path": "public/images/amenities/pool.png",
  "width": 800,
  "height": 1000,
  "prompt": "Zero-edge infinity pool with the water surface perfectly dissolving into a dramatic ocean horizon at golden hour. The pool is part of a cliffside luxury villa with dark volcanic stone decking. Crystal clear aquamarine water with gentle ripples catching the last warm sunlight. Minimalist architecture framing the shot — a single cantilevered concrete overhang creating geometric shadow. No furniture, no people — pure architectural and natural beauty. The horizon line where pool meets ocean meets sky creates a seamless gradient from turquoise to amber to deep blue. Vertical composition, portrait orientation. Vogue Living editorial quality.",
  "negative_prompt": "people, pool toys, plastic, suburban, indoor pool, text, watermark, crowded",
  "style": "luxury architectural photography",
  "usage": "SignatureAmenitiesSection — amenity card with curtain-reveal scroll animation"
}
```

---

## 6. Craft — Stone Closeup

```json
{
  "filename": "craft/stone-closeup.webp",
  "path": "public/images/craft/stone-closeup.webp",
  "width": 1200,
  "height": 800,
  "prompt": "Extreme macro close-up photograph of hand-cut Roman travertine stone surface. Natural porous texture with tiny fossilized holes and veins visible. Warm cream and honey tones with subtle grey marbling. Raking side-light creating deep shadows in the pores revealing three-dimensional texture. Shot with a macro lens at f/2.8, shallow depth of field with the front edge sharp and the back softly blurred. Museum-quality material photography. Neutral warm color palette. No context, just the pure stone surface filling the entire frame.",
  "negative_prompt": "wide shot, building, architecture, people, text, watermark, artificial, painted",
  "style": "macro material photography",
  "usage": "CraftSection / material texture reference"
}
```

---

## 7. Craft — Glass Reflection

```json
{
  "filename": "craft/glass-reflection.webp",
  "path": "public/images/craft/glass-reflection.webp",
  "width": 1200,
  "height": 800,
  "prompt": "Macro photograph of architectural glass catching and refracting warm golden sunlight. Abstract caustic light patterns dancing across a smooth glass surface. Prismatic rainbow edges where light bends at the glass boundary. Clean, minimal composition — the glass panel edge is barely visible, the focus is on the light itself. Warm amber and cool blue tones mixing where refraction splits the spectrum. Shot with professional macro lens, very shallow depth of field. Ethereal and abstract quality. Pure material study.",
  "negative_prompt": "windows, building exterior, people, text, watermark, dirty glass, fingerprints",
  "style": "abstract macro photography",
  "usage": "CraftSection / material texture reference"
}
```

---

## 8. Craft — Water Detail

```json
{
  "filename": "craft/water-detail.webp",
  "path": "public/images/craft/water-detail.webp",
  "width": 1200,
  "height": 800,
  "prompt": "Macro close-up of perfectly still water surface with the faintest concentric ripple emanating from a single point. Dark reflective surface capturing warm golden architectural lighting from above. Abstract and meditative quality. The water is contained in a dark stone basin or infinity edge — only the water surface visible. Mirror-like reflections with one gentle disturbance breaking the symmetry. Deep blacks and warm amber highlights. Zen garden aesthetic. Shot overhead looking straight down at the water. Professional material photography.",
  "negative_prompt": "ocean, swimming pool, splashing, blue water, people, outdoor lake, text, watermark",
  "style": "abstract material photography",
  "usage": "CraftSection / material texture reference"
}
```

---

## 9. Craft — Blueprint Detail

```json
{
  "filename": "craft/blueprint-detail.webp",
  "path": "public/images/craft/blueprint-detail.webp",
  "width": 1200,
  "height": 800,
  "prompt": "Close-up photograph of luxury architectural blueprint or technical drawing on thick cream cotton paper. Precise thin ink lines showing floor plan details — walls, dimensions, annotations in elegant sans-serif typeface. A bronze mechanical pencil and steel compass resting on the edge. Warm directional desk lamp lighting from the upper left creating soft shadows under the tools. Shallow depth of field with the center of the drawing sharp and edges softly blurred. The paper has a subtle texture and the ink is dark navy blue. Analog craftsmanship aesthetic. Architect studio editorial photography.",
  "negative_prompt": "computer screen, digital, CAD software, messy desk, bright colors, text, watermark",
  "style": "editorial still life photography",
  "usage": "CraftSection / material texture reference"
}
```

---

## 10. Editorial — Staircase

```json
{
  "filename": "editorial/staircase.png",
  "path": "public/images/editorial/staircase.png",
  "width": 1000,
  "height": 1250,
  "prompt": "Dramatic light-filled spiral staircase carved from solid Roman travertine stone in an ultra-luxury villa interior. Looking upward through the spiral revealing multiple floors. Natural sunlight pouring in from a large skylight above creating God rays and warm light pools on the stone steps. Each step has a subtle rounded nosing and the balustrade is minimal brushed bronze. The walls are the same travertine, creating a monolithic sculptural effect. Warm cream and honey tones throughout. Shot with an ultra-wide architectural lens looking up. Architectural Digest cover quality. Portrait orientation, vertical 4:5 aspect ratio.",
  "negative_prompt": "dark, exterior, modern glass, cheap materials, carpet, wooden stairs, people, text, watermark",
  "style": "luxury architectural photography",
  "usage": "BespokeCraftSection — parallax image card"
}
```

---

## 11. Editorial — Living Space

```json
{
  "filename": "editorial/living.png",
  "path": "public/images/editorial/living.png",
  "width": 1000,
  "height": 1350,
  "prompt": "Panoramic sunlit luxury living space with floor-to-ceiling glass walls overlooking a mountainous landscape. Interior features a sunken conversation pit with cream linen upholstery and a circular travertine coffee table. The ceiling is exposed board-formed concrete with warm recessed lighting. A monumental fireplace of dark basalt stone anchors one wall. Natural light floods the space creating long geometric shadows from the window mullions on the polished terrazzo floor. Warm earth tones — cream, sand, charcoal, bronze. Minimalist furnishing with museum-quality sculptural objects. Dwell magazine editorial quality. Portrait orientation, vertical 3:4 aspect ratio.",
  "negative_prompt": "cluttered, small room, suburban, cheap furniture, dark interior, people, text, watermark",
  "style": "luxury interior photography",
  "usage": "BespokeCraftSection — parallax image card"
}
```

---

## 12. Materials — Travertine

```json
{
  "filename": "materials/travertine.png",
  "path": "public/images/materials/travertine.png",
  "width": 1000,
  "height": 1350,
  "prompt": "Full-frame macro photograph of polished Roman travertine stone slab. Warm cream base color with distinctive natural pitting, veining and fossilized patterns. Horizontal strata lines in honey, amber and pale grey tones. The surface has been honed to a matte-satin finish revealing the depth of the natural voids and crystal formations. Even, neutral studio lighting from above with very subtle shadows in the pore cavities. No background, no context — just pure stone surface edge to edge. Museum-quality material specimen photography. Portrait orientation.",
  "negative_prompt": "tiles, grout lines, wall, floor, building, architecture, people, text, watermark",
  "style": "macro material photography",
  "usage": "MaterialitySection — scroll-driven wipe transition between 3 materials"
}
```

---

## 13. Materials — Bronze

```json
{
  "filename": "materials/bronze.png",
  "path": "public/images/materials/bronze.png",
  "width": 1000,
  "height": 1350,
  "prompt": "Full-frame macro photograph of brushed bronze metal surface. Rich warm golden-brown patina with fine directional brush marks creating subtle linear texture. The surface catches warm directional light from the upper right, creating a gentle gradient from bright burnished gold to deep shadowed umber across the frame. Tiny imperfections and natural oxidation spots adding character and depth. The metal has a living, warm quality — not polished mirror-bright but a sophisticated satin hand-brushed finish. No background, pure metal surface filling the entire frame. Studio material photography. Portrait orientation.",
  "negative_prompt": "gold bar, jewelry, coins, object, shiny mirror, people, text, watermark",
  "style": "macro material photography",
  "usage": "MaterialitySection — scroll-driven wipe transition, dark theme"
}
```

---

## 14. Materials — Oak

```json
{
  "filename": "materials/oak.png",
  "path": "public/images/materials/oak.png",
  "width": 1000,
  "height": 1350,
  "prompt": "Full-frame macro photograph of smoked European oak wood surface. Deep charcoal-brown to dark espresso tones with prominent grain patterns and growth rings visible. The wood has been deeply smoked and oiled, creating a rich velvety matte surface. Natural grain runs vertically through the frame with dramatic cathedral arch patterns. Warm sidelight catching the subtle raised grain texture creating micro-shadows. Deep, moody, intimate lighting. No background, just the pure wood surface filling the entire frame. Luxury material specimen photography. Portrait orientation.",
  "negative_prompt": "furniture, floor planks, bright pine, light wood, plywood, people, text, watermark",
  "style": "macro material photography",
  "usage": "MaterialitySection — scroll-driven wipe transition, darkest theme"
}
```

---

## 15. Projects — Villa

```json
{
  "filename": "projects/villa-01.webp",
  "path": "public/images/projects/villa-01.webp",
  "width": 1600,
  "height": 900,
  "prompt": "Horizontal luxury villa embedded into a Mediterranean coastal hillside at golden hour. Low-slung modernist architecture with massive cantilevered concrete volumes extending over the cliff edge. Floor-to-ceiling glass walls revealing warm interior lighting. A zero-edge infinity pool stretches along the full length of the villa, its water surface reflecting the sunset sky. Mature olive trees and native grasses frame the composition. The architecture dissolves the boundary between interior and landscape. Warm golden light with deep blue sky transitioning to amber at the horizon. Shot from a slightly elevated angle showing the full scope of the property. Architectural Digest hero image quality. Landscape 16:9 aspect ratio.",
  "negative_prompt": "suburban, small, ugly, construction site, people, cars, text, watermark, night",
  "style": "luxury architectural photography",
  "usage": "AnthologySection — horizontal scroll parallax card"
}
```

---

## 16. Projects — Tower

```json
{
  "filename": "projects/tower-01.webp",
  "path": "public/images/projects/tower-01.webp",
  "width": 1600,
  "height": 900,
  "prompt": "Monolithic luxury residential tower rising from an urban waterfront at blue hour. The tower is a singular dark glass and bronze monolith — a slender rectangular prism with chamfered corners catching the last light. The facade is a grid of floor-to-ceiling glass panels with warm amber interiors visible on scattered floors. The tower is reflected perfectly in the still harbor water below. Minimal surrounding context — the tower dominates the frame as a singular sculptural object against a gradient twilight sky from deep navy to pale gold at the horizon. Ultra-modern, almost alien in its perfection. Landscape 16:9 aspect ratio.",
  "negative_prompt": "suburban, short building, ugly, construction crane, daytime, bright, people, text, watermark",
  "style": "luxury architectural photography",
  "usage": "AnthologySection — horizontal scroll parallax card"
}
```

---

## 17. Projects — Estate

```json
{
  "filename": "projects/estate-01.webp",
  "path": "public/images/projects/estate-01.webp",
  "width": 1600,
  "height": 900,
  "prompt": "Aerial drone photograph of a sprawling ultra-luxury private compound on a tropical island at sunrise. Multiple interconnected low-rise pavilions with green living roofs connected by covered walkways through manicured tropical gardens. A large central courtyard with a mature banyan tree. Private beach with powdery white sand visible at the edge. Tennis court, helipad, and a private dock with a yacht visible. The compound is surrounded by dense tropical vegetation creating total privacy. Warm morning light with long shadows. The architecture blends naturally with the landscape using local stone, wood, and glass. Shot from 200m altitude looking down at 45 degrees. Luxury travel magazine quality. Landscape 16:9 aspect ratio.",
  "negative_prompt": "hotel, resort with crowds, urban, small property, text, watermark, night",
  "style": "aerial luxury photography",
  "usage": "AnthologySection — horizontal scroll parallax card"
}
```

---

## 18. Services — Rent

```json
{
  "filename": "services/rent.png",
  "path": "public/images/services/rent.png",
  "width": 1200,
  "height": 1800,
  "prompt": "Interior of an ultra-luxury furnished rental villa living room at golden hour. Warm sunlight streaming through sheer linen curtains onto a cream bouclé sofa. A low walnut coffee table with a single ceramic vase holding dried pampas grass. Polished concrete floors with a hand-knotted silk rug. The space feels lived-in but immaculate — a casually draped cashmere throw, a stack of art books. Through the window, a Mediterranean terrace with olive trees is visible. Earth tones — warm sand, cream, walnut, terracotta. The feeling is temporary luxury, a curated escape. Vertical portrait orientation, 2:3 aspect ratio. Editorial interior photography, Cereal magazine quality.",
  "negative_prompt": "empty room, cold modern, sterile, messy, cheap furniture, people, text, watermark",
  "style": "editorial interior photography",
  "usage": "ServicesSection — revealed on hover in accordion column"
}
```

---

## 19. Services — Sell

```json
{
  "filename": "services/sell.png",
  "path": "public/images/services/sell.png",
  "width": 1200,
  "height": 1800,
  "prompt": "Dramatic exterior of a landmark modernist villa at twilight, photographed from the entrance approach. A long travertine pathway lined with uplighting leads to a massive pivoting front door of aged bronze, partially open revealing a warm-lit interior gallery with a monumental sculpture visible inside. The architecture is a composition of intersecting concrete planes and glass volumes. Mature landscape of architectural olive trees and native grasses lit with subtle ground-level spots. Deep blue twilight sky with a single bright planet visible. The image conveys legacy, permanence, and gravitas — this is a property being passed to its next steward. Vertical portrait orientation, 2:3 aspect ratio.",
  "negative_prompt": "for sale sign, real estate agent, suburban, cheap, daytime, people, text, watermark",
  "style": "luxury architectural photography",
  "usage": "ServicesSection — revealed on hover in accordion column"
}
```

---

## 20. Services — Buy

```json
{
  "filename": "services/buy.png",
  "path": "public/images/services/buy.png",
  "width": 1200,
  "height": 1800,
  "prompt": "A breathtaking view from inside an ultra-luxury penthouse looking outward through floor-to-ceiling glass at a dramatic city skyline at golden hour. The interior is minimal — just the edge of a polished marble floor, a single Mies van der Rohe Barcelona chair, and a glass of amber whiskey on a bronze side table catching the warm light. The city skyline is a forest of glass towers bathed in warm sunset glow with the sky transitioning from gold to deep purple. The composition conveys aspiration, acquisition, and the promise of owning your view of the world. Vertical portrait orientation, 2:3 aspect ratio. Wallpaper magazine quality editorial photography.",
  "negative_prompt": "suburban view, curtains, cluttered, cheap interior, people, text, watermark",
  "style": "luxury editorial photography",
  "usage": "ServicesSection — revealed on hover in accordion column"
}
```

---

## 21. Logo — AUREON Wordmark (SVG)

```json
{
  "filename": "icons/logo-aureon.svg",
  "path": "public/icons/logo-aureon.svg",
  "format": "SVG",
  "prompt": "NOT an image generation prompt — this is a hand-crafted SVG. Letters A-U-R-E-O-N in a custom geometric sans-serif typeface with thin strokes. Color: #8A6A3E (bronze). Includes a subtle decorative underline in #C8A96A at 40% opacity. Viewbox: 200x40.",
  "note": "See prompt.md for exact SVG source code"
}
```

---

## 22. Logo — AUREON Diamond Mark (SVG)

```json
{
  "filename": "icons/logo-aureon-mark.svg",
  "path": "public/icons/logo-aureon-mark.svg",
  "format": "SVG",
  "prompt": "NOT an image generation prompt — this is a hand-crafted SVG. Geometric diamond brand mark: outer diamond, inner diamond at 60% opacity, vertical and horizontal crosshair lines at 30% opacity, center dot filled #C8A96A. All strokes: #8A6A3E, stroke-width 1.2. Viewbox: 48x48.",
  "note": "See prompt.md for exact SVG source code"
}
```

---

## Batch Generation Summary

| # | Filename | Dimensions | Style |
|---|----------|-----------|-------|
| 1 | cloud-overlay.png | 1920×1080 | Atmospheric texture |
| 2 | private-mansion.png | 1920×1080 | Architectural photo |
| 3 | amenities/spa.png | 800×1000 | Interior photo |
| 4 | amenities/vault.png | 800×1000 | Interior photo |
| 5 | amenities/pool.png | 800×1000 | Architectural photo |
| 6 | craft/stone-closeup.webp | 1200×800 | Macro texture |
| 7 | craft/glass-reflection.webp | 1200×800 | Abstract macro |
| 8 | craft/water-detail.webp | 1200×800 | Abstract macro |
| 9 | craft/blueprint-detail.webp | 1200×800 | Editorial still life |
| 10 | editorial/staircase.png | 1000×1250 | Interior architecture |
| 11 | editorial/living.png | 1000×1350 | Interior architecture |
| 12 | materials/travertine.png | 1000×1350 | Material specimen |
| 13 | materials/bronze.png | 1000×1350 | Material specimen |
| 14 | materials/oak.png | 1000×1350 | Material specimen |
| 15 | projects/villa-01.webp | 1600×900 | Exterior architecture |
| 16 | projects/tower-01.webp | 1600×900 | Exterior architecture |
| 17 | projects/estate-01.webp | 1600×900 | Aerial luxury |
| 18 | services/rent.png | 1200×1800 | Editorial interior |
| 19 | services/sell.png | 1200×1800 | Architectural exterior |
| 20 | services/buy.png | 1200×1800 | Editorial interior |
| 21 | icons/logo-aureon.svg | SVG vector | Hand-crafted SVG |
| 22 | icons/logo-aureon-mark.svg | SVG vector | Hand-crafted SVG |

---

## Global Style Notes for All Prompts

- **Color palette**: Warm earth tones — cream (#F5EFE4), champagne (#C8A96A), bronze (#8A6A3E), ink (#17130F)
- **Mood**: Cinematic, editorial, moody warmth with deep shadows
- **Quality**: Architectural Digest / Dezeen / Wallpaper magazine cover quality
- **Lighting**: Golden hour, warm directional, dramatic chiaroscuro
- **Composition**: Clean, minimal, no clutter, no people
- **Common negative prompt additions**: text, watermark, logo, low quality, blurry, cartoon, illustration, amateur
