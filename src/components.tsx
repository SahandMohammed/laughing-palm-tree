import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const palette = {
  bg: '#080B0A',
  panel: '#111613',
  panelSoft: '#151C18',
  text: '#F4F7F5',
  muted: '#97A39B',
  line: 'rgba(255,255,255,0.09)',
  accent: '#B8F07A',
  accent2: '#64C989',
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const Atmosphere: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 55) * 42;
  const drift2 = Math.cos(frame / 73) * 54;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 50% -10%, rgba(122, 239, 153, 0.16), transparent 34%), linear-gradient(180deg, #0A0E0C 0%, #070908 58%, #050706 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -120,
          opacity: 0.18,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          transform: `translateY(${frame * 0.22}px)`,
          maskImage: 'linear-gradient(to bottom, black, transparent 78%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: 760,
          height: 760,
          borderRadius: '50%',
          left: -300 + drift,
          top: 180 + drift2,
          background: 'rgba(93, 210, 132, 0.14)',
          filter: 'blur(110px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: 680,
          height: 680,
          borderRadius: '50%',
          right: -300 - drift2,
          bottom: 70 + drift,
          background: 'rgba(185, 240, 122, 0.10)',
          filter: 'blur(130px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%270 0 220 220%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.86%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.28%27/%3E%3C/svg%3E")',
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  );
};

export const LogoMark: React.FC<{size?: number; progress?: number}> = ({
  size = 132,
  progress = 1,
}) => {
  const petalScale = 0.7 + progress * 0.3;
  const rotate = (1 - progress) * -18;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        display: 'grid',
        placeItems: 'center',
        background:
          'linear-gradient(145deg, rgba(184,240,122,.18), rgba(100,201,137,.06))',
        border: '1px solid rgba(184,240,122,.26)',
        boxShadow: '0 20px 80px rgba(120,230,140,.16), inset 0 0 40px rgba(255,255,255,.03)',
        transform: `scale(${0.92 + progress * 0.08}) rotate(${rotate}deg)`,
        opacity: progress,
      }}
    >
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 100 100">
        <g
          fill="none"
          stroke={palette.accent}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transformOrigin: '50% 50%',
            transform: `scale(${petalScale})`,
          }}
        >
          <path d="M50 51 C36 42 28 28 32 16 C46 18 54 30 50 51Z" />
          <path d="M51 50 C61 36 75 30 86 35 C83 49 70 57 51 50Z" />
          <path d="M50 51 C64 61 70 75 64 86 C49 81 42 69 50 51Z" />
          <path d="M49 50 C36 64 22 68 12 60 C18 46 31 41 49 50Z" />
        </g>
      </svg>
    </div>
  );
};

export const KineticLine: React.FC<{
  words: string[];
  frame: number;
  start?: number;
  accentIndex?: number;
}> = ({words, frame, start = 0, accentIndex = -1}) => {
  const {fps} = useVideoConfig();

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
      {words.map((word, index) => {
        const local = Math.max(0, frame - start - index * 5);
        const p = spring({
          frame: local,
          fps,
          config: {damping: 18, stiffness: 170, mass: 0.72},
        });
        const blur = interpolate(p, [0, 1], [18, 0], clamp);
        return (
          <span
            key={word + index}
            style={{
              display: 'inline-block',
              opacity: p,
              transform: `translateY(${(1 - p) * 46}px) scale(${0.97 + p * 0.03})`,
              filter: `blur(${blur}px)`,
              color: index === accentIndex ? palette.accent : palette.text,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const BrowserMockup: React.FC<{frame: number}> = ({frame}) => {
  const {fps} = useVideoConfig();
  const enter = spring({
    frame,
    fps,
    config: {damping: 19, stiffness: 115, mass: 0.9},
  });
  const bars = [68, 44, 82, 57];

  return (
    <div
      style={{
        width: 932,
        height: 1040,
        borderRadius: 42,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,.13)',
        background: 'rgba(14,18,16,.94)',
        boxShadow: '0 70px 180px rgba(0,0,0,.56), 0 0 100px rgba(105,210,135,.08)',
        transform: `perspective(1600px) translateY(${(1 - enter) * 150}px) rotateX(${(1 - enter) * 12}deg) rotateY(${(1 - enter) * -7}deg) scale(${0.9 + enter * 0.1})`,
        opacity: enter,
      }}
    >
      <div
        style={{
          height: 78,
          display: 'flex',
          alignItems: 'center',
          padding: '0 30px',
          gap: 12,
          borderBottom: `1px solid ${palette.line}`,
          background: 'rgba(255,255,255,.018)',
        }}
      >
        {['#FF6B66', '#F3C95E', '#6DD28A'].map((c) => (
          <div key={c} style={{width: 14, height: 14, borderRadius: 20, background: c, opacity: 0.76}} />
        ))}
        <div
          style={{
            marginLeft: 24,
            height: 34,
            flex: 1,
            borderRadius: 10,
            background: 'rgba(255,255,255,.045)',
            border: `1px solid ${palette.line}`,
          }}
        />
      </div>

      <div style={{display: 'flex', height: 'calc(100% - 78px)'}}>
        <aside
          style={{
            width: 190,
            padding: '28px 22px',
            borderRight: `1px solid ${palette.line}`,
            background: 'rgba(255,255,255,.016)',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40}}>
            <LogoMark size={46} progress={1} />
            <div>
              <div style={{color: palette.text, fontSize: 17, fontWeight: 700}}>PRIVÉ</div>
              <div style={{color: palette.muted, fontSize: 11}}>MANAGEMENT</div>
            </div>
          </div>
          {['Overview', 'Bookings', 'Customers', 'Sales', 'Team', 'Reports'].map((item, i) => (
            <div
              key={item}
              style={{
                height: 46,
                display: 'flex',
                alignItems: 'center',
                padding: '0 14px',
                marginBottom: 8,
                borderRadius: 12,
                color: i === 0 ? palette.text : palette.muted,
                background: i === 0 ? 'rgba(184,240,122,.10)' : 'transparent',
                border: i === 0 ? '1px solid rgba(184,240,122,.12)' : '1px solid transparent',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                  marginRight: 12,
                  background: i === 0 ? palette.accent : 'rgba(255,255,255,.18)',
                }}
              />
              {item}
            </div>
          ))}
        </aside>

        <main style={{flex: 1, padding: 36}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div>
              <div style={{fontSize: 15, color: palette.muted, letterSpacing: 1.8}}>TODAY</div>
              <div style={{fontSize: 34, color: palette.text, fontWeight: 740, marginTop: 8}}>Operations overview</div>
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 14,
                border: '1px solid rgba(184,240,122,.22)',
                color: palette.accent,
                background: 'rgba(184,240,122,.07)',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              LIVE
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 30}}>
            {[
              ['24', 'Appointments'],
              ['IQD 1.8M', 'Revenue'],
              ['91%', 'Utilization'],
            ].map(([value, label], i) => {
              const cardIn = spring({
                frame: Math.max(0, frame - 10 - i * 4),
                fps,
                config: {damping: 20, stiffness: 150},
              });
              return (
                <div
                  key={label}
                  style={{
                    padding: '22px 20px',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,.035)',
                    border: `1px solid ${palette.line}`,
                    transform: `translateY(${(1 - cardIn) * 28}px)`,
                    opacity: cardIn,
                  }}
                >
                  <div style={{fontSize: 27, fontWeight: 760, color: palette.text}}>{value}</div>
                  <div style={{fontSize: 12, color: palette.muted, marginTop: 7}}>{label}</div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 18,
              padding: 24,
              borderRadius: 24,
              background: 'rgba(255,255,255,.028)',
              border: `1px solid ${palette.line}`,
            }}
          >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{color: palette.text, fontWeight: 700, fontSize: 17}}>Weekly performance</div>
              <div style={{color: palette.accent, fontSize: 12}}>+18.4%</div>
            </div>
            <div style={{height: 210, display: 'flex', alignItems: 'flex-end', gap: 16, marginTop: 18}}>
              {[44, 63, 53, 78, 66, 88, 92].map((h, i) => {
                const reveal = interpolate(frame, [18 + i * 3, 42 + i * 3], [0.08, 1], clamp);
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h * reveal}%`,
                      borderRadius: '10px 10px 4px 4px',
                      background:
                        i >= 5
                          ? 'linear-gradient(180deg, #B8F07A, #5BBC83)'
                          : 'linear-gradient(180deg, rgba(184,240,122,.48), rgba(100,201,137,.14))',
                      boxShadow: i >= 5 ? '0 0 28px rgba(184,240,122,.14)' : 'none',
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 18, marginTop: 18}}>
            <div
              style={{
                padding: 24,
                height: 270,
                borderRadius: 24,
                background: 'rgba(255,255,255,.028)',
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{color: palette.text, fontWeight: 700}}>Bookings</div>
              {bars.map((width, i) => {
                const reveal = interpolate(frame, [28 + i * 4, 54 + i * 4], [0, 1], clamp);
                return (
                  <div key={i} style={{marginTop: 19}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, color: palette.muted}}>
                      <span>{['Mohammed', 'Daban', 'Shankar', 'Walk-ins'][i]}</span>
                      <span>{Math.round(width * reveal)}%</span>
                    </div>
                    <div style={{height: 7, background: 'rgba(255,255,255,.06)', borderRadius: 20, marginTop: 8}}>
                      <div
                        style={{
                          width: `${width * reveal}%`,
                          height: '100%',
                          borderRadius: 20,
                          background: palette.accent,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                padding: 24,
                height: 270,
                borderRadius: 24,
                background:
                  'radial-gradient(circle at 70% 20%, rgba(184,240,122,.18), transparent 38%), rgba(255,255,255,.028)',
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{color: palette.muted, fontSize: 12}}>CUSTOMER RETURN</div>
              <div style={{color: palette.text, fontWeight: 800, fontSize: 56, marginTop: 24}}>
                {Math.round(interpolate(frame, [24, 70], [0, 84], clamp))}%
              </div>
              <div style={{color: palette.muted, fontSize: 12, lineHeight: 1.5, marginTop: 15}}>
                Clear visibility into customer behavior and recurring visits.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export const FeatureCard: React.FC<{
  frame: number;
  delay: number;
  eyebrow: string;
  title: string;
  body: string;
  index: string;
}> = ({frame, delay, eyebrow, title, body, index}) => {
  const {fps} = useVideoConfig();
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {damping: 20, stiffness: 135, mass: 0.85},
  });

  return (
    <div
      style={{
        width: 820,
        padding: '34px 38px',
        borderRadius: 32,
        border: `1px solid ${palette.line}`,
        background: 'linear-gradient(135deg, rgba(255,255,255,.052), rgba(255,255,255,.018))',
        boxShadow: '0 40px 100px rgba(0,0,0,.22)',
        backdropFilter: 'blur(18px)',
        opacity: p,
        transform: `translateX(${(1 - p) * 100}px) scale(${0.97 + p * 0.03})`,
      }}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span style={{fontSize: 13, fontWeight: 700, letterSpacing: 2, color: palette.accent}}>{eyebrow}</span>
        <span style={{fontSize: 13, color: palette.muted}}>{index}</span>
      </div>
      <div style={{fontSize: 42, fontWeight: 760, color: palette.text, marginTop: 15, letterSpacing: -1.2}}>
        {title}
      </div>
      <div style={{fontSize: 19, lineHeight: 1.5, color: palette.muted, marginTop: 12, maxWidth: 680}}>{body}</div>
    </div>
  );
};
