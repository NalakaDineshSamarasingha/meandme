import React from 'react';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';

/*
  ExperienceTimeline
  - Minimal vertical timeline / list inspired by clean portfolio CV layouts.
  - Non-opinionated styling tokens so you can adjust quickly.
*/

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

export default function ExperienceTimeline() {
  return (
    <div className="relative w-full mx-auto max-w-4xl px-4 md:px-6">
      <div className="mb-10">
        <h2 className="text-zinc-100 text-2xl md:text-4xl font-light tracking-tight">Experience</h2>
        <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-prose">Selected roles & collaborations. Trim / expand as needed.</p>
      </div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col divide-y divide-white/5 border-y border-white/5"
      >
        {experience.map((exp, idx) => (
          <motion.li
            key={exp.company + idx}
            variants={item}
            className="py-6 md:py-7 grid gap-x-4 md:gap-x-8 items-start"
            style={{ gridTemplateColumns: '140px 1fr 200px' }}
          >
            <div className="text-xs md:text-sm uppercase tracking-wide text-amber-300/80 font-medium col-span-1">
              {exp.period}
            </div>
            <div className="col-span-1">
              <h3 className="text-zinc-100 font-semibold text-base md:text-lg flex flex-wrap gap-2 items-baseline">
                <span>{exp.company}</span>
                <span className="text-zinc-500 font-normal text-xs md:text-sm">{exp.role}</span>
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm mt-2 leading-relaxed max-w-prose">{exp.summary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map(t => (
                  <span key={t} className="text-[10px] md:text-[11px] tracking-wide bg-zinc-800/60 border border-zinc-700 text-zinc-300 px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-zinc-600/40 to-transparent" />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
