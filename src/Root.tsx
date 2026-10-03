import React from 'react';
import {Composition} from 'remotion';
import {LaunchFilm} from './LaunchFilm';

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
