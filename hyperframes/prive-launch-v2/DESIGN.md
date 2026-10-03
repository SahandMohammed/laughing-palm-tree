# Privé Launch V2 — Design Direction

## Identity

- Canvas: warm white / ivory, never pure sterile white.
- Primary ink: near-black.
- Brand accent: olive `#4D4D35`.
- Material language: transparent, refractive, premium glass rather than glossy plastic.
- Typography: oversized editorial sans serif with tight tracking and short phrases.
- Tone: composed, premium, confident, modern.

## Motion

- Entrances are fast and confident: 0.30–0.70 s.
- Background material drifts more slowly than text so scenes have depth.
- Use hard cuts for most scene changes.
- Use only a few designed transition hits: flash / whip / flash.
- No infinite animation.
- No wall-clock animation.
- No hover, scroll, random or event-driven motion.
- Everything render-critical lives on the paused master GSAP timeline.

## Liquid glass

Glass combines:

1. translucent gradient fill,
2. white edge highlight,
3. backdrop blur,
4. broad soft shadow,
5. inline SVG displacement filter with a fixed seed,
6. slow transform motion so the distortion feels alive without becoming chaotic.

## Composition

- 1080 × 1920
- 12 seconds
- 30 fps
- 6 scenes
- Vertical reel / story launch format
