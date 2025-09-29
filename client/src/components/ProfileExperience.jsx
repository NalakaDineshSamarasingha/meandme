import React from "react";
import { experience } from "../data/experience";

export default function ProfileExperience() {
  return (
    <section
      id="experience"
      className="w-full mx-auto max-w-[1500px] px-6 md:px-3 pt-0 md:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-[6fr_6fr] gap-y-8 md:gap-y-4">
        {/* HEADERS */}
        <div>
          <h3 className="text-[11px] tracking-[0.05em] font-semibold uppercase text-[#52525b]">
            About
          </h3>
        </div>
        <div className="grid grid-cols-[2fr_4fr]">
          <h3 className="text-[11px] tracking-[0.05em] font-semibold uppercase text-[#52525b]">
            Project
          </h3>
          <h3 className="text-[11px] tracking-[0.05em] font-semibold uppercase text-[#52525b]">
            Description
          </h3>
        </div>

        {/* ABOUT TEXT */}
        <div className="text-[15px] leading-relaxed text-zinc-200/90 space-y-5 max-w-prose">
          <p className="font-bold w-[80%]">
            I design & engineer interfaces—leaning into ambiguous surfaces
            where interaction detail matters. I care about clarity, rhythm &
            performance. Contributed across product, systems and early
            tooling. Exploring AI-assisted workflows & multimodal semantics.
            If you’re iterating on something ambitious,{" "}
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
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="grid grid-cols-[2fr_4fr] "
            >
              {/* Project */}
              <div>
                <p className="font-medium text-zinc-100 tracking-tight">
                  {exp.company}
                </p>
                <p className="text-zinc-400 text-xs mt-2">{exp.period}</p>
              </div>

              {/* Description */}
              <div className="text-[15px] leading-relaxed text-zinc-300">
                <p className="text-zinc-300/90">{exp.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
