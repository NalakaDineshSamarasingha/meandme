import React from 'react';
import Lottie from './Lottie';
import WebsitePreview from './WebsitePreview';

const PortfolioProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CarPool",
      description: "Ride sharing platform for organizations.Collab with WSO2.",
      image: "/assets/carpool.png",
      video: "/Assets/project.mp4", // place project.mp4 inside public/Assets/
      technologies: ["Flutter","NextJs", "Ballerina", "Firebase","Choreo", "Google Map APIs"],
      category: "Mobile Application",
      status: "V1.0.0",
      users: "0",
      duration: "12 Months",
      highlights: ["Ride Sharing", "Real-time Tracking", "Admin Panel"],
      links: {
        live: false,
        github: "/carpool"
      },
      bgColor: "bg-gray-800"
    },
    {
      id: 2,
      title: "KimbulaGO",
      category: "Something awsome, Get in touch",
      image: "/api/placeholder/400/400",
      bgColor: "bg-gray-100",
      isPhone: true
    },
    {
      id: 3,
      title: "SpendWise",
      category: "FINANCE APP",
      image: "/api/placeholder/400/280",
      bgColor: "bg-gray-800",
      downloadable: true,
      downloadLink: "/downloads/spendwise.apk"
    },
    {
      id: 4,
      title: "APPLE",
      category: "CONVERSATIONAL AI",
      image: "/api/placeholder/400/280",
      bgColor: "bg-gray-900",
      hasLogo: true
    },
    {
      id: 5,
      title: "MUSIC APP",
      category: "MOBILE APPLICATION",
      image: "/api/placeholder/400/400",
      bgColor: "bg-gray-100"
    }
    ,{
      id: 6,
      title: "Ballerina Firebase Module",
      description: "Ballerina Module for accessing firebase firestore database.",
      image: "/assets/3.jpg",
      technologies: ["Ballerina"],
      category: "Package",
      status: "Live",
      users: "",
      duration: "1.0.0",
      highlights: ["Ballerina Package"],
      links: {
        live: "https://central.ballerina.io/nalaka/firestore/1.0.0",
        github: "https://github.com/NalakaDineshSamarasingha/nalaka-firestore"
      },
      bgColor: "bg-gray-800"
    }
  ];

  return (
  <section className="bg-[#111111] min-h-screen p-3 sm:p-5 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Tightened heading margins for mobile */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-3xl md:text-6xl font-light text-white mb-2 md:mb-4">
            PROJECTS
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            A collection of selected work and experiments
          </p>
        </div>

        {/* Reduced gap between cards on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-fr">
          {/* Project 1 - CarPool */}
          <div className="bg-[#111111] overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col rounded-lg">
            {/* Status Badge */}
            {projects[0].status && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-indigo-600/20 text-indigo-300 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-wider font-semibold border border-indigo-500/30">
                  {projects[0].status.toUpperCase()}
                </span>
              </div>
            )}
            {/* Image / Preview */}
            {/* Reduce vertical padding on mobile */}
            <div className="relative bg-gray-800 flex items-center justify-center overflow-hidden py-4  md:py-0">
              {projects[0].video ? (
                <video
                  src={projects[0].video}
                  className="w-full h-full object-cover md:object-contain transform group-hover:scale-[1.02] transition-all duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={(e)=>{e.currentTarget.style.display='none';}}
                >
                  Sorry, your browser doesn't support embedded videos.
                </video>
              ) : (
                <img
                  src={projects[0].image.replace('/assets/','/Assets/')}
                  alt={projects[0].title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            {/* Content */}
            <div className="p-3 md:p-5 flex flex-col gap-2.5 md:gap-4 flex-1">
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg tracking-tight flex items-center gap-2">
                  {projects[0].title}
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    {projects[0].category}
                  </span>
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1.5 leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
              {/* Tech stack badges */}
              {projects[0].technologies && (
                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-wide bg-gray-800/70 border border-gray-700 text-gray-300 px-2 py-1 rounded-md hover:bg-gray-700/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {/* Highlights */}
              {projects[0].highlights && (
                <div className="flex flex-wrap gap-2">
                  {projects[0].highlights.map((h) => (
                    <span key={h} className="text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 px-2 py-1 rounded-md">
                      {h}
                    </span>
                  ))}
                </div>
              )}
              {/* Meta Info (hidden on mobile to reduce vertical space) */}
              <div className="hidden md:flex flex-wrap gap-4 text-xs text-gray-500">
                {projects[0].users && <div><span className="text-gray-400">Users:</span> {projects[0].users}</div>}
                {projects[0].duration && <div><span className="text-gray-400">Duration:</span> {projects[0].duration}</div>}
              </div>
              {/* Actions */}
              <div className="flex items-center justify-between pt-1 md:pt-2 mt-auto">
                <button
                  disabled={!projects[0].links?.live}
                  className={`text-xs font-medium px-3 py-2 rounded-md border transition-colors ${projects[0].links?.live ? 'border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10' : 'border-gray-700 text-gray-500 cursor-not-allowed'}`}
                >
                  {projects[0].links?.live ? 'LIVE DEMO' : 'COMING SOON'}
                </button>
                {projects[0].links?.github && (
                  <a
                    href={projects[0].links.github}
                    className="text-xs font-medium px-3 py-2 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800/70 transition-colors"
                  >
                    GITHUB →
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project 2 - KimbulaGO with Lottie animation (independent sizing) */}
          <div className="bg-[#111111] rounded-xl overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col">
            {/* Mobile: content-fit height; md+: use aspect to normalize */}
            <div className="relative w-full bg-gray-800 flex items-center justify-center py-6 md:py-0 md:aspect-[16/10]">
              <div className="relative w-full h-full flex items-center justify-center">
                <Lottie
                  src="https://cdn.lottielab.com/l/AacwDyqM9Vubx9.json"
                  autoplay
                  loop
                  className="w-[100%] md:w-[100%] h-auto"
                  fallback={<span className="text-[10px] text-gray-400">Animation unavailable</span>}
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-white/5" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3">
              <h3 className="text-white font-semibold text-base md:text-lg tracking-tight">{projects[1].title}</h3>
              <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">{projects[1].category}</p>
              <div className="mt-2 flex items-center justify-between">
                {projects[0].links?.github && (
                  <a
                    href={projects[0].links.github}
                    className="text-xs font-medium px-3 py-2 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800/70 transition-colors"
                  >
                    GITHUB →
                  </a>
                )}
                <button className="text-xs font-medium px-3 py-2 rounded-md border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 transition-colors">
                  More →
                </button>
              </div>
            </div>
            
          </div>

          {/* Third column: SpendWise + Ballerina Module stacked */}
          <div className="flex flex-col gap-3 md:gap-6">
            {/* SpendWise (existing project 3) */}
            <div className="bg-[#111111] rounded-xl overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col">
              <div className="relative w-full bg-gray-800 flex items-center justify-center py-6 md:py-0 md:aspect-[16/9]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/Assets/spendwise.png"
                    alt="SpendWise screenshot"
                    className="max-h-40 w-auto object-contain drop-shadow md:max-h-48 animate-soft-bounce group-hover:pause-bounce"
                    onError={(e)=>{ e.currentTarget.replaceWith(document.createElement('span')); const span=e.currentTarget.previousSibling || e.currentTarget.parentElement?.lastChild; if(span){span.textContent='Image unavailable'; span.className='text-[10px] text-gray-400';}}}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3">
                <h3 className="text-white font-semibold text-base md:text-lg tracking-tight">{projects[2].title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  {projects[2].downloadable && (
                    <a
                      href={projects[2].downloadLink}
                      className="text-xs font-medium px-3 py-2 rounded-md border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition-colors"
                    >
                      Download
                    </a>
                  )}
                  <button className="text-xs font-medium px-3 py-2 rounded-md border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 transition-colors">
                    More →
                  </button>
                </div>
              </div>
            </div>
            {/* Ballerina Firebase Module (project 6) */}
            <div className="bg-[#111111] rounded-xl overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col p-3 md:p-5 gap-3 md:gap-4">
              <div className="flex items-start gap-3">
                <img src={projects[5].image} alt={projects[5].title} className="w-20 h-20 object-cover rounded-md border border-gray-700" />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base md:text-lg tracking-tight flex items-center gap-2">
                    {projects[5].title}
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                      {projects[5].category}
                    </span>
                  </h3>
                 
                </div>
              </div>
             
              
              
              <div className="flex items-center justify-between pt-2">
                <a
                  href={projects[5].links?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3 py-2 rounded-md border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition-colors"
                >
                  Package Page ↗
                </a>
                {projects[5].links?.github && (
                  <a
                    href={projects[5].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-2 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800/70 transition-colors"
                  >
                    GITHUB →
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project 4 - APPLE with live website preview (moved to next row) */}
          {/* Removed full screen height on mobile to reduce large empty vertical space */}
          <div className="bg-[#111111] rounded-xl overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col lg:col-span-2 h-[480px] md:h-auto min-h-0">
            <div className="flex-1 flex min-h-0">
              <WebsitePreview
                url="https://nalaka.netlify.app/"
                title="PORTFOLIO Live Preview"
                className="rounded-none flex-1"
                autoScroll
                scrollSpeed={28}
                scrollPause={1400}
                scrollStrategy="postMessage"
              />
            </div>
          </div>

          {/* Project 5 - MUSIC APP */}
          <div className="bg-[#111111] rounded-lg overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="p-4 md:p-6 bg-gray-800 flex items-center justify-center py-6 md:h-48 md:py-0">
              <div className="w-24 h-24 md:w-20 md:h-20 border-4 border-white rounded-full flex items-center justify-center overflow-hidden bg-gray-900/40">
                <img
                  src="/Assets/goviya.png"
                  alt="Goviya"
                  className="w-full h-full object-cover animate-soft-bounce group-hover:pause-bounce"
                  loading="lazy"
                  onError={(e)=>{e.currentTarget.replaceWith(Object.assign(document.createElement('span'),{textContent:'Image missing',className:'text-[10px] text-gray-400'}));}}
                />
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-white font-bold text-base md:text-lg mb-1">GOVIYA APP</h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">MOBILE APPLICATION</p>
            </div>
          </div>
        </div>

        {/* Bottom call-to-action removed per request */}
      </div>
    </section>
  );
};

export default PortfolioProjects;