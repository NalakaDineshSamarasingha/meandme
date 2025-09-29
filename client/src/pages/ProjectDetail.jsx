import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import FooterMeta from "../components/FooterMeta";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111111] text-zinc-200 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pt-40">
          <p className="text-sm text-zinc-500 mb-8">Project not found.</p>
          <Link
            to="/"
            className="text-amber-300 hover:text-amber-200 text-sm underline underline-offset-4"
          >
            ← Back
          </Link>
        </main>
      </div>
    );
  }

  const isVideo = project.media && project.media.endsWith(".mp4");

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1500px] mx-auto px-6 md:px-3 pt-32 md:pt-40 pb-40">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr_3fr] gap-y-12 md:gap-x-10 mb-16">
          {/* Left column: Title / Client */}
          <div>
            <h1 className="text-2xl md:text-[32px] font-medium tracking-tight mb-6 md:mb-8">
              {project.title}
            </h1>
            <div className="space-y-10 hidden md:block">
              <div>
                <p className="text-[13px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-4">
                  {project.client}
                </p>
                <p className="text-[11px] tracking-[0.2em] text-amber-300 uppercase">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
          {/* Middle narrative */}
          <div className="space-y-6 text-[14px] md:text-[15px] leading-relaxed text-zinc-300">
            <p>{project.desc}</p>
            <p>{project.desc2}</p>
          </div>
          {/* Right meta blocks */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-10 text-[12px] md:text-[13px] tracking-tight">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-3">
                Role
              </h4>
              <p className="font-medium text-zinc-200">{project.role}</p>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-3">
                Collaborators
              </h4>
              <p className="text-zinc-300 space-y-1">
                {project.collab.map((collab, index) => (
                  <span className="block" key={index}>
                    {collab}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-3">
                Duration
              </h4>
              <p className="text-zinc-300">{project.year}</p>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-3">
                Technologies
              </h4>
              <p className="text-zinc-300 space-y-1">
                {project.technology.map((technology, index) => (
                  <span className="block" key={index}>
                    {technology}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={project.github}
            type="button"
            className="group relative inline-flex items-center justify-between px-6 py-3 bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800 rounded-sm text-[11px] tracking-[0.18em] font-medium text-zinc-200 uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300/50"
          >
            Source Code
            <span className="ml-4 text-zinc-500 group-hover:text-amber-300 transition-colors">
              ›
            </span>
          </a>
          <a
            href={project.downlod}
            type="button"
            className="group relative inline-flex items-center justify-between px-6 py-3 bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800 rounded-sm text-[11px] tracking-[0.18em] font-medium text-zinc-200 uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300/50"
          >
            Download/Explore
            <span className="ml-4 text-zinc-500 group-hover:text-amber-300 transition-colors">
              ›
            </span>
          </a>
        </div>

        {/* Media Block */}
        <div
          className={`w-full border border-zinc-800 bg-zinc-900 overflow-hidden rounded-sm ${
            project.aspect || "aspect-[16/9]"
          } mb-24`}
          style={project.color ? { backgroundColor: project.color } : {}}
        >
          {isVideo ? (
            <video
              src={project.media}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          ) : project.media ? (
            <img
              src={project.media}
              alt={project.title}
              className="w-full h-full object-cover bg-white"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-xs tracking-wider text-zinc-500">
              NO MEDIA
            </div>
          )}
        </div>

        {/* Case Study Sections */}
        <div className="space-y-10 md:space-y-10 max-w-[1200px]">
          <section>
            <h2 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-8">
              Context
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-[14px] md:text-[15px] leading-relaxed text-zinc-300">
              {project.context.map((context, index) => (
                <p key={index}>{context}</p>
              ))}
            </div>
          </section>
          <section>
            {/* <h2 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-8">Explorations</h2>
            <div className="space-y-8 max-w-4xl text-[14px] md:text-[15px] leading-relaxed text-zinc-300">
              <p>Interaction sketches validated timing tolerances for cross‑channel composition. Rapid code spikes stress tested streaming token partials & dynamic viewport annotation overlays.</p>
              <p>We iterated on speculative scaffolds: structured command lattices, intent disambiguation wheels & adaptive command palettes merging natural + formal query expression.</p>
            </div> */}
          </section>
          <section id="outcome">
            <h2 className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-10">
              Outcome / Feature Surfaces
            </h2>
            {project.feature_video && project.feature_video.length > 0 && (
              <div className="space-y-24">
                {project.feature_video.map((feature, index) => {
                  const even = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-start`}
                    >
                      {/* Text */}
                      <div className={`md:col-span-5 flex flex-col order-2 md:order-${even ? '1' : '2'} space-y-4`}> 
                        <span className="text-[10px] tracking-[0.3em] font-semibold text-amber-300 uppercase">Feature {index + 1}</span>
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-100">{feature.title}</h3>
                        {feature.description && (
                          <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-400 max-w-prose">{feature.description}</p>
                        )}
                      </div>
                      {/* Media */}
                      <div className={`md:col-span-7 order-1 md:order-${even ? '2' : '1'}`}>
                        <video
                          src={feature.src}
                          className="w-full h-auto rounded-md shadow-sm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {!project.feature_video && (
              <p className="text-sm text-zinc-500">No feature media documented yet.</p>
            )}
          </section>


        </div>

        <div className="mt-32">
          <Link
            to="/"
            className="text-[12px] tracking-[0.18em] uppercase text-amber-300 hover:text-amber-200 transition-colors"
          >
            ← Back to Index
          </Link>
        </div>
      </main>
      <FooterMeta />
    </div>
  );
}
