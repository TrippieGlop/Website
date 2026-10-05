import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const options = useMemo(() => {
    const small = typeof window !== "undefined" && window.innerWidth < 768;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return {
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: { value: "#000" } },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: !small, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        color: { value: "#ff6600" },
        links: { color: "#ff6600", distance: 150, enable: true, opacity: 0.35, width: 1 },
        move: { enable: !reduced, speed: 1.2, outModes: { default: "bounce" } },
        number: { density: { enable: true, area: 900 }, value: small ? 30 : 60 },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: false,
    };
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
