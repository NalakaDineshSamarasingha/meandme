import React from 'react';

export default function FooterMeta() {
  const buildMeta = [
    'TYPE', 'COPYRIGHT ' + new Date().getFullYear(), 'REACT', 'TAILWIND', 'INPUT'
  ];
  return (
    <footer className="mt-32 mb-10 px-4 md:px-8 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] tracking-wider text-zinc-500/80 font-mono">
      {buildMeta.map(token => (
        <span key={token} className="flex items-center gap-2 after:content-['▞'] after:text-zinc-700 last:after:content-none">
          {token}
        </span>
      ))}
      <a href="mailto:you@example.com" className="text-amber-300 hover:text-amber-200 transition-colors">contact</a>
    </footer>
  );
}
