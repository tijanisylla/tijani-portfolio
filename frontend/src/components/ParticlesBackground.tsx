import React, { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#0ea5e9" : "#0891b2",
        },
        links: {
          color: theme === "dark" ? "#0ea5e9" : "#0891b2",
          distance: 150,
          enable: true,
          opacity: theme === "dark" ? 0.15 : 0.1,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: theme === "dark" ? 60 : 40,
        },
        opacity: {
          value: theme === "dark" ? 0.3 : 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return (
    <Particles
      {...({
        id: "tsparticles",
        options,
        className: "absolute inset-0 -z-10",
        init: particlesInit,
      } as any)}
    />
  );
};

export default ParticlesBackground;
