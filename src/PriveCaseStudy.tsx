import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  Img,
  Sequence,
  staticFile,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const NAVY = '#0E2247';
const INK = '#101827';
const SOFT_BLUE = '#DDEBFA';
const PALE_BLUE = '#EEF6FF';
const BEIGE = '#C6AD8F';
const WHITE = '#FFFFFF';
const MUTED = '#6C7583';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const range = (
  frame: number,
  start: number,
  end: number,
  from = 0,
  to = 1,
) =>
  interpolate(frame, [start, end], [from, to], {
    ...clamp,
    easing: ease,
  });

const fadeWindow = (
  frame: number,
  fadeInStart: number,
  fadeInEnd: number,
  fadeOutStart: number,
  fadeOutEnd: number,
) => {
  const fadeIn = range(frame, fadeInStart, fadeInEnd);
  const fadeOut = range(frame, fadeOutStart, fadeOutEnd, 1, 0);
  return fadeIn * fadeOut;
};

const LogicBloomLockup: React.FC<{
  progress?: number;
  compact?: boolean;
}> = ({progress = 1, compact = false}) => {
  const reveal = range(progress, 0.05, 1);
  const blur = interpolate(reveal, [0, 1], [12, 0], clamp);

  return (
    <div
      style={{
        width: compact ? 650 : 860,
        opacity: reveal,
        clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)`,
        transform: `translateX(${(1 - reveal) * 30}px) scale(${0.985 + reveal * 0.015})`,
        filter: `blur(${blur}px)`,
      }}
    >
      <Img
        src={staticFile('logicbloom-logo.svg')}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

const AnimatedSilk: React.FC<{intensity?: number}> = ({intensity = 1}) => {
  const frame = useCurrentFrame();
  const driftA = Math.sin(frame / 58) * 28 * intensity;
  const driftB = Math.cos(frame / 71) * 24 * intensity;
  const driftC = Math.sin(frame / 83 + 1.4) * 20 * intensity;

  return (
    <AbsoluteFill
      style={{
        background: '#FBFDFF',
        overflow: 'hidden',
      }}
    >
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{position: 'absolute', inset: 0}}
      >
        <defs>
          <linearGradient id="silkA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F7FBFF" />
            <stop offset="100%" stopColor="#BFD8F5" />
          </linearGradient>
          <linearGradient id="silkB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B8D4F3" />
            <stop offset="48%" stopColor="#F6FAFF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="silkC" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#AFCBEC" />
            <stop offset="50%" stopColor="#EFF6FE" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <radialGradient id="silkGlow">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="58%" stopColor="#FFFFFF" stopOpacity=".88" />
            <stop offset="100%" stopColor="#D9E9FB" stopOpacity=".15" />
          </radialGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <filter id="edgeBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <rect width="1080" height="1920" fill="#FAFCFF" />
        <ellipse
          cx={520 + driftC}
          cy={880 + driftB}
          rx="520"
          ry="760"
          fill="url(#silkGlow)"
          filter="url(#softGlow)"
        />

        <g transform={`translate(${driftA} ${driftB})`}>
          <path
            d="M-170 160 C 40 -90 350 -60 505 145 C 650 338 520 520 285 488 C 75 458 -80 342 -170 160 Z"
            fill="url(#silkA)"
            opacity=".95"
          />
          <path
            d="M-210 285 C 10 82 215 72 360 210 C 470 315 405 470 218 520 C 55 563 -112 488 -210 285 Z"
            fill="none"
            stroke="#BFD6F2"
            strokeWidth="4"
            opacity=".42"
            filter="url(#edgeBlur)"
          />
        </g>

        <g transform={`translate(${-driftB} ${driftC})`}>
          <path
            d="M810 -160 C 1030 -85 1180 78 1185 275 C 1189 465 1064 564 936 472 C 790 368 746 226 810 -160 Z"
            fill="url(#silkB)"
            opacity=".95"
          />
          <path
            d="M900 -110 C 1070 12 1145 165 1122 324 C 1095 505 1003 536 918 430 C 824 314 827 161 900 -110 Z"
            fill="none"
            stroke="#BBD5F3"
            strokeWidth="4"
            opacity=".36"
          />
        </g>

        <g transform={`translate(${driftC} ${-driftA})`}>
          <path
            d="M-145 1275 C 65 1215 210 1308 314 1468 C 427 1642 394 1845 230 1960 L -120 2000 Z"
            fill="url(#silkC)"
            opacity=".88"
          />
          <path
            d="M-110 1390 C 85 1328 240 1410 315 1544 C 397 1690 357 1826 230 1918"
            fill="none"
            stroke="#B5D1EF"
            strokeWidth="5"
            opacity=".35"
            filter="url(#edgeBlur)"
          />
        </g>

        <g transform={`translate(${-driftC} ${driftA})`}>
          <path
            d="M1090 1195 C 873 1202 765 1312 700 1455 C 623 1624 674 1782 820 1897 C 922 1977 1022 1988 1130 1992 Z"
            fill="url(#silkA)"
            opacity=".9"
          />
          <path
            d="M1125 1350 C 934 1302 790 1415 736 1548 C 688 1664 748 1792 895 1870"
            fill="none"
            stroke="#BED8F5"
            strokeWidth="4"
            opacity=".4"
          />
        </g>

        <path
          d={`M -120 ${1510 + driftB} C 160 ${1380 + driftA} 365 ${1660 + driftC} 600 ${1580 + driftB} C 804 ${1512 - driftC} 926 ${1390 + driftA} 1190 ${1380 - driftB}`}
          fill="none"
          stroke="#D4E5F8"
          strokeWidth="110"
          strokeLinecap="round"
          opacity=".23"
          filter="url(#softGlow)"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 46%, rgba(255,255,255,.95) 0%, rgba(255,255,255,.66) 35%, rgba(255,255,255,.05) 72%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.055,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.95%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.55%27/%3E%3C/svg%3E")',
          mixBlendMode: 'multiply',
        }}
      />
    </AbsoluteFill>
  );
};

const TinyLabel: React.FC<{children: React.ReactNode; light?: boolean}> = ({
  children,
  light = false,
}) => (
  <div
    style={{
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: 3.2,
      textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,.56)' : 'rgba(14,34,71,.55)',
    }}
  >
    {children}
  </div>
);

const PriveHeroArt: React.FC<{frame: number}> = ({frame}) => {
  const slow = Math.sin(frame / 33) * 12;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 77% 50%, rgba(155,155,160,.34) 0%, rgba(75,76,82,.22) 32%, transparent 56%), linear-gradient(110deg, #0C0D11 0%, #202126 46%, #0A0B0F 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 770,
          height: 770,
          right: -130 + slow,
          top: -108,
          borderRadius: '48% 52% 46% 54%',
          background:
            'radial-gradient(circle at 52% 45%, #8D8E91 0%, #5A5B5F 22%, #292A2E 55%, #111216 82%)',
          filter: 'grayscale(1)',
          opacity: 0.82,
          transform: 'rotate(-10deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 370,
          height: 78,
          left: -52,
          top: 190,
          borderRadius: 24,
          transform: `rotate(-28deg) translateX(${slow * 0.7}px)`,
          background:
            'linear-gradient(180deg, #6A6B70 0%, #2E3036 34%, #0B0C0F 100%)',
          boxShadow: '0 28px 55px rgba(0,0,0,.55)',
          filter: 'blur(.4px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 22,
            top: 15,
            width: 78,
            height: 12,
            borderRadius: 8,
            background: 'rgba(230,230,230,.65)',
            boxShadow: '0 22px 0 rgba(230,230,230,.45)',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(5,6,9,.95) 0%, rgba(5,6,9,.34) 42%, rgba(5,6,9,.20) 67%, rgba(5,6,9,.52) 100%), linear-gradient(0deg, rgba(5,6,9,.65) 0%, transparent 45%)',
        }}
      />
    </div>
  );
};

const PriveSiteFrame: React.FC<{frame: number; progress: number}> = ({
  frame,
  progress,
}) => {
  const float = Math.sin(frame / 31) * 6;
  const contentShift = range(progress, 0.55, 1, 12, 0);

  return (
    <div
      style={{
        width: 940,
        height: 530,
        borderRadius: 24,
        overflow: 'hidden',
        background: '#0A0A0F',
        boxShadow:
          '0 54px 110px rgba(38,61,93,.18), 0 16px 40px rgba(20,29,43,.12), 0 0 0 1px rgba(14,34,71,.08)',
        transform: `translateY(${float}px) scale(${0.965 + progress * 0.035})`,
      }}
    >
      <div
        style={{
          height: 68,
          display: 'flex',
          alignItems: 'center',
          padding: '0 38px',
          background: '#0A0A0F',
          borderBottom: '1px solid rgba(255,255,255,.035)',
        }}
      >
        <div
          style={{
            color: '#F2E8DD',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 26,
            letterSpacing: -1.5,
          }}
        >
          PRIVÉ
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 7,
              letterSpacing: 1.8,
              marginTop: -2,
            }}
          >
            GROOMING LOUNGE
          </div>
        </div>
        <div
          style={{
            marginLeft: 118,
            display: 'flex',
            gap: 37,
            color: '#E8DFD6',
            fontSize: 8.5,
            fontWeight: 600,
            letterSpacing: 1.4,
          }}
        >
          {['HOME', 'THE LOUNGE', 'THE MASTERS', 'THE COLLECTION', 'CONTACT'].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </div>
        <div
          style={{
            marginLeft: 'auto',
            padding: '14px 22px',
            background: BEIGE,
            color: '#101014',
            fontSize: 8.5,
            fontWeight: 700,
            letterSpacing: 1.2,
          }}
        >
          BOOK YOUR MASTER
        </div>
      </div>

      <div style={{position: 'relative', height: 462}}>
        <PriveHeroArt frame={frame} />
        <div
          style={{
            position: 'absolute',
            left: 46,
            bottom: 47,
            color: '#F3E8DD',
            transform: `translateY(${contentShift}px)`,
            opacity: range(progress, 0.45, 0.85),
          }}
        >
          <div
            dir="rtl"
            style={{
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.12,
              letterSpacing: -1.5,
            }}
          >
            سەرت بە کێ دەسپێریت؟
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 14,
              fontWeight: 500,
              color: 'rgba(243,232,221,.78)',
            }}
          >
            In the right hands
          </div>
          <div style={{display: 'flex', gap: 10, marginTop: 26}}>
            <div
              dir="rtl"
              style={{
                background: BEIGE,
                color: '#111217',
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: 10,
                fontWeight: 700,
                padding: '15px 22px',
              }}
            >
              ماستەرەکەت هەڵبژێرە
            </div>
            <div
              style={{
                border: '1px solid rgba(198,173,143,.62)',
                color: '#EADFD4',
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 1.4,
                padding: '16px 22px',
              }}
            >
              THE COLLECTION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SilkWipe: React.FC<{progress: number}> = ({progress}) => {
  const y = interpolate(progress, [0, 1], [-80, -800], clamp);
  const rotate = interpolate(progress, [0, 1], [-7, -17], clamp);
  return (
    <div
      style={{
        position: 'absolute',
        width: 1440,
        height: 760,
        left: -170,
        top: 340,
        borderRadius: '44% 56% 62% 38%',
        background:
          'linear-gradient(145deg, rgba(255,255,255,1) 12%, rgba(238,247,255,.98) 49%, rgba(187,214,244,.92) 100%)',
        boxShadow:
          '0 60px 100px rgba(66,104,151,.13), inset 0 2px 0 rgba(255,255,255,.9)',
        transform: `translateY(${y}px) rotate(${rotate}deg)`,
        transformOrigin: '50% 50%',
      }}
    />
  );
};

const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const p = spring({
    frame,
    fps,
    config: {damping: 23, stiffness: 105, mass: 0.95},
  });
  const opacity = fadeWindow(frame, 0, 16, 54, 72);

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
      }}
    >
      <div style={{transform: 'translateY(-48px)'}}>
        <LogicBloomLockup progress={p} />
        <div
          style={{
            textAlign: 'center',
            marginTop: 34,
            fontSize: 17,
            color: 'rgba(14,34,71,.52)',
            letterSpacing: 4.5,
            textTransform: 'uppercase',
            opacity: range(frame, 24, 48),
          }}
        >
          Design · Build · Launch
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ProjectIntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = fadeWindow(frame, 0, 16, 55, 72);
  const title = range(frame, 8, 32);
  const subtitle = range(frame, 22, 44);

  return (
    <AbsoluteFill
      style={{
        padding: '210px 82px 0',
        opacity,
      }}
    >
      <div>
        <TinyLabel>Selected work / 001</TinyLabel>
        <div
          style={{
            marginTop: 36,
            color: NAVY,
            fontSize: 98,
            fontWeight: 620,
            lineHeight: 0.96,
            letterSpacing: -6,
            maxWidth: 900,
            opacity: title,
            transform: `translateY(${(1 - title) * 58}px)`,
            clipPath: `inset(${(1 - title) * 100}% 0 0 0)`,
          }}
        >
          PRIVÉ
          <br />
          <span style={{fontWeight: 360}}>Grooming Lounge</span>
        </div>

        <div
          style={{
            marginTop: 50,
            width: 630,
            fontSize: 27,
            lineHeight: 1.38,
            fontWeight: 430,
            color: MUTED,
            opacity: subtitle,
            transform: `translateY(${(1 - subtitle) * 28}px)`,
          }}
        >
          A digital experience shaped around the lounge — from the first
          impression to the systems behind it.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          bottom: 130,
          width: 190,
          height: 1,
          background: 'rgba(14,34,71,.18)',
          transform: `scaleX(${range(frame, 20, 56)})`,
          transformOrigin: 'left',
        }}
      />
    </AbsoluteFill>
  );
};

const WebsiteScene: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = range(frame, 0, 58);
  const opacity = fadeWindow(frame, 0, 18, 148, 176);
  const cardY = interpolate(reveal, [0, 1], [120, 0], clamp);
  const cardRotate = interpolate(reveal, [0, 1], [3.2, 0], clamp);
  const zoom = range(frame, 84, 145);

  return (
    <AbsoluteFill style={{opacity}}>
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          top: 128,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          zIndex: 5,
          opacity: range(frame, 26, 50),
        }}
      >
        <div>
          <TinyLabel>Web experience</TinyLabel>
          <div
            style={{
              marginTop: 14,
              fontSize: 48,
              fontWeight: 560,
              letterSpacing: -2.4,
              color: NAVY,
            }}
          >
            privelounge.co
          </div>
        </div>
        <div
          style={{
            textAlign: 'right',
            fontSize: 16,
            lineHeight: 1.45,
            color: MUTED,
            maxWidth: 300,
          }}
        >
          A dark editorial interface
          <br />
          inside a light LogicBloom world.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 70,
          top: 435,
          transform: `translateY(${cardY}px) rotate(${cardRotate}deg) scale(${1 + zoom * 0.018})`,
          transformOrigin: '50% 48%',
          clipPath: `inset(0 ${(1 - reveal) * 47}% 0 ${(1 - reveal) * 47}% round 24px)`,
        }}
      >
        <PriveSiteFrame frame={frame} progress={reveal} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 84,
          bottom: 205,
          display: 'flex',
          gap: 44,
          alignItems: 'center',
          opacity: range(frame, 74, 104) * (1 - range(frame, 145, 168)),
        }}
      >
        <TinyLabel>01 / Identity</TinyLabel>
        <TinyLabel>02 / Interface</TinyLabel>
        <TinyLabel>03 / Experience</TinyLabel>
      </div>

      <SilkWipe progress={reveal} />
    </AbsoluteFill>
  );
};

const deliverables = [
  ['Website', 'Digital presence'],
  ['Digital Invitation', 'Guest experience'],
  ['IT Infrastructure', 'On-site systems'],
  ['Management System', 'Operations'],
];

const DeliverablesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = fadeWindow(frame, 0, 18, 88, 108);
  const index = Math.min(
    deliverables.length - 1,
    Math.floor(Math.max(0, frame - 18) / 18),
  );
  const local = Math.max(0, (frame - 18) % 18);
  const transition = range(local, 0, 8);

  return (
    <AbsoluteFill
      style={{
        padding: '210px 82px 0',
        opacity,
      }}
    >
      <TinyLabel>Built for Privé</TinyLabel>

      <div
        style={{
          marginTop: 94,
          width: 910,
          height: 310,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {deliverables.map(([title, meta], i) => {
          const relative = i - index;
          const y =
            relative * 175 -
            (relative === 0 ? transition * 18 : 0) +
            (relative === -1 ? -transition * 18 : 0);
          const active = i === index;
          const previous = i === index - 1;
          const itemOpacity = active
            ? 1
            : previous
              ? 1 - transition
              : Math.abs(relative) === 1
                ? 0.18
                : 0;

          return (
            <div
              key={title}
              style={{
                position: 'absolute',
                left: 0,
                top: 82,
                width: '100%',
                transform: `translateY(${y}px)`,
                opacity: itemOpacity,
              }}
            >
              <div
                style={{
                  fontSize: active ? 78 : 54,
                  lineHeight: 1,
                  letterSpacing: active ? -4.5 : -2.4,
                  fontWeight: active ? 620 : 460,
                  color: NAVY,
                  transition: 'none',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  marginTop: 20,
                  fontSize: 18,
                  color: MUTED,
                  letterSpacing: 0.3,
                }}
              >
                {meta}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 46,
          width: 760,
          fontSize: 30,
          lineHeight: 1.4,
          color: INK,
          letterSpacing: -0.6,
          opacity: range(frame, 12, 35),
        }}
      >
        One visual language across what the customer sees and what the team
        uses every day.
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          right: 82,
          bottom: 146,
          height: 1,
          background: 'rgba(14,34,71,.14)',
        }}
      >
        <div
          style={{
            width: `${range(frame, 12, 88) * 100}%`,
            height: '100%',
            background: NAVY,
            opacity: 0.45,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const logo = spring({
    frame,
    fps,
    config: {damping: 22, stiffness: 100, mass: 0.95},
  });
  const copy = range(frame, 22, 54);

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          transform: 'translateY(-82px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LogicBloomLockup progress={logo} compact />
        <div
          style={{
            marginTop: 58,
            textAlign: 'center',
            fontSize: 61,
            lineHeight: 1.05,
            fontWeight: 560,
            letterSpacing: -3.4,
            color: NAVY,
            opacity: copy,
            transform: `translateY(${(1 - copy) * 34}px)`,
          }}
        >
          From idea
          <br />
          <span style={{fontWeight: 330}}>to production.</span>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 94,
          display: 'flex',
          gap: 18,
          alignItems: 'center',
          fontSize: 13,
          fontWeight: 650,
          letterSpacing: 3.4,
          color: 'rgba(14,34,71,.44)',
          textTransform: 'uppercase',
          opacity: range(frame, 38, 64),
        }}
      >
        <span>Design</span>
        <span style={{opacity: 0.3}}>•</span>
        <span>Technology</span>
        <span style={{opacity: 0.3}}>•</span>
        <span>Experience</span>
      </div>
    </AbsoluteFill>
  );
};

export const PriveCaseStudy: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: WHITE,
        color: INK,
        fontFamily:
          'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <AnimatedSilk />

      <Sequence from={0} durationInFrames={74}>
        <BrandScene />
      </Sequence>

      <Sequence from={58} durationInFrames={74}>
        <ProjectIntroScene />
      </Sequence>

      <Sequence from={112} durationInFrames={178}>
        <WebsiteScene />
      </Sequence>

      <Sequence from={278} durationInFrames={112}>
        <DeliverablesScene />
      </Sequence>

      <Sequence from={370} durationInFrames={80}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
