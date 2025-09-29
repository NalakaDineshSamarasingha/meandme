import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
  <section id="projects" className="w-full mx-auto max-w-[1500px] mt-16 md:mt-[8vh] px-5 md:px-3">
      <ul className="columns-1 md:columns-3 gap-5 md:gap-8 [column-fill:_balance] w-full mx-auto">
        {projects.map((p, idx) => (
          <motion.li
            key={p.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.03 }}
            className="group mb-5 break-inside-avoid"
          >
            <Link
              to={`/project/${p.slug}`}
              className={`block relative w-full overflow-hidden border border-zinc-800 bg-zinc-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:ring-offset-2 focus:ring-offset-[#111111] transition-shadow ${p.aspect || ''}`}
              style={p.color ? { backgroundColor: p.color } : {}}
            >
              {(() => {
                const isVideo = p.media && p.media.endsWith('.mp4');
                if (isVideo) {
                  return (
                    <video
                      src={p.media}
                      className="w-full h-full object-cover object-center select-none pointer-events-none"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  );
                }
                if (p.media && p.media.length > 0) {
                  return (
                    <img
                      src={p.media}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                      draggable="false"
                    />
                  );
                }
                return (
                  <div className="w-full h-full flex items-center justify-center text-[11px] tracking-wide text-zinc-500 bg-zinc-800">
                    NO MEDIA
                  </div>
                );
              })()}
              {p.locked && (
                <span className="absolute top-3 right-3 text-[10px] tracking-wide font-medium bg-zinc-900/80 backdrop-blur px-3 py-1 rounded-sm border border-zinc-700 text-zinc-200">LOCKED</span>
              )}
            </Link>
            <div className="mt-4 md:mt-5">
              {p.client && (
                <h3 className="text-[11px] md:text-[11px] font-semibold tracking-[0.18em] text-zinc-100 uppercase">{p.client}</h3>
              )}
              {p.category && (
                <p className="mt-1 md:mt-2 text-[10px] md:text-[11px] tracking-[0.18em] text-zinc-500 uppercase">{p.category}</p>
              )}
              
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
