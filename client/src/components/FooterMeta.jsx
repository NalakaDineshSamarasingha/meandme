import React from 'react';
import pkg from '../../package.json';

// Utility for date formatting YYYY-MM-DD
function formatDate(d) {
  return d.toISOString().slice(0, 10);
}

export default function FooterMeta() {
  const version = `v${pkg.version}`;
  const lastUpdated = formatDate(new Date()); // Replace with build/commit date if desired

  const socials = [
    { label: 'Reading', href: 'https://medium.com/@nalakadinesh97' },
    { label: 'Code', href: 'https://github.com/NalakaDineshSamarasingha' },
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/nalaka-dinesh-b53173271/' }
  ];

  const metaTokens = [
    'TYPE',
    `COPYRIGHT_${new Date().getFullYear()}`,
    'REACT',
    'TAILWIND',
    'INPUT_MONO',
    'OFFBIT_TYPE'
  ];

  return (
    <footer className="w-full mt-32 md:mt-40 text-zinc-300 bg-[#1c1c1c] pt-8">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-3">
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-10 pb-16 border-b border-zinc-800/80">
          {/* Left Cluster */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center rounded-full border border-amber-400/70 px-4 py-1.5 text-[11px] font-medium tracking-wider bg-amber-400/10 text-amber-300 shadow-[0_0_0_1px_rgba(251,191,36,0.2)]">
                {version}
              </span>
              <div className="text-[11px] tracking-widest font-medium text-zinc-400 uppercase">
                LAST UPDATED <span className="text-zinc-300">{lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Middle: Social / Nav list */}
          <div className="flex flex-col md:items-start">
            <ul className="space-y-2">
              {socials.map((s, i) => (
                <li key={s.label} className="flex items-baseline gap-2">
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[13px] md:text-[14px] text-zinc-200 hover:text-amber-300 transition-colors underline decoration-transparent hover:decoration-amber-300/50 underline-offset-4"
                  >
                    {s.label}
                  </a>
                  <sup className="text-[10px] text-amber-300 font-mono tracking-wider">{i + 1}</sup>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col md:items-start">
            <h3 className="text-md md:text-sm font-medium text-zinc-100 tracking-tight mb-4 md:mb-5 max-w-xs">
              Let&apos;s build something together.
            </h3>
            <a
              href="mailto:nalakadinesh97@gmail.com"
              className="text-[8px] md:text-[10px] font-medium text-amber-300 hover:text-amber-200 transition-colors break-all"
            >
              nalakadinesh97@gmail.com
              <sup className="ml-1 text-[10px] text-amber-300 font-mono">4</sup>
            </a>
          </div>
        </div>

        {/* Lower meta strip */}
        <div className="pt-8 md:pt-10 pb-12 text-[10px] md:text-[11px] font-mono tracking-widest flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-500/80 select-none">
          {metaTokens.map((t, idx) => (
            <span
              key={t + idx}
              className="relative after:content-[''] after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:bg-zinc-600 after:rounded-sm last:after:hidden"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
