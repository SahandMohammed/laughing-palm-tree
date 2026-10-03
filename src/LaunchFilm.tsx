import React from 'react';
import {AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Atmosphere, BrowserMockup, FeatureCard, KineticLine, LogoMark, palette} from './components';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logo = spring({
    frame,
    fps,
    config: {damping: 18, stiffness: 120, mass: 0.8},
  });
  const fadeOut = interpolate(frame, [70, 90], [1, 0], clamp);

  return (
    <AbsoluteFill
      style={{
        padding: '0 84px',
        justifyContent: 'center',
        opacity: fadeOut,
      }}
    >
      <div style={{transform: 'translateY(-80px)'}}>
        <LogoMark size={146} progress={logo} />
        <div
          style={{
            marginTop: 54,
            fontSize: 92,
            lineHeight: 0.98,
            letterSpacing: -5,
            fontWeight: 790,
            maxWidth: 920,
          }}
        >
          <KineticLine words={['Products', 'should']} frame={frame} start={10} />
          <div style={{height: 8}} />
          <KineticLine words={['feel', 'alive.']} frame={frame} start={19} accentIndex={1} />
        </div>

        <div
          style={{
            marginTop: 42,
            color: palette.muted,
            fontSize: 22,
            letterSpacing: 0.2,
            opacity: interpolate(frame, [40, 60], [0, 1], clamp),
            transform: `translateY(${interpolate(frame, [40, 60], [22, 0], clamp)}px)`,
          }}
        >
          Product launch motion — built entirely with React + Remotion.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 92,
          left: 84,
          color: 'rgba(255,255,255,.34)',
          fontSize: 13,
          letterSpacing: 3,
        }}
      >
        LOGICBLOOM / MOTION SYSTEM 001
      </div>
    </AbsoluteFill>
  );
};

const ProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 18], [0, 1], clamp);
  const fadeOut = interpolate(frame, [98, 120], [1, 0], clamp);
  const titleY = interpolate(frame, [0, 26], [36, 0], clamp);

  return (
    <AbsoluteFill style={{opacity: fadeIn * fadeOut}}>
      <div
        style={{
          position: 'absolute',
          top: 116,
          left: 74,
          right: 74,
          zIndex: 3,
        }}
      >
        <div style={{fontSize: 14, color: palette.accent, fontWeight: 700, letterSpacing: 2.7}}>PRODUCT REVEAL</div>
        <div
          style={{
            color: palette.text,
            fontSize: 54,
            fontWeight: 760,
            marginTop: 14,
            letterSpacing: -2,
            transform: `translateY(${titleY}px)`,
          }}
        >
          One view. Your whole operation.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 355,
          left: 74,
          transform: `translateY(${Math.sin(frame / 20) * 8}px)`,
        }}
      >
        <BrowserMockup frame={frame - 8} />
      </div>

      <div
        style={{
          position: 'absolute',
          right: 44,
          top: 300,
          width: 235,
          padding: '20px 22px',
          borderRadius: 24,
          border: '1px solid rgba(184,240,122,.22)',
          background: 'rgba(13,18,15,.82)',
          boxShadow: '0 30px 80px rgba(0,0,0,.36)',
          backdropFilter: 'blur(16px)',
          opacity: interpolate(frame, [44, 62], [0, 1], clamp),
          transform: `translateX(${interpolate(frame, [44, 62], [70, 0], clamp)}px)`,
        }}
      >
        <div style={{fontSize: 11, color: palette.muted, letterSpacing: 1.8}}>TODAY</div>
        <div style={{fontSize: 30, color: palette.text, fontWeight: 760, marginTop: 7}}>24 bookings</div>
        <div style={{fontSize: 12, color: palette.accent, marginTop: 7}}>↑ 12% vs yesterday</div>
      </div>
    </AbsoluteFill>
  );
};

const FeatureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 20], [0, 1], clamp);
  const fadeOut = interpolate(frame, [124, 150], [1, 0], clamp);

  return (
    <AbsoluteFill style={{padding: '120px 74px', opacity: fadeIn * fadeOut}}>
      <div style={{fontSize: 14, color: palette.accent, fontWeight: 700, letterSpacing: 2.7}}>BUILT AROUND THE WORK</div>
      <div style={{fontSize: 66, lineHeight: 1.04, fontWeight: 780, letterSpacing: -3, color: palette.text, marginTop: 18}}>
        Less friction.
        <br />
        More flow.
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 22, marginTop: 70}}>
        <FeatureCard
          frame={frame}
          delay={18}
          eyebrow="01 / BOOKINGS"
          title="Schedule without the chaos."
          body="Fast service selection, master availability, and a clean booking flow."
          index="FLOW"
        />
        <FeatureCard
          frame={frame}
          delay={34}
          eyebrow="02 / OPERATIONS"
          title="See the business as it happens."
          body="Sales, customers, staff performance, and daily activity in one visual system."
          index="LIVE"
        />
        <FeatureCard
          frame={frame}
          delay={50}
          eyebrow="03 / EXPERIENCE"
          title="Designed for the customer."
          body="The management system is only the start. Mobile and digital experiences can share the same language."
          index="NEXT"
        />
      </div>

      <div
        style={{
          position: 'absolute',
          width: 260,
          height: 260,
          right: -70,
          bottom: 180,
          borderRadius: '50%',
          border: '1px solid rgba(184,240,122,.13)',
          boxShadow: '0 0 90px rgba(184,240,122,.08)',
          transform: `scale(${0.7 + Math.sin(frame / 24) * 0.05})`,
        }}
      />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({
    frame,
    fps,
    config: {damping: 18, stiffness: 105, mass: 0.9},
  });
  const line = interpolate(frame, [18, 58], [0, 1], clamp);

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 72}}>
      <div
        style={{
          width: 180,
          height: 1,
          background: palette.accent,
          transform: `scaleX(${line})`,
          boxShadow: '0 0 28px rgba(184,240,122,.4)',
          marginBottom: 56,
        }}
      />

      <LogoMark size={136} progress={p} />

      <div
        style={{
          marginTop: 42,
          textAlign: 'center',
          fontSize: 78,
          lineHeight: 1.02,
          letterSpacing: -4,
          fontWeight: 790,
          color: palette.text,
          opacity: p,
          transform: `translateY(${(1 - p) * 38}px)`,
        }}
      >
        From idea
        <br />
        <span style={{color: palette.accent}}>to production.</span>
      </div>

      <div
        style={{
          marginTop: 32,
          color: palette.muted,
          fontSize: 20,
          opacity: interpolate(frame, [32, 58], [0, 1], clamp),
        }}
      >
        LogicBloom
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 94,
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          color: 'rgba(255,255,255,.38)',
          fontSize: 12,
          letterSpacing: 2.2,
        }}
      >
        <span>DESIGN</span>
        <span style={{opacity: 0.3}}>•</span>
        <span>BUILD</span>
        <span style={{opacity: 0.3}}>•</span>
        <span>LAUNCH</span>
      </div>
    </AbsoluteFill>
  );
};

export const LaunchFilm: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: palette.bg,
        color: palette.text,
        fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <Atmosphere />
      <Sequence from={0} durationInFrames={90}>
        <BrandScene />
      </Sequence>
      <Sequence from={75} durationInFrames={120}>
        <ProductScene />
      </Sequence>
      <Sequence from={180} durationInFrames={150}>
        <FeatureScene />
      </Sequence>
      <Sequence from={315} durationInFrames={135}>
        <EndScene />
      </Sequence>
    </AbsoluteFill>
  );
};
