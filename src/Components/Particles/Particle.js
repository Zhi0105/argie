import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";


export const Particle = () => {
    const particlesInit = useCallback(async engine => {
      console.log(engine);
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback( container => {
       console.log(container);
  }, []);
  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
            background: {
            color: {
                value: "#293548",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            
              links: {
                  color: "#fff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,  
      }}
    />
  )
}
