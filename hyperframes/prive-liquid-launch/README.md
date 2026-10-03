# Privé Liquid Glass Launch — HyperFrames Test

A self-contained 12-second vertical product-launch experiment for Privé, built with HyperFrames + GSAP.

## Visual direction

- 1080 × 1920 vertical social format
- White / warm-neutral Privé palette
- Liquid-glass surfaces using blur, refraction-like highlights, soft borders and floating depth
- Bold editorial typography
- Strong scene-to-scene kinetic transitions
- Product reveal built entirely in HTML/CSS so it remains editable by an agent
- No image or video dependencies in this first test

## Sequence

1. **More than grooming** — brand setup
2. **In the right hands** — brand statement
3. **The Privé experience** — mobile-product reveal
4. **Book. Groom. Return.** — high-energy typography beat
5. **Digital, done right** — product ecosystem
6. **Privé** — clean launch end card

## Requirements

- Node.js 22+
- FFmpeg
- npm

From the repository root:

```bash
npm install
npm run hf:doctor
npm run hf:preview
```

HyperFrames Studio opens the project for frame-accurate scrubbing.

Validate:

```bash
npm run hf:lint
npm run hf:check
```

Render:

```bash
npm run hf:render
```

Output:

```
hyperframes/prive-liquid-launch/renders/prive-liquid-glass-launch.mp4
```

## Editing

The whole video lives in `index.html`. The global GSAP timeline is registered as:

```js
window.__timelines.priveLaunch = tl;
```

All important motion uses that paused GSAP timeline rather than free-running CSS animations, which keeps the composition seekable for deterministic HyperFrames rendering.

## Next iteration ideas

- Replace the typographic PRIVÉ mark with the final SVG logo.
- Add real website/app screen captures.
- Add a music bed and designed impact hits.
- Add a second 16:9 composition for product-launch posts/screens.
- Build reusable scene components for LogicBloom client launch videos.
