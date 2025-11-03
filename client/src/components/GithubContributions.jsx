import React from 'react';

function GithubContributions() {
  const username = "NalakaDineshSamarasingha";
  
  return (
    <div className="w-full px-6 md:px-3 mt-24 md:mt-[20vh] max-w-[1500px]">
      <h2 className="text-zinc-100 text-2xl md:text-4xl font-light tracking-tight mb-5 md:mb-6">
        GitHub Activity
      </h2>
      <p className="text-zinc-400 text-[13.5px] md:text-base max-w-prose leading-relaxed mb-8">
        A visual representation of my coding journey over the past year—527 contributions and counting.
      </p>
      
      <div className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 border border-zinc-800 overflow-hidden">
        {/* GitHub Contribution Graph */}
        <img 
          src={`https://ghchart.rshah.org/26a641/${username}`}
          alt="GitHub Contribution Chart"
          className="w-full h-auto"
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=00000000&hide_border=true&text_color=a1a1aa&title_color=ffffff&icon_color=26a641`}
            alt="GitHub Stats"
            className="w-full h-auto"
          />
          <img 
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=00000000&hide_border=true&ring=26a641&fire=26a641&currStreakLabel=a1a1aa&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff`}
            alt="GitHub Streak"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default GithubContributions;
