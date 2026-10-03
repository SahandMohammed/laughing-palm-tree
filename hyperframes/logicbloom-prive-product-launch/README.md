# LogicBloom × Privé — Production HyperFrames Film

Final production-oriented composition based on the committed storyboard, real brand assets, real Privé website capture, and final narration.

## Runtime

- 1080 × 1920
- 30 fps
- narration: 45.632 s
- full film: 47.432 s
- light LogicBloom visual system
- 16 narrative scenes
- real LogicBloom + Privé logos
- real `website.png`

## Preview

```bash
npm run hf:production:preview
```

## Validate

```bash
npm run hf:production:lint
npm run hf:production:check
```

## Render

```bash
npm run hf:production:render
```

Output:

```
hyperframes/logicbloom-prive-product-launch/renders/logicbloom-prive-product-launch-1080x1920.mp4
```

## Narration

The composition includes:

```
../audio/narration.wav
```

at full voice gain.

The committed WAV size is consistent with 24 kHz mono 16-bit PCM and a 45.632-second duration.

`TIMING.json` maps the approved script to that exact audio duration. It is sentence-level timing rather than a Whisper word transcript; use HyperFrames transcription later if word-perfect cueing is required.

## Music

No music asset is currently committed. Do not reference a missing music file.

Resolve a track using the approved brief:

```bash
npx hyperframes media-use resolve --type bgm --intent "premium minimal electronic technology launch score, sophisticated ambient opening, elegant digital pulse, subtle cinematic low end, glass-like percussion and textures, gradual build, confident rhythmic middle section, polished resolved ending, no vocals, modern luxury technology aesthetic" --project hyperframes/logicbloom-prive-product-launch
```

After the selected local file is known, add it as a root `<audio>` clip with `data-timeline-role="music"`, then run:

```bash
npm run hf:production:beats
```

Narration timing remains the priority.

## Asset policy

See `ASSET_MAP.md`. The branch currently contains real logos + the real website capture, but no management/mobile/invitation screenshots. The composition intentionally avoids fake screenshots for those chapters.
