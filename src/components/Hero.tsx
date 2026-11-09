"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { siteConfig, socialLinks, typewriterRoles } from "@/data/profile";
import type { CurrentRole } from "@/data/experienceYears";
import NowCard from "./NowCard";
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

/**
 * The hero photo is 2752×1536. On screens narrower than that ratio, cover-fit
 * renders it at the viewport height × 1.79, so request that width.
 */
const PHOTO_SIZES = "(max-aspect-ratio: 2752/1536) 179vh, 100vw";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({
  experience,
  currentRole,
}: {
  experience: string | null;
  currentRole: CurrentRole | null;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Desktop only: on narrow screens the hero is taller than the viewport,
  // so fading the copy on scroll would hide it while it's still being read.
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // 0 while the hero fills the screen, 1 once it has scrolled fully out.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Spring-smoothed so the dissolve glides instead of stepping with each wheel
  // tick. It also keeps every value below JS-driven, which avoids Framer's
  // native scroll-timeline path and its keyframe-offset quirks.
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.0005,
  });

  // A reload can restore a scroll position mid-way down the page. Snap the
  // spring there on mount instead of letting the photo visibly ease away.
  useEffect(() => {
    progress.jump(scrollYProgress.get());
  }, [progress, scrollYProgress]);

  // The sharp photo melts into a blurred colour wash of itself, which then
  // evaporates into the starfield. The bottom edge dissolves upward meanwhile.
  const sharpOpacity = useTransform(progress, [0, 0.08, 0.62], [1, 1, 0]);
  const hazeOpacity = useTransform(progress, [0, 0.4, 0.95], [0.9, 0.9, 0]);
  const photoScale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [1, 1.12]);
  const photoY = useTransform(progress, [0, 1], reduceMotion ? ["0vh", "0vh"] : ["0vh", "-6vh"]);
  const fadeFrom = useTransform(progress, [0, 0.9], [0, 55]);
  const fadeTo = useTransform(progress, [0, 0.9], [32, 100]);
  const edgeMask = useMotionTemplate`linear-gradient(to top, transparent ${fadeFrom}%, #000 ${fadeTo}%)`;
  const backdropVisibility = useTransform(progress, (v) => (v > 0.995 ? "hidden" : "visible"));

  const contentOpacity = useTransform(progress, [0, 0.12, 0.5], [1, 1, 0]);
  const contentY = useTransform(progress, [0, 0.5], [0, -40]);
  const cueOpacity = useTransform(progress, [0, 0.06], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-svh overflow-x-clip"
    >
      {/* Clips the fixed photo to the hero plus the zone below it where the
          dissolve finishes, so it can never show behind later sections, even
          before hydration (when the scroll-driven hide hasn't run yet) or on a
          reload that restores a position further down. z-[-5] keeps it above
          the starfield (-z-10) and below all content. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[-5] h-[calc(100%+50svh)] [clip-path:inset(0)]">
      {/* Photo backdrop: fixed, so it stays put while it dissolves away. */}
      <motion.div
        className="fixed inset-0"
        style={{
          maskImage: edgeMask,
          WebkitMaskImage: edgeMask,
          visibility: backdropVisibility,
        }}
      >
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale: photoScale, y: photoY }}
        >
          <div className="absolute inset-0 animate-hero-in">
            {/* Tiny copy, upscaled and blurred: the colour wash the photo melts into. */}
            <motion.div className="absolute inset-0" style={{ opacity: hazeOpacity }}>
              <Image
                src={siteConfig.avatar}
                alt=""
                fill
                sizes="24px"
                quality={60}
                className="scale-110 object-cover blur-2xl saturate-150"
              />
            </motion.div>
            <motion.div className="absolute inset-0" style={{ opacity: sharpOpacity }}>
              <Image
                src={siteConfig.avatar}
                alt="Krishna Agarwal"
                fill
                priority
                quality={90}
                sizes={PHOTO_SIZES}
                className="object-cover object-[50%_30%] lg:object-[0%_30%]"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scrims: navbar legibility, then copy legibility (left on desktop, bottom on mobile). */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-base/70 to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-base/90 via-base/45 via-35% to-transparent to-60% lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/75 via-40% to-transparent to-70% lg:hidden" />
      </motion.div>
      </div>

      {/* Copy (+ stats column on wide screens). Centred in the viewport, and
          bottom-aligned with each other so the last row of badges lines up
          with the social icons. */}
      <motion.div
        style={wide && !reduceMotion ? { opacity: contentOpacity, y: contentY } : undefined}
        className="relative z-10 px-[6vw] pb-24 pt-[56svh] lg:flex lg:min-h-svh lg:items-center lg:py-28 short:lg:py-20"
      >
        <div className="hero-side:flex hero-side:w-full hero-side:items-end hero-side:justify-between">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:max-w-[min(34rem,40vw)] lg:items-start lg:text-left"
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
            className="mt-6 text-lg font-medium text-muted short:mt-4 short:text-base"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name size scales with BOTH width and height (min of vw/vh): on
              short landscape screens like 1366×768 a width-only size reads as
              zoomed in, because the whole hero has to fit in less height. */}
          <motion.h1
            variants={item}
            className="mt-2 text-[clamp(2.75rem,min(11vw,11vh),6rem)] font-extrabold leading-[0.95] tracking-tight max-lg:text-[clamp(2.75rem,11vw,4.5rem)]"
          >
            Krishna{" "}
            <span className="block bg-gradient-to-r from-iris-light via-cyan to-magenta bg-clip-text pb-1 text-transparent">
              Agarwal
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex min-h-10 flex-wrap items-center justify-center gap-1 text-xl font-semibold sm:text-2xl lg:justify-start lg:text-3xl short:mt-3 short:text-2xl"
          >
            <span className="text-muted">I&apos;m a</span>
            <Typewriter
              words={[...typewriterRoles]}
              className="ml-2 text-iris-light"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-pretty text-base leading-relaxed text-ink/75 sm:text-lg short:mt-4 short:text-base"
          >
            {siteConfig.shortBio} I turn ideas into seamless, visually striking
            web experiences.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex w-full flex-col gap-3 xs:flex-row xs:flex-wrap xs:justify-center sm:gap-4 lg:justify-start short:mt-6"
          >
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-iris-light to-iris px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow-strong short:py-3"
            >
              View Resume
              <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-iris/50 hover:bg-white/10 short:py-3"
            >
              See my work
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3 short:mt-6">
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

          {/* Stats under the copy, wherever there's no room beside the face. */}
          <motion.div variants={item} className="mt-10 hero-side:hidden">
            <HeroStats align="responsive" experience={experience} />
          </motion.div>
        </motion.div>

        {/* Wide screens: right column in the open background beside the face.
            Stretched to the copy's height: "Now" card level with the top of
            the copy, stats pinned to the bottom (level with the social icons)
            by mt-auto, so they stay put even when there's no current role. */}
        <div className="hidden shrink-0 flex-col items-end gap-6 self-stretch hero-side:flex">
          {currentRole && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <NowCard role={currentRole} />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-auto"
          >
            <HeroStats align="end" experience={experience} />
          </motion.div>
        </div>
        </div>
      </motion.div>

      {/* Scroll cue (desktop; on mobile the copy itself runs below the fold).
          The CSS fade-in holds it back until the photo has settled. */}
      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        style={{ opacity: cueOpacity }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 animate-[cue-in_0.8s_ease-out_1.4s_both] items-start justify-center rounded-full border-2 border-white/25 p-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </motion.span>
      </motion.a>
    </section>
  );
}

/**
 * Years of experience + core stack. `end` is the side column: badges in two
 * short stacked rows, right-aligned, kept narrow so they stay clear of the
 * shoulder. `responsive` is the version under the copy.
 */
function HeroStats({
  align,
  experience,
}: {
  align: "end" | "responsive";
  /** e.g. "2.5+ Years", computed from experience.ts on the server; null hides it. */
  experience: string | null;
}) {
  const items = align === "end" ? "items-end" : "items-center lg:items-start";
  const justify =
    align === "end" ? "max-w-[15rem] justify-end" : "justify-center lg:justify-start";

  return (
    <div className={`flex flex-col gap-3 ${items}`}>
      {experience && (
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-base-2/70 px-4 py-2 text-left backdrop-blur-xl">
          <span className="text-lg">⚡</span>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">{experience}</span>
            <span className="text-[10px] text-muted">Experience</span>
          </div>
        </div>
      )}
      <div className={`flex flex-wrap gap-2 ${justify}`}>
        {techStack.map((tech) => (
          <div
            key={tech.alt}
            className="group/badge flex items-center gap-2 rounded-full border border-white/15 bg-base-2/70 px-3 py-1.5 backdrop-blur-xl transition-all hover:scale-105 hover:border-iris/50 hover:bg-base-2"
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              width={16}
              height={16}
              className="h-4 w-4 object-contain transition-transform group-hover/badge:scale-110"
            />
            <span className="text-xs font-medium text-white/90">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
