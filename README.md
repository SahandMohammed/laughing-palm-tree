# LogicBloom Motion System

A code-driven motion-design playground built with React + Remotion.

The primary composition is now a **white-theme LogicBloom case study for Privé Grooming Lounge**, based on the supplied LogicBloom identity, white silk reference, and Privé homepage reference.

## Primary composition

- **ID:** `LogicBloomPriveCaseStudy`
- **Format:** 1080 × 1920
- **Frame rate:** 30 FPS
- **Duration:** 450 frames / 15 seconds
- **Output:** H.264 MP4

### Art direction

The film uses a restrained LogicBloom motion language:

- near-white editorial canvas
- LogicBloom navy: `#0E2247`
- procedurally animated pale-blue silk/fabric environment
- precise logo/wordmark reveal
- minimal typography and generous whitespace
- Privé's dark/ivory/beige visual language introduced only inside the case study
- slow camera movement, masks, depth and fabric wipes instead of generic slide transitions
- no exaggerated bounce or neon SaaS effects

### Storyboard

1. **LogicBloom identity** — radial symbol construction and lockup
2. **Selected Work / 001** — Privé project introduction
3. **Web experience reveal** — Privé homepage emerges from the animated white environment
4. **Deliverables** — Website, Digital Invitation, IT Infrastructure, Management System
5. **Outro** — LogicBloom / “From idea to production.”

The Privé web frame is recreated in React from the supplied homepage reference so the demo remains deterministic and self-contained during rendering.

## Run locally

```bash
npm install
npm run studio
```

Select **LogicBloomPriveCaseStudy** in Remotion Studio.

## Render

```bash
npm run render
```

Output:

```text
out/logicbloom-prive-case-study.mp4
```

Fast half-resolution preview:

```bash
npm run render:preview
```

## Files

- `src/PriveCaseStudy.tsx` — new white-theme case study and motion language
- `src/LaunchFilm.tsx` — original dark prototype, kept as a legacy comparison
- `src/Root.tsx` — composition registration
- `src/components.tsx` — original prototype components

## Next production pass

The current implementation establishes the motion direction. A production pass can replace the React recreation of the website with captured real product frames, add the exact vector LogicBloom artwork, add sound design, and create 1080×1350 / 1920×1080 variants from the same scene system.
