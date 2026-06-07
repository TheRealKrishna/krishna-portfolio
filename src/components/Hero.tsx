"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { siteConfig, socialLinks, typewriterRoles } from "@/data/profile";
import { SocialIcon } from "./SocialIcon";
import Typewriter from "./Typewriter";

const orbitTech = [
  { src: "/assets/react.png", alt: "React", size: 52 },
  { src: "/assets/logos/nextjs.png", alt: "Next.js", size: 46 },
  { src: "/assets/logos/nodejs.png", alt: "Node.js", size: 48 },
  { src: "/assets/js.png", alt: "JavaScript", size: 44 },
  { src: "/assets/logos/typescript.png", alt: "TypeScript", size: 44 },
  { src: "/assets/logos/mongodb.svg", alt: "MongoDB", size: 46 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-5 pb-16 pt-28 sm:px-6 md:flex-row md:gap-8 md:pt-28"
    >
      {/* Left: copy */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-iris/30 bg-iris/10 px-4 py-1.5 text-xs font-medium text-iris-light"
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
          Hello, I’m
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-1 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Krishna <span className="text-gradient">Agarwal</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex min-h-9 flex-wrap items-center justify-center text-xl font-semibold sm:text-3xl md:justify-start"
        >
          <span className="text-muted">I’m a&nbsp;</span>
          <Typewriter words={[...typewriterRoles]} className="text-iris-light" />
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
          className="mt-8 flex w-full flex-col items-stretch gap-3 xs:flex-row xs:flex-wrap xs:items-center xs:justify-center sm:gap-4 md:justify-start"
        >
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-iris-light to-iris px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-strong hover:brightness-110"
          >
            View Resume
            <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-iris/50 hover:bg-white/10"
          >
            See my work
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          {socialLinks
            .filter((s) => s.icon !== "x")
            .slice(0, 4)
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-iris/30 bg-white/5 text-muted transition-all hover:-translate-y-1 hover:border-iris hover:text-white hover:shadow-glow"
              >
                <SocialIcon name={s.icon} className="text-lg" />
              </a>
            ))}
        </motion.div>
      </motion.div>

      {/* Right: avatar with orbiting tech */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative flex flex-1 items-center justify-center"
      >
        {/* Fluid size keeps the whole orbit within the viewport down to 320px. */}
        <div className="relative grid aspect-square w-[min(20rem,82vw)] place-items-center sm:w-[26rem]">
          {/* Animated conic gradient glow ring */}
          <div
            className="absolute inset-[8%] rounded-full opacity-70 blur-md"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-iris), var(--color-cyan), var(--color-magenta), var(--color-iris))",
              animation: "spin 8s linear infinite",
            }}
          />
          {/* Rotating dashed orbit rings */}
          <div className="absolute inset-[4%] animate-spin-slow rounded-full border border-dashed border-iris/25" />
          <div
            className="absolute inset-[14%] rounded-full border border-dashed border-magenta/20"
            style={{ animation: "spin 22s linear infinite reverse" }}
          />

          {/* Avatar — gradient ring + duotone grade + sheen + vignette */}
          <div className="group relative h-[64%] w-[64%]">
            {/* Gradient ring border */}
            <div
              className="absolute -inset-1 rounded-full"
              style={{
                background:
                  "conic-gradient(from 140deg, var(--color-iris-light), var(--color-cyan), var(--color-magenta), var(--color-iris-light))",
              }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border-[3px] border-base shadow-glow-strong">
              <Image
                src={siteConfig.avatar}
                alt="Krishna Agarwal"
                fill
                priority
                sizes="(max-width: 640px) 14rem, 17rem"
                className="scale-x-[-1] object-cover saturate-[0.9] transition-[filter] duration-700 ease-out group-hover:saturate-110"
              />
              {/* Duotone color grade — tints the photo into the palette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-iris/45 via-transparent to-magenta/35 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40" />
              {/* Bottom fade so the image melts into the page */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              {/* Top sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-60" />
              {/* Inner vignette ring */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(5,3,16,0.65)]" />
            </div>
          </div>

          {/* Orbiting tech icons — start at top, safe radius keeps them in bounds */}
          {orbitTech.map((tech, i) => {
            const angle = (i / orbitTech.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 42; // % of wrapper — comfortably inside the padding
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            return (
              <motion.div
                key={tech.alt}
                className="absolute grid place-items-center rounded-xl border border-white/10 bg-base-2/80 p-2 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2.5"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={tech.size}
                  height={tech.size}
                  className="h-6 w-6 object-contain sm:h-8 sm:w-8"
                />
              </motion.div>
            );
          })}

          {/* Floating glass badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-base-2/90 px-4 py-2 text-xs font-semibold shadow-glow backdrop-blur-md"
          >
            <span className="text-base">⚡</span>
            <span className="text-white/90">5+ yrs building for the web</span>
          </motion.div>
        </div>
      </motion.div>


      {/* Scroll cue */}
      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/25 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </span>
      </motion.a>
    </section>
  );
}
