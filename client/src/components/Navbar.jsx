import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-40 bg-[#111111]/90 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/70 border-b border-white/10">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-3">
        <div className="py-4 grid grid-cols-1 gap-y-2 md:gap-y-0 md:grid-cols-[6fr_2fr_4fr] items-center">
          {/* Left: Identity + Role (mobile stacked) */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-0">
            <a href="#about" className="text-sm font-medium tracking-tight text-zinc-100 transition-colors hover:text-white">Nalaka Dinesh</a>
            <span className="mt-1 md:mt-0 md:hidden text-[12px] font-medium text-zinc-400 tracking-tight">Software Engineer</span>
          </div>
          {/* Middle: Role (desktop) */}
            <div className="hidden md:flex items-center">
              <span className="text-[13px] font-medium text-zinc-200 tracking-tight whitespace-nowrap">Software Engineer</span>
            </div>
          {/* Right: Location (mobile inline below) */}
          <div className="flex items-center">
            <span className="text-[12px] md:text-[13px] font-medium text-zinc-300 tracking-tight whitespace-nowrap">Colombo, SL</span>
          </div>
        </div>
        <div className="h-px w-full bg-zinc-800" />
      </div>
    </div>
  );
}

