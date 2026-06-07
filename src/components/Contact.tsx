"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaDiscord,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaCircleNotch,
} from "react-icons/fa6";
import { siteConfig } from "@/data/profile";
import { getRecaptchaToken } from "@/lib/recaptcha";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion-primitives";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const empty: FormState = { firstName: "", lastName: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      // Mint a reCAPTCHA v3 token (null when reCAPTCHA isn't configured).
      const recaptchaToken = await getRecaptchaToken("contact").catch(() => null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setSent(true);
        setForm(empty);
      } else {
        setError(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(siteConfig.discord);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let’s Build Something Together"
        subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact info */}
        <Reveal className="flex flex-col gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-iris to-magenta text-lg text-white">
              <FaEnvelope />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-muted">
                Email
              </span>
              <span className="block truncate font-semibold text-white">
                {siteConfig.email}
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={copyDiscord}
            className="group flex items-center gap-4 rounded-2xl glass p-5 text-left transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#5865F2] to-[#7c66e3] text-lg text-white">
              <FaDiscord />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs uppercase tracking-widest text-muted">
                Discord
              </span>
              <span className="block truncate font-semibold text-white">
                @{siteConfig.discord}
              </span>
            </span>
            <span className="text-muted transition-colors group-hover:text-white">
              {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
            </span>
          </button>

          <div className="rounded-2xl glass p-5">
            <p className="text-sm leading-relaxed text-muted">
              Prefer something formal? Grab my{" "}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-iris-light underline-offset-4 hover:underline"
              >
                resume
              </a>{" "}
              or connect on{" "}
              <a
                href="https://www.linkedin.com/in/therealkrishna/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-iris-light underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="gradient-border rounded-3xl bg-surface/60 p-6 backdrop-blur-md sm:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-green-500/15 text-3xl text-green-400">
                    <FaCheck />
                  </span>
                  <h3 className="text-xl font-bold text-white">Message sent!</h3>
                  <p className="max-w-sm text-sm text-muted">
                    Thanks for reaching out — I’ve received your message and will
                    get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      name="firstName"
                      label="First name"
                      value={form.firstName}
                      onChange={onChange}
                      placeholder="Ada"
                    />
                    <Field
                      name="lastName"
                      label="Last name"
                      value={form.lastName}
                      onChange={onChange}
                      placeholder="Lovelace"
                    />
                  </div>
                  <Field
                    name="email"
                    type="email"
                    label="Email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="ada@email.com"
                  />
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-widest text-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell me about your project or opportunity…"
                      className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-iris/60 focus:bg-white/[0.07]"
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-iris-light to-iris px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:shadow-glow-strong hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <FaCircleNotch className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-widest text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-iris/60 focus:bg-white/[0.07]"
      />
    </div>
  );
}
