"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

/**
 * Self-contained typewriter: types a word, pauses, deletes, moves to the next.
 * Replaces the typewriter-effect package with a tiny dependency-free version.
 */
export default function Typewriter({
  words,
  className,
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1400,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const timer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-iris-light align-middle" style={{ height: "1em" }} />
    </span>
  );
}
