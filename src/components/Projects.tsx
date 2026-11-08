"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaGooglePlay,
  FaLock,
  FaStar,
} from "react-icons/fa6";
import { getProjects } from "@/data/projects";
import { yearTier } from "@/data/yearTier";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

/**
 * Year badge coloured by how recent the work is, with a tooltip on hover or
 * keyboard focus (tapping focuses it on touch screens).
 *
 * The tooltip is portalled to <body>: inside the card it would sit in the
 * tilt's 3D-transformed layer, which the browser rasterises at an angle, so the
 * text blurs while the card is tilted. Outside it, it stays crisp and isn't
 * clipped by the card's overflow-hidden either.
 */
function YearChip({ year }: { year: string }) {
  const tier = yearTier(year);
  const tipId = useId();
  const chipRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const show = () => {
    const r = chipRef.current?.getBoundingClientRect();
    if (r) setPos({ left: r.left, top: r.bottom + 8 });
  };
  const hide = () => setPos(null);

  // Fixed-position tooltip: close it if the page scrolls out from under it.
  useEffect(() => {
    if (!pos) return;
    window.addEventListener("scroll", hide, { passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, [pos]);

  return (
    <span className="absolute left-3 top-3 z-10">
      <button
        ref={chipRef}
        type="button"
        aria-describedby={pos ? tipId : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        className={`inline-flex cursor-help items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold backdrop-blur outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${tier.chip}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${tier.dot}`} />
        {year}
        <span className="sr-only">: {tier.note}</span>
      </button>
      {pos &&
        createPortal(
          <span
            id={tipId}
            role="tooltip"
            style={{ left: pos.left, top: pos.top }}
            className="pointer-events-none fixed z-[60] w-56 animate-[tip-in_0.18s_ease-out] rounded-xl border border-white/10 bg-base-2/95 p-3 text-left shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <span className={`block text-[0.65rem] font-bold uppercase tracking-wider ${tier.text}`}>
              {tier.label}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-ink/80">{tier.note}</span>
          </span>,
          document.body
        )}
    </span>
  );
}

export default function Projects({ host }: { host: string }) {
  const projects = getProjects(host);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects I’ve Built"
        subtitle="A selection of products spanning social platforms, real-time apps, e-commerce, and AI-adjacent tooling."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
          >
            <TiltCard glow={`${project.accent}40`} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface/70 backdrop-blur-md transition-colors duration-300 hover:border-white/20">
                {/* Header / logo band */}
                <div
                  className="relative flex h-40 items-center justify-center overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at 50% 120%, ${project.accent}33, transparent 70%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-base-2/80 p-3 shadow-glow"
                    style={{ boxShadow: `0 0 40px -12px ${project.accent}` }}
                  >
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={56}
                      height={56}
                      unoptimized={project.logo.endsWith(".gif")}
                      className="h-12 w-12 object-contain"
                    />
                  </motion.div>

                  {project.featured && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/15 bg-base/60 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-iris-light backdrop-blur">
                      <FaStar className="text-[0.6rem]" /> Featured
                    </span>
                  )}
                  <YearChip year={project.year} />
                  {project.platform && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base/60 px-2.5 py-1 text-[0.65rem] font-semibold text-white/80 backdrop-blur">
                      <FaAndroid className="text-[0.75rem] text-[#3ddc84]" /> {project.platform}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: project.accent }}>
                    {project.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-iris to-magenta px-4 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110"
                      >
                        <FaArrowUpRightFromSquare className="text-[0.7rem]" /> Live Demo
                      </a>
                    )}
                    {project.links.play && (
                      <a
                        href={project.links.play}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-iris to-magenta px-4 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110"
                      >
                        <FaGooglePlay className="text-[0.75rem]" /> Google Play
                      </a>
                    )}
                    {project.links.code ? (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                      >
                        <FaGithub className="text-sm" /> Source
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-muted">
                        <FaLock className="text-[0.7rem]" /> Private repo
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
