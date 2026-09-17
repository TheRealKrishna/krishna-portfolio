"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { siteConfig, socialLinks, typewriterRoles } from "@/data/profile";
import { SocialIcon } from "./SocialIcon";
import Typewriter from "./Typewriter";

const techStack = [
  { src: "/assets/react.png", alt: "React", label: "React" },
  { src: "/assets/logos/nextjs.png", alt: "Next.js", label: "Next.js" },
  { src: "/assets/logos/nodejs.png", alt: "Node.js", label: "Node.js" },
  { src: "/assets/js.png", alt: "JavaScript", label: "JavaScript" },
  { src: "/assets/logos/typescript.png", alt: "TypeScript", label: "TypeScript" },
  { src: "/assets/logos/mongodb.svg", alt: "MongoDB", label: "MongoDB" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-5 py-20 sm:px-6 lg:flex-row lg:gap-20 lg:py-0"
    >
      {/* Left: Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-iris/30 bg-iris/10 px-4 py-1.5 text-xs font-medium text-iris-light backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Available for new opportunities
        </motion.span>

        <motion.p
          variants={item}
          className="mt-6 text-lg font-medium text-muted"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-2 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          Krishna{" "}
          <span className="bg-gradient-to-r from-iris-light via-cyan to-magenta bg-clip-text text-transparent">
            Agarwal
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex min-h-10 flex-wrap items-center justify-center gap-1 text-xl font-semibold sm:text-2xl lg:justify-start lg:text-3xl"
        >
          <span className="text-muted">I'm a</span>
          <Typewriter
            words={[...typewriterRoles]}
            className="ml-2 text-iris-light"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {siteConfig.shortBio} I turn ideas into seamless, visually striking
          web experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex w-full flex-col gap-3 xs:flex-row xs:flex-wrap xs:justify-center sm:gap-4 lg:justify-start"
        >
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-iris-light to-iris px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow-strong"
          >
            View Resume
            <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-iris/50 hover:bg-white/10"
          >
            See my work
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          {socialLinks.slice(0, 4).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-iris/30 bg-white/5 text-muted backdrop-blur-sm transition-all hover:scale-110 hover:border-iris hover:bg-iris/10 hover:text-white hover:shadow-glow"
            >
              <SocialIcon name={s.icon} className="text-lg" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: Bento-style tech showcase with image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="relative z-10 flex flex-1 items-center justify-center"
      >
        <div className="relative w-full max-w-md">
          {/* Main profile card with premium effects */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-2/90 to-base-3/80 p-1 shadow-2xl backdrop-blur-xl">
            {/* Animated gradient border */}
            <div
              className="absolute -inset-[1px] -z-10 rounded-3xl opacity-75 blur-xl"
              style={{
                background:
                  "conic-gradient(from 180deg, var(--color-iris), var(--color-cyan), var(--color-magenta), var(--color-iris))",
                animation: "spin 8s linear infinite",
              }}
            />

            {/* Image container with dramatic effects */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
              <Image
                src={siteConfig.avatar}
                alt="Krishna Agarwal"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 28rem"
                className="scale-x-[-1] object-cover"
              />

              {/* Gradient overlays for depth and style */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-iris/30 via-transparent to-magenta/30 mix-blend-overlay opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

              {/* Tech stack badges overlaid on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.alt}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      className="group/badge flex items-center gap-2 rounded-full border border-white/15 bg-base-2/90 px-3 py-1.5 backdrop-blur-xl transition-all hover:scale-105 hover:border-iris/50 hover:bg-base-2"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain transition-transform group-hover/badge:scale-110"
                      />
                      <span className="text-xs font-medium text-white/90">
                        {tech.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating stats badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-base-2/95 px-4 py-2 backdrop-blur-xl"
              >
                <span className="text-lg">⚡</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">5+ Years</span>
                  <span className="text-[10px] text-muted">Experience</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-6 -top-6 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-iris/20 to-magenta/20 backdrop-blur-xl"
          >
            <span className="text-3xl">💻</span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -right-4 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/20 to-iris/20 backdrop-blur-xl"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/25 p-1.5 backdrop-blur-sm">
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </span>
      </motion.a>
    </section>
  );
}
