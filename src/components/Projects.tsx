"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub, FaStar } from "react-icons/fa6";
import { getProjects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Projects({ host }: { host: string }) {
  const projects = getProjects(host);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
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
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-base/60 px-2.5 py-1 text-[0.65rem] font-semibold text-muted backdrop-blur">
                    {project.year}
                  </span>
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
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <FaGithub className="text-sm" /> Source
                    </a>
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
