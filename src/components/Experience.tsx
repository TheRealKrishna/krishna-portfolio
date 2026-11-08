"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaFilePdf,
  FaLocationDot,
} from "react-icons/fa6";
import { experiences, type Experience, type Role } from "@/data/experience";
import LinkedText from "./LinkedText";
import SectionHeading from "./SectionHeading";

/** "February 2024 - March 2024" → "February 2024" (start) / "March 2024" (end). */
const datePart = (date: string, which: 0 | 1) => date.split(/\s*[-–—]\s*/)[which]?.trim() ?? "";

/** Overall span of a company's roles, e.g. "February 2024 - August 2024". */
function tenure(roles: Role[]) {
  if (roles.length === 1) return roles[0].date;
  // Roles are listed most recent first.
  return `${datePart(roles[roles.length - 1].date, 0)} - ${datePart(roles[0].date, 1)}`;
}

function Points({ exp, points }: { exp: Experience; points: string[] }) {
  return (
    <ul className="space-y-2">
      {points.map((point, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/80">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-iris to-magenta" />
          <span>
            <LinkedText text={point} term={exp.project?.name} href={exp.project?.url} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  const [only] = exp.roles;
  const multi = exp.roles.length > 1;
  // When every role shares a title, lead with it: "Frontend Web Developer · 2 roles".
  const sharedTitle = exp.roles.every((r) => r.title === only.title) ? only.title : null;

  return (
    <div className="gradient-border group relative rounded-3xl bg-surface/60 p-5 backdrop-blur-md transition-all duration-300 hover:bg-surface sm:p-7">
      <div className="flex items-start gap-4">
        <span
          className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl"
          style={{ backgroundColor: exp.iconBg }}
        >
          <Image
            src={exp.icon}
            alt={exp.company}
            width={44}
            height={44}
            className="h-9 w-9 object-contain"
          />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-tight text-white">
            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-iris-light"
              >
                {exp.company}
                <FaArrowUpRightFromSquare className="text-[0.65rem] opacity-70" />
              </a>
            ) : (
              exp.company
            )}
          </h3>
          <p className="text-sm font-semibold text-iris-light">
            {multi
              ? [sharedTitle, `${exp.roles.length} roles`].filter(Boolean).join(" · ")
              : `${only.title} · ${only.type}`}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
            <FaLocationDot className="text-[0.7rem]" /> {exp.place}
          </p>
        </div>
      </div>

      {exp.description && (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          <LinkedText text={exp.description} term={exp.project?.name} href={exp.project?.url} />
        </p>
      )}

      {multi ? (
        // One step per role on a mini timeline, most recent first.
        <ol className="relative mt-6 space-y-6 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-gradient-to-b before:from-iris/60 before:to-magenta/20">
          {exp.roles.map((role) => (
            <li key={`${role.type}-${role.date}`} className="relative pl-7">
              <span className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-surface bg-gradient-to-br from-iris to-magenta ring-1 ring-iris/40" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-sm font-bold text-white">{role.title}</p>
                <span className="rounded-full border border-iris/30 bg-iris/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-iris-light">
                  {role.type}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted">{role.date}</p>
              <div className="mt-3">
                <Points exp={exp} points={role.points} />
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-4">
          <Points exp={exp} points={only.points} />
        </div>
      )}

      {(exp.link || exp.experienceLetter) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-iris/30 bg-iris/10 px-3.5 py-2 text-xs font-semibold text-iris-light transition-colors hover:bg-iris/20"
            >
              <FaArrowUpRightFromSquare className="text-[0.7rem]" /> Visit Website
            </a>
          )}
          {exp.experienceLetter && (
            <a
              href={exp.experienceLetter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <FaFilePdf className="text-[0.75rem]" /> Experience Letter
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Career Journey"
        title="Work Experience"
        subtitle="Roles where I shipped real products — AI platforms, 3D design tools, and scalable web apps."
      />

      <div className="relative mt-16">
        {/* Center spine (desktop) / left spine (mobile) */}
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-iris/60 via-magenta/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className="relative pl-9 sm:pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
              >
                {/* Node dot */}
                <span className="absolute left-3 top-7 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="relative grid h-4 w-4 place-items-center">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-iris/40" />
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-base bg-gradient-to-br from-iris to-magenta" />
                  </span>
                </span>

                {/* Date label — opposite side on desktop */}
                <div
                  className={`mb-3 md:mb-0 md:flex md:items-start md:pt-5 ${
                    isLeft
                      ? "md:order-2 md:justify-start md:pl-10"
                      : "md:order-1 md:justify-end md:pr-10"
                  }`}
                >
                  <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-muted">
                    {tenure(exp.roles)}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    isLeft ? "md:order-1 md:pr-10" : "md:order-2 md:pl-10"
                  }
                >
                  <ExperienceCard exp={exp} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
