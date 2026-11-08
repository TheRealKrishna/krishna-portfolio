import { Fragment, type ReactNode } from "react";

/**
 * Renders `text`, turning each mention of `term` (case-insensitive) into an
 * external link to `href`. Returns the text unchanged when either is missing.
 */
export default function LinkedText({
  text,
  term,
  href,
  className = "font-semibold text-iris-light underline decoration-iris-light/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white",
}: {
  text: string;
  term?: string;
  href?: string;
  className?: string;
}): ReactNode {
  if (!term || !href) return text;

  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // The capture group keeps each match in the split result, at odd indexes.
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={href} target="_blank" rel="noreferrer" className={className}>
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
