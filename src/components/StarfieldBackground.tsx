"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight animated starfield + drifting aurora orbs rendered on a single
 * canvas. Replaces the old tsparticles dependency with a self-contained,
 * dependency-free, GPU-friendly background that respects reduced-motion.
 */
export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let raf = 0;

    type Star = {
      x: number;
      y: number;
      z: number;
      r: number;
      tw: number;
    };

    const count = Math.min(
      140,
      Math.floor((width * height) / 14000)
    );
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.4 + 0.3,
      tw: Math.random() * Math.PI * 2,
    }));

    const pointer = { x: width / 2, y: height / 2 };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    let t = 0;
    const render = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        // Parallax drift toward the pointer, scaled by depth.
        const px = (pointer.x - width / 2) * 0.01 * s.z;
        const py = (pointer.y - height / 2) * 0.01 * s.z;
        const twinkle = reduceMotion ? 0.7 : 0.5 + 0.5 * Math.sin(t * 2 + s.tw);

        ctx.beginPath();
        ctx.arc(s.x + px, s.y + py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 190, 255, ${0.25 + twinkle * 0.5})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(126,97,231,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(255,92,240,0.12),_transparent_50%)]" />
      {/* Drifting aurora orbs */}
      <div className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-iris/25 blur-[140px] animate-float" />
      <div
        className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-magenta/15 blur-[150px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[150px] animate-float"
        style={{ animationDelay: "4s" }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg" />
      {/* Canvas starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
