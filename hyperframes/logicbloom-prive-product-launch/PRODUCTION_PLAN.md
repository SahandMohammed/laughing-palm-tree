# LogicBloom × Privé — HyperFrames Production Plan

## Goal

Build a finished premium product-launch film demonstrating LogicBloom's work for Privé using:

- actual brand assets
- actual Privé website
- actual Privé management system
- actual mobile application surfaces
- generated narration
- generated/licensed music
- sound design
- deterministic HyperFrames animation

Do not modify or delete the earlier HyperFrames experiments.

Create a new production composition.

---

# 1. Project Structure

Use:

```text
hyperframes/
├── prive-liquid-launch/
├── prive-launch-v2/
│
└── logicbloom-prive-product-launch/
    ├── index.html
    ├── preview.html
    ├── README.md
    ├── STORYBOARD.md
    ├── TIMING.json
    ├── DESIGN.md
    │
    ├── scenes/
    │   ├── 01-opening.js
    │   ├── 02-prive-brand.js
    │   ├── 03-right-hands.js
    │   ├── 04-website.js
    │   ├── 05-invitation.js
    │   ├── 06-infrastructure.js
    │   ├── 07-management.js
    │   ├── 08-mobile.js
    │   ├── 09-ecosystem.js
    │   └── 10-final.js
    │
    ├── styles/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── glass.css
    │   ├── typography.css
    │   └── scenes.css
    │
    └── renders/
```

Shared assets:

```text
assets/
├── logicbloom/
├── prive/
├── website/
├── management/
├── mobile/
└── audio/
```

---

# 2. Phase One — Asset Audit

Before implementing visuals, inspect every committed asset.

Create:

```text
hyperframes/logicbloom-prive-product-launch/ASSET_MAP.md
```

Document:

- filename
- brand
- type
- resolution
- intended scene
- whether it is production-ready

Example:

```text
logo-primary.svg
Brand: LogicBloom
Use: final lockup
Ready: yes
```

Do not start designing around assumptions when actual assets exist.

---

# 3. Phase Two — Brand Tokens

Create:

```text
styles/tokens.css
```

Include the LogicBloom system.

```css
:root {
  --lb-navy: #0e2247;
  --lb-green: #2f6657;
  --lb-muted: #526074;
  --lb-separator: #8b95a5;

  --lb-white: #ffffff;
  --lb-bg-soft: #f7f9fc;
  --lb-bg-blue: #eaf0f8;

  --lb-pearl: #fbfdff;
  --lb-ice: #ecf5fc;
  --lb-pale-blue: #cddff0;
  --lb-steel-blue: #9cb8d5;
  --lb-soft-navy: #5478a3;
}
```

Also extract Privé's actual colors from its committed brand assets/guidelines.

Do not guess them.

---

# 4. Phase Three — Voiceover

Create:

```text
assets/audio/script.txt
```

using the final storyboard voiceover.

List available voices:

```bash
npx hyperframes tts --list
```

Generate at least three short voice tests.

Use the first paragraphs only.

Test:

- voice A
- voice B
- voice C

Target delivery:

- calm
- premium
- warm
- male
- understated

Test speeds approximately:

```text
0.90
0.93
0.95
```

After choosing the best voice, generate:

```text
assets/audio/narration.wav
```

Do NOT build final scene durations before this step is complete.

---

# 5. Phase Four — Transcription and Timing

Transcribe the final narration.

Generate word/sentence timing.

Save normalized timing as:

```text
hyperframes/logicbloom-prive-product-launch/TIMING.json
```

Desired conceptual structure:

```json
{
  "duration": 47.82,
  "sentences": [
    {
      "text": "A great experience shouldn't end at the door.",
      "start": 0.0,
      "end": 3.82
    }
  ]
}
```

Also keep word-level timing if HyperFrames provides it.

The voice timing becomes the master timeline.

---

# 6. Phase Five — Music

Generate/resolve music after narration duration is known.

Use this brief:

> Premium minimal electronic technology launch score, sophisticated ambient opening, elegant digital pulse, subtle cinematic low end, glass-like percussion and textures, gradual build, confident rhythmic middle section, polished resolved ending, no vocals, modern luxury technology aesthetic.

Music duration must cover:

narration duration

-

approximately 2 seconds.

Save:

```text
assets/audio/music.wav
```

or equivalent supported format.

---

# 7. Phase Six — Beat Analysis

Analyze the final music track.

Store beat timing.

Use strong beats for:

- website reveal
- invitation transition
- management product reveal
- mobile device reveal
- LogicBloom logo reveal

Voiceover timing has priority over beat timing.

If they conflict:

follow narration first.

---

# 8. Phase Seven — Sound Effects

Create/select only the necessary effects.

Suggested assets:

```text
assets/audio/sfx/
├── glass-sweep.wav
├── impact-soft.wav
├── impact-deep.wav
├── ui-confirm.wav
├── reverse-transition.wav
└── shimmer.wav
```

Do not design scenes around SFX.

Design visuals first.

Use SFX for emphasis.

---

# 9. Phase Eight — Build Static Scene Layouts

Before major animation, construct all scenes in their final visual state.

Review:

- composition
- brand accuracy
- logo sizes
- typography
- actual screenshots
- backgrounds
- colors
- readability
- device framing

Do not add complex animation until the static frames look premium.

---

# 10. Phase Nine — Real Website Integration

Use real `privelounge.co` visual content.

Priority order:

1. actual site screenshot/render
2. actual website source/components
3. carefully reconstructed section from source

Never create a fake generic version.

Capture at high resolution.

Recommended:

Desktop:

```text
1440–1920px wide
```

Mobile:

```text
390×844
430×932
```

Use the site itself as the hero.

Glass effects should interact around it.

---

# 11. Phase Ten — Management System Integration

Use real product UI.

Capture/select screens that tell a coherent story.

Prefer approximately 3–5 meaningful screens.

Possible:

- dashboard
- customer area
- sales/invoice
- services
- professionals
- inventory

Avoid trying to show the entire ERP.

The objective is:

> This software was built around Privé.

not:

> Look at every feature we have.

---

# 12. Phase Eleven — Mobile App Integration

Use real app screens.

The sequence should visually correspond to the narration:

discover services

→ services screen

choose your master

→ master screen

book your time

→ booking screen

stay connected

→ appointment/home/profile

Use real UI only.

---

# 13. Phase Twelve — Animation

After static approval, animate.

Use one primary paused GSAP timeline.

Register:

```js
window.__timelines["logicbloom-prive-launch"] = masterTimeline;
```

Every render-critical animation must be deterministic.

Scene timing comes from `TIMING.json`.

---

# 14. Scene Architecture

Use HyperFrames clips.

Example:

```html
<section
  class="scene clip"
  data-start="0"
  data-duration="4.2"
  data-track-index="0"
></section>
```

Do not manually run timers to switch scenes.

---

# 15. Camera Motion

Use camera movement sparingly.

Preferred:

- slow push-in
- controlled pull-out
- shallow Y rotation
- shallow X rotation
- dimensional parallax
- passing foreground glass

Avoid:

- constant spinning
- extreme 3D
- random zooming
- repeated device rotations

The audience must be able to see the work.

---

# 16. Liquid Glass System

Create reusable classes/components for:

- lens
- card
- ribbon
- transition sheet
- device halo

Keep them reusable instead of creating unique CSS for every scene.

Each glass object can combine:

- transparent background
- backdrop blur
- SVG displacement
- soft reflection
- border
- highlight
- subtle shadow

Use fixed SVG turbulence seeds.

No randomness.

---

# 17. Scene Transitions

Use a small vocabulary.

Recommended:

### Transition A

Liquid lens expansion

### Transition B

White light flash

### Transition C

Glass ribbon wipe

### Transition D

Object-match transition

Example:

website card

→ management card

### Transition E

Camera push through interface

Do not invent a new transition between every scene.

Consistency makes the film look more expensive.

---

# 18. Voice Synchronization

Important visual events should land on meaningful words.

Example:

Voice:

> A website built around the Privé identity.

Timeline:

“website”

→ browser appears

“Privé”

→ actual Privé logo/site hero becomes dominant

“identity”

→ page settles

Follow this method throughout.

---

# 19. Music Synchronization

After narration alignment is complete:

adjust transitions by small amounts so major visual hits land on beats.

Allowed timing adjustment:

approximately:

```text
±100–250ms
```

Do not destroy sentence synchronization just to hit music.

---

# 20. Audio Mixing

Use narration as the dominant layer.

Implement music ducking/carving during speech.

Allow music to rise:

- between sentences
- during transition montages
- before management reveal
- before mobile reveal
- after final narration

Keep SFX below narration.

---

# 21. Final Hold

After:

> Digital experiences, built around the business.

Keep the final LogicBloom frame visible for approximately:

```text
1.5–2.0 seconds
```

Music continues briefly.

Then fade audio cleanly.

---

# 22. Validation

Before full render:

```bash
npm run hf:production:lint
npm run hf:production:check
```

Verify:

- all clips resolve
- no missing assets
- no overflow
- no hidden logo
- no broken fonts
- no non-deterministic animation
- no external network dependency required during final render
- narration included
- music included
- no clipping
- no scene gaps

---

# 23. Preview Render

Create a low-resolution test first.

Suggested:

50% scale.

Review the complete film for:

- pacing
- scene duration
- voice clarity
- text readability
- music balance
- visual repetition
- transition strength

Do not judge tiny glass details from the preview.

Judge timing.

---

# 24. Full Render

Primary output:

```text
renders/logicbloom-prive-product-launch-1080x1920.mp4
```

Use H.264 for social delivery unless another delivery codec is specifically required.

---

# 25. Quality Gate

The film is not finished until all of these are true.

## Branding

- actual LogicBloom logo used
- actual Privé logo used
- LogicBloom colors correct
- Privé colors correct
- light theme maintained

## Product

- real Privé website visible
- real management system visible
- real mobile screens visible when available

## Motion

- no generic template feeling
- no excessive glass
- no arbitrary floating objects
- typography feels intentional
- product remains readable

## Audio

- narration sounds natural
- music supports rather than competes
- meaningful visual moments sync with narration
- major reveals sync with musical structure

## Story

Viewer understands that LogicBloom delivered:

- digital brand/web experience
- opening invitation
- infrastructure
- customized management system
- upcoming mobile customer experience

## Ending

Viewer clearly understands:

> Designed and built by LogicBloom.

---

# 26. Do Not Do

Do not:

- modify V1/V2 experiments
- merge experimental files into production
- use fake Privé branding
- recreate logos using text
- fabricate screenshots when actual files exist
- invent business claims
- use dark mode
- use green as the dominant LogicBloom color
- add AI-generated random abstract imagery merely to fill space
- make the entire film look like liquid glass
- prioritize animation over product readability
- compress the voiceover just to shorten the film

---

# 27. Success Standard

The desired reaction is not:

> “That's a cool animated video.”

It should be:

> “LogicBloom clearly designed and built a complete digital experience for Privé.”

The motion design should make the real work look exceptional rather than becoming the subject itself.
