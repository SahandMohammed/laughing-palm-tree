# LogicBloom Motion Demo

A code-driven 9:16 SaaS/product-launch reel built with React and Remotion.

The goal is to demonstrate the style of motion graphics often seen in polished product-launch reels: kinetic type, perspective UI, animated data visualization, glow, depth, masking, blur, layered transitions, and a reusable brand system — without After Effects.

## Composition

- **ID:** `LogicBloomLaunch`
- **Format:** 1080 × 1920
- **Frame rate:** 30 FPS
- **Duration:** 450 frames / 15 seconds
- **Output:** H.264 MP4

### Storyboard

1. **Brand reveal** — SVG mark + kinetic headline
2. **Product reveal** — perspective SaaS dashboard with animated metrics
3. **Feature system** — three staggered feature cards
4. **Outro** — LogicBloom CTA / brand lockup

The demo dashboard uses **Privé Management** as sample product copy. It is intentionally drawn in React rather than captured from a real app so the repository is self-contained.

## Run locally

```bash
npm install
npm run studio
```

Open the Remotion Studio and select **LogicBloomLaunch**.

## Render

Full vertical video:

```bash
npm run render
```

Faster half-resolution preview:

```bash
npm run render:preview
```

Outputs are written to `out/`.

## Where to customize

- `src/LaunchFilm.tsx` — scene order, copy, timing, storyboard
- `src/components.tsx` — motion components, product UI, palette, logo mark
- `src/Root.tsx` — resolution, FPS, total duration

### Replace the temporary mark

`LogoMark` is a small inline SVG created only for this demo. Replace it with the real LogicBloom SVG/PNG once available.

### Turn this into a reusable motion kit

A production version can split the current system into reusable compositions such as:

- `LogoReveal`
- `ProductHero`
- `BrowserMockup`
- `PhoneMockup`
- `FeatureCard`
- `KineticHeadline`
- `MetricReveal`
- `CTAOutro`

Then each client launch reel can be driven by props instead of rewriting animation code.

## GitHub render

The included GitHub Actions workflow type-checks the project and renders a preview MP4. Download the `logicbloom-motion-preview` artifact from the workflow run.

## Notes

This first pass deliberately uses only React + Remotion and CSS/SVG effects. Three.js, shaders, real screenshots, sound design, and client-specific assets can be layered in later once the motion direction is approved.
