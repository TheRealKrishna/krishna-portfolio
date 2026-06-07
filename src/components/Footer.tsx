"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { navLinks, siteConfig, socialLinks } from "@/data/profile";
import { SocialIcon } from "./SocialIcon";

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
    <footer className="relative mt-24 border-t border-white/10 bg-base-2/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        {/* About */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-iris to-magenta text-sm font-extrabold text-white">
              K
            </span>
            <span className="text-base font-bold">Krishna Agarwal</span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.longBio}
          </p>
          <div className="mt-2 flex flex-wrap gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted transition-all hover:-translate-y-1 hover:border-iris/50 hover:text-white"
              >
                <SocialIcon name={s.icon} className="text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80">
            Sections
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-iris-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80">
            Stay in touch
          </h3>
          <p className="text-sm text-muted">
            A monthly digest of what I’m building and learning.
          </p>
          <form onSubmit={onSubscribe} className="flex flex-col gap-2">
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
          </form>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted">
          © {new Date().getFullYear()} Krishna Agarwal. Built with Next.js,
          TypeScript &amp; Tailwind CSS. Happy coding.
        </p>
      </div>
    </footer>
  );
}
