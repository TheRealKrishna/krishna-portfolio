"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion-primitives";

export default function Skills() {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Technical Proficiency"
        title="Skills & Tools I Work With"
        subtitle="A toolkit honed across real-world products — from the languages I think in to the frameworks I ship with."
      />

      <Reveal className="mt-14" delay={0.1}>
        <div className="overflow-hidden rounded-3xl glass">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-4 sm:p-5">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActive(i)}
                className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === i ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-iris to-magenta shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skill grid */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-6 text-sm text-muted">{category.blurb}</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-colors hover:bg-white/[0.07]"
                    >
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl p-2 transition-all"
                        style={{
                          backgroundColor: `${skill.color}1a`,
                          boxShadow: `inset 0 0 0 1px ${skill.color}55`,
                        }}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={28}
                          height={28}
                          className="h-6 w-6 object-contain transition-transform group-hover:scale-110"
                        />
                      </span>
                      <span className="text-sm font-medium text-white/90">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
