import React from "react";
import { experience } from "../data/experience";

export default function ProfileExperience() {
  return (
    <section
      id="experience"
      className="w-full mx-auto max-w-[1500px] px-5 md:px-3 pt-4 md:pt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-[6fr_6fr] gap-y-10 md:gap-y-6">
        {/* HEADERS (hidden on mobile for cleaner flow) */}
        <div className="hidden md:block">
          <h3 className="text-[11px] tracking-[0.05em] font-semibold uppercase text-[#52525b]">
            About
          </h3>
        </div>
        <div className="hidden md:grid md:grid-cols-[2fr_4fr]">
          <h3 className="text-[11px] tracking-[0.05em] font-semibold uppercase text-[#52525b]">
            Project
          </h3>
          <h3 className="text-[11px] tracking-[0.05em] font-semibold uppercase text-[#52525b]">
            Description
          </h3>
        </div>

        {/* ABOUT TEXT */}
        <div className="text-[15px] leading-relaxed text-zinc-200/90 space-y-5 max-w-prose">
          <p className="font-semibold md:font-bold md:w-[80%]">
            I design & engineer interfaces—focused on clarity, rhythm & performance across ambiguous product surfaces. Exploring AI assisted workflows & multimodal semantics. If you’re iterating on something ambitious,
            {" "}
            <a
              href="mailto:you@example.com"
              className="underline decoration-dotted underline-offset-4 text-amber-300 hover:text-amber-200"
            >
              get in touch
            </a>
            .
          </p>
        </div>

        {/* PROJECT + DESCRIPTION ROWS */}
        <div className="space-y-8 md:space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="md:grid md:grid-cols-[2fr_4fr] md:gap- border-b border-zinc-800 pb-6 last:border-none last:pb-0"
            >
              {/* Project */}
              <div className="mb-3 md:mb-0">
                <p className="font-medium text-zinc-100 tracking-tight text-[15px] md:text-[15px]">
                  {exp.company}
                </p>
                <p className="text-zinc-500 text-[11px] md:text-xs mt-1 md:mt-2 tracking-wide uppercase">
                  {exp.period}
                </p>
              </div>

              {/* Description */}
              <div className="text-[15px] leading-relaxed text-zinc-300">
                <p className="text-zinc-300/90 text-[14.5px] md:text-[15px]">{exp.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
