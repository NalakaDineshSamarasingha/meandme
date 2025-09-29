import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-40 bg-[#111111]/92 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/72 border-b border-white/10">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-3">
        <div className="py-4 grid grid-cols-1 md:grid-cols-[6fr_2fr_4fr] items-center">
          {/* Name / Identity */}
          <div className="flex items-center">
            <a href="#about" className="text-sm md:text-sm font-medium tracking-tight text-zinc-100transition-colors">Nalaka Dinesh</a>
          </div>
          {/* Role */}
          <div className="hidden md:flex items-center ">
            <span className="text-[13px] font-medium text-zinc-200 tracking-tight whitespace-nowrap">Software Engineer</span>
          </div>
          {/* Location */}
          <div className="flex items-center md:start mt-4 md:mt-0">
            <span className="text-[13px] font-medium text-zinc-200 tracking-tight whitespace-nowrap">Colombo, SL</span>
          </div>
        </div>
        <div className="h-px w-full bg-zinc-800" />
      </div>
    </div>
  );
}

