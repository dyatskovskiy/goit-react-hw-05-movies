import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export const SnowBackround = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    return null;
  }, []);

  return (
    <Particles
      options={{
        particles: {
          color: { value: '#f3d8d8' },
          number: { value: 60 },
          opacity: { min: 0.3, max: 1 },
          shape: {
            type: 'circle',
          },
          size: { value: { min: 1, max: 5 } },
          move: {
            direction: 'bottom',
            enable: true,
            speed: { min: 1, max: 3 },
            straight: true,
          },
        },
      }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
