"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { siteConfig } from "@/data/profile";
import type { CurrentRole } from "@/data/experienceYears";

const TIME_ZONE = "Asia/Kolkata";

/** "8:42 PM", in Krishna's local time. */
function localTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/**
 * The visitor's offset from India, e.g. "10h 30m behind you". Uses each
 * zone's offset at this instant, so daylight-saving changes are handled.
 */
function offsetFromVisitor(date: Date) {
  const minutesIn = (timeZone?: string) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).formatToParts(date);
    const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
    return Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute")) / 60000;
  };
  const diff = minutesIn(TIME_ZONE) - minutesIn(undefined);
  if (diff === 0) return "Same time zone as you";
  const abs = Math.abs(diff);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const span = m ? `${h}h ${m}m` : `${h}h`;
  return `${span} ${diff > 0 ? "ahead of" : "behind"} you`;
}

/**
 * "Now" card: the current role, the product being built, and a live clock in
 * Krishna's time zone. Fills the open background right of the face.
 */
export default function NowCard({ role }: { role: CurrentRole }) {
  // The clock renders only after mount: server time would be wrong for the
  // visitor's offset and would cause a hydration mismatch.
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="gradient-border w-[17.5rem] rounded-2xl bg-base-2/55 p-5 text-left shadow-[0_20px_60px_-20px_rgba(5,3,16,0.9)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-iris-bright">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Now
        </span>
        <span className="text-[0.65rem] text-muted">Since {role.since}</span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl ring-1 ring-white/10"
          style={{ backgroundColor: role.iconBg }}
        >
          <Image
            src={role.icon}
            alt=""
            width={44}
            height={44}
            className="h-full w-full object-contain p-1"
          />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold leading-snug text-white">{role.title}</p>
          {role.link ? (
            <a
              href={role.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex max-w-full items-center gap-1.5 text-xs text-muted transition-colors hover:text-white"
            >
              <span className="truncate">{role.company}</span>
              <FaArrowUpRightFromSquare className="shrink-0 text-[0.55rem] opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
          ) : (
            <p className="truncate text-xs text-muted">{role.company}</p>
          )}
        </div>
      </div>

      {role.project && (
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Building
          </p>
          {role.project.url ? (
            <a
              href={role.project.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-1 inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              <span className="text-gradient">{role.project.name}</span>
              <FaArrowUpRightFromSquare className="text-[0.55rem] text-iris-light opacity-60 transition-all group-hover:-translate-y-px group-hover:translate-x-px group-hover:opacity-100" />
            </a>
          ) : (
            <p className="mt-1 text-sm font-semibold text-gradient">{role.project.name}</p>
          )}
          <p className="mt-0.5 text-xs leading-relaxed text-ink/70">{role.project.summary}</p>
        </div>
      )}

      <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-3.5">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
            {siteConfig.location} · IST
          </p>
          {/* Fixed height so the card doesn't jump when the clock appears. */}
          <p className="mt-1 h-7 font-mono text-xl font-semibold tabular-nums text-white">
            {now ? localTime(now) : ""}
          </p>
        </div>
        <p className="h-4 pb-1 text-right text-[0.65rem] text-muted">
          {now ? offsetFromVisitor(now) : ""}
        </p>
      </div>
    </div>
  );
}
