# Privé Liquid Glass Launch V2

This is the production-oriented follow-up to the first HyperFrames proof of concept.

## What changed

- Uses HyperFrames scene clips with explicit `data-start`, `data-duration`, and `data-track-index`.
- Adds deterministic inline SVG displacement for stronger liquid-glass distortion.
- Adds global atmospheric motion that persists through all six scenes.
- Adds designed flash and whip transition hits.
- Adds more cinematic camera-style movement to the phone and browser product reveals.
- Adds an expanded website + mobile ecosystem scene.
- Keeps all render-critical motion on a single paused GSAP timeline.
- Includes a sibling `preview.html` shim for local frame scrubbing.

## Run

From the repo root:

```bash
npm install
npm run hf:v2:preview
```

Validate:

```bash
npm run hf:v2:lint
npm run hf:v2:check
```

Render:

```bash
npm run hf:v2:render
```

Output:

```
hyperframes/prive-launch-v2/renders/prive-launch-v2.mp4
```

## Next production pass

The composition is intentionally self-contained. The next pass should replace synthetic product surfaces with real Privé assets:

- final SVG logo,
- real website capture,
- real mobile-app screens,
- licensed music / sound design,
- exact launch copy.

The CSS product mockups can remain underneath as fallbacks and transition surfaces.
