/**
 * How a project's year reads on its card: older work in red, the 2025 build-up
 * year in amber, and current work in green. Each tier explains itself in a
 * tooltip, so visitors read old projects as learning work rather than as a
 * measure of current skill.
 */
export type YearTier = {
  label: string;
  /** Tooltip text. */
  note: string;
  /** Tailwind classes for the chip (border, background, text). */
  chip: string;
  /** Text colour for the tooltip's label. */
  text: string;
  /** Dot colour inside the chip. */
  dot: string;
};

export function yearTier(year: string): YearTier {
  const y = Number(year);
  if (y >= 2026) {
    return {
      label: "Recent",
      note: "Recent work: reflects my current skills and how I build today.",
      chip: "border-emerald-400/40 bg-emerald-500/15 text-emerald-300",
      text: "text-emerald-300",
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]",
    };
  }
  if (y === 2025) {
    return {
      label: "Growing",
      note: "Built while I was levelling up: shipping real products and improving fast.",
      chip: "border-amber-400/40 bg-amber-500/15 text-amber-300",
      text: "text-amber-300",
      dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]",
    };
  }
  return {
    label: "Early work",
    note: "An early project from when I was learning. It doesn't reflect my current skills.",
    chip: "border-rose-400/40 bg-rose-500/15 text-rose-300",
    text: "text-rose-300",
    dot: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]",
  };
}
