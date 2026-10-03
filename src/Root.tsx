import React from 'react';
import {Composition} from 'remotion';
import {LaunchFilm} from './LaunchFilm';
import {PriveCaseStudy} from './PriveCaseStudy';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LogicBloomPriveCaseStudy"
        component={PriveCaseStudy}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="LogicBloomLaunchLegacy"
        component={LaunchFilm}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
