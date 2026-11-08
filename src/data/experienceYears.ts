import { experiences } from "./experience";

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/**
 * "February 2026" (or "Feb 2026", "Sept 2026", any case) → months since year 0
 * (start of that month). Returns null when the text isn't a month and year.
 */
function parseMonth(text: string): number | null {
  const match = /^([a-z]{3,})\.?\s+(\d{4})$/i.exec(text.trim());
  if (!match) return null;
  const name = match[1].toLowerCase();
  const month = MONTHS.findIndex((m) => m.startsWith(name));
  return month === -1 ? null : Number(match[2]) * 12 + month;
}

/** "Month YYYY - Month YYYY" or "Month YYYY – Present" (hyphen or dash). */
function splitRange(date: string) {
  const [from = "", to = ""] = date.split(/\s*[-–—]\s*/);
  return { from: from.trim(), to: to.trim(), ongoing: /present/i.test(to) };
}

/**
 * [start, end) month range for one `date` string, or null if it can't be read.
 * Unreadable dates are logged and skipped rather than thrown, because this runs
 * while the page renders: one typo in experience.ts shouldn't take the site down.
 */
function monthRange(date: string, current: number): readonly [number, number] | null {
  const { from, to, ongoing } = splitRange(date);
  const start = parseMonth(from);
  const end = ongoing ? current : parseMonth(to);
  if (start === null || end === null || end < start) {
    console.warn(`[experience] Skipping unreadable date "${date}"; use "Month YYYY - Month YYYY".`);
    return null;
  }
  return [start, end + 1]; // end month counts in full
}

/**
 * Total professional experience in months: the sum of every role's `date`
 * range in experience.ts. Each role counts in full, so months worked at two
 * part-time jobs at once count for both. Gaps between roles don't count.
 */
export function experienceMonths(now: Date = new Date()): number {
  const current = now.getFullYear() * 12 + now.getMonth();

  return experiences
    .flatMap(({ roles }) => roles)
    .map(({ date }) => monthRange(date, current))
    .reduce((total, range) => (range ? total + (range[1] - range[0]) : total), 0);
}

/**
 * Experience rounded down to the nearest half year, e.g. "1.5+ Years".
 * null when no dates could be read, so the badge is hidden rather than wrong.
 */
export function experienceLabel(now?: Date): string | null {
  const months = experienceMonths(now);
  if (months === 0) return null;
  const halfYears = Math.floor(months / 6);
  if (halfYears === 0) return "<1 Year";
  const years = halfYears / 2;
  return `${years}+ ${years <= 1 ? "Year" : "Years"}`;
}

/** The ongoing role ("... - Present") and its company, if any. */
export function currentRole() {
  for (const company of experiences) {
    const role = company.roles.find(({ date }) => splitRange(date).ongoing);
    if (!role) continue;
    return {
      title: role.title,
      company: company.company,
      link: company.link,
      icon: company.icon,
      iconBg: company.iconBg,
      project: company.project,
      since: splitRange(role.date).from,
    };
  }
  return null;
}

export type CurrentRole = NonNullable<ReturnType<typeof currentRole>>;
