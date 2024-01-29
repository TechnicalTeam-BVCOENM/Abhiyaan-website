import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticalBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    init && (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.2,
              },
            },
          },
          particles: {
            color: {
              value: ['#FFFFFF', '#FFd700', '#FF0000', '#FFA500', '#00FF00'],
            },
            move: {
              direction: 'bottom',
              enable: true,
              outModes: {
                default: 'out',
              },
              size: true,
              speed: {
                min: 2,
                max: 6,
              },
            },
            number: {
              value: 220,
              density: {
                enable: true,
                area: 1000,
              },
            },
            opacity: {
              value: 1,
              animation: {
                enable: false,
                startValue: 'max',
                destroy: 'min',
                speed: 0.4,
                sync: true,
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: 'random',
              move: true,
              animation: {
                enable: true,
                speed: 60,
              },
            },
            tilt: {
              direction: 'random',
              enable: true,
              move: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
              },
            },
            shape: {
              type: ['circle', 'square', 'triangle'],
              options: {},
            },
            size: {
              value: {
                min: 2,
                max: 4,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 30,
              },
              enlighten: {
                enable: true,
                value: 30,
              },
              enable: true,
              speed: {
                min: 15,
                max: 25,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              move: true,
              speed: {
                min: -15,
                max: 15,
              },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticalBackground;
