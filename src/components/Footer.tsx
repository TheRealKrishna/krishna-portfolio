"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { navLinks, siteConfig, socialLinks } from "@/data/profile";
import { SocialIcon } from "./SocialIcon";
import { easeOutExpo, fadeUp, staggerParent } from "./motion-primitives";
import Image from "next/image";

/** The top border draws outward from the centre as the footer comes in. */
const drawLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 1.1, ease: easeOutExpo } },
};

/** Columns rise one after another, slightly slower than the sections above. */
const columns: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

/** Copyright row arrives last, once the columns have mostly settled. */
const lastRow: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo, delay: 0.6 } },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Newsletter is a front-end acknowledgement only (no backend list yet).
    setStatus("done");
    setEmail("");
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative mt-24 bg-base-2/60"
    >
      {/* Top border, drawn in from the centre. */}
      <motion.div
        aria-hidden
        variants={drawLine}
        className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      {/* Single column, centred, below md; three left-aligned columns above. */}
      <motion.div
        variants={columns}
        className="mx-auto grid max-w-6xl gap-12 px-5 py-16 text-center sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] md:text-left lg:gap-16"
      >
        {/* About */}
        <motion.div variants={staggerParent} className="flex flex-col items-center gap-4 md:items-start">
          <motion.a variants={fadeUp} href="#home" className="flex items-center gap-2.5">
            <Image
              src="/assets/logo-icon.png"
              alt="Krishna Agarwal Logo"
              width={36}
              height={36}
              className="rounded-xl"
            />
            <span className="text-[1rem] font-bold text-white">Krishna Agarwal</span>
          </motion.a>
          <motion.p variants={fadeUp} className="max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.longBio}
          </motion.p>
          <motion.div variants={staggerParent} className="mt-2 flex flex-wrap justify-center gap-2.5 md:justify-start">
            {socialLinks.map((s) => (
              // Wrapper takes the reveal so the icon's own hover lift (a CSS
              // transform) isn't overridden by Framer's inline transform.
              <motion.span key={s.label} variants={fadeUp} className="inline-flex">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-iris/50 hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon name={s.icon} className="text-[1rem]" />
                </a>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Sections */}
        <motion.div variants={staggerParent} className="flex flex-col items-center gap-4 md:items-start">
          <motion.h3
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-white/80"
          >
            Sections
          </motion.h3>
          {/* Mobile: one wrapped row of links, so the column isn't a tall list. */}
          <motion.ul
            variants={staggerParent}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 md:flex-col md:justify-start md:gap-x-0"
          >
            {navLinks.map((l) => (
              <motion.li key={l.href} variants={fadeUp}>
                <a
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-iris-light"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={staggerParent} className="flex flex-col items-center gap-4 md:items-start">
          <motion.h3
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-white/80"
          >
            Stay in touch
          </motion.h3>
          <motion.p variants={fadeUp} className="text-sm text-muted">
            A monthly digest of what I’m building and learning.
          </motion.p>
          <motion.form
            variants={fadeUp}
            onSubmit={onSubscribe}
            className="flex w-full max-w-sm flex-col gap-2 md:max-w-none"
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 focus-within:border-iris/50">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-muted/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-iris to-magenta text-white transition-transform hover:scale-105"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
            {status === "done" && (
              <p className="text-xs text-iris-light">
                Thanks for subscribing! 🎉
              </p>
            )}
          </motion.form>
        </motion.div>
      </motion.div>

      <motion.div variants={lastRow} className="border-t border-white/5 px-6 py-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted">
          © {new Date().getFullYear()} Krishna Agarwal. Happy coding.
        </p>
      </motion.div>
    </motion.footer>
  );
}
