import React from 'react';
import CustomIcon from './ProjectIcon';
import NextIcon from './NextIcon';

function Hero() {
  return (
    <div className="flex items-end min-h-screen gap-3 px-8 sm:px-16 max-h-[90vh]">
      <div className="text-white mb-4 sm:mb-6">
        <div className="text-[#f2f2f280] mb-2 sm:mb-4 italic">
          <p>&lt;div&gt;</p>
        </div>
        <div className="text-4xl sm:text-6xl font-semibold text-shadow animate-lightning">
          I craft solution, <br />
          products & <span className="text-gold italic">stories</span>.
        </div>
        <div className="text-right">
          <p className="text-[#f2f2f2cc] text-sm sm:text-base">
            Undergraduate at University of Moratuwa, Sri Lanka.
          </p>
          <p className="text-[#f2f2f280] text-xs sm:text-sm">
            Faculty of Information Technology.
          </p>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col gap-1">
          <CustomIcon />
          <p className="font-bold text-sm sm:text-base">Recent Project</p>
          <div className="flex items-center">
            <p className="text-[#f2f2f2cc] font-extrathin text-sm sm:text-base">
              Carpooling Mobile App
            </p>
            <NextIcon />
          </div>
        </div>
        <div className="text-[#f2f2f280] text-right mt-2 sm:mt-4 italic">
          <p>&lt;/div&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
