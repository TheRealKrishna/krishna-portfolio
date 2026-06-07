import { Reveal } from "./motion-primitives";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

/** Consistent section header: small eyebrow tag, gradient title, optional subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-iris/30 bg-iris/10 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iris-light sm:px-4 sm:text-xs sm:tracking-[0.2em]">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-iris-light shadow-[0_0_10px_2px_rgba(169,147,254,0.8)]" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
