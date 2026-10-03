import React from 'react';
import {Composition} from 'remotion';
import {LaunchFilm} from './LaunchFilm';

// Vertical social launch composition: 1080x1920, 15s at 30fps.
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LogicBloomLaunch"
      component={LaunchFilm}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
