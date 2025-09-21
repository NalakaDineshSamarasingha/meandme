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
      technologies: ["Flutter","NextJs", "Ballerina", "Firebase"],
      category: "Mobile Application",
      status: "In Development",
      users: "1000+",
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
      category: "BRAIN TECHNOLOGIES",
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
  ];

  return (
    <section className="bg-[#111111] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4">
            PROJECTS
          </h2>
          <p className="text-gray-400 text-lg">
            A collection of selected work and experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Project 1 - CarPool */}
          <div className="bg-[#111111] overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col">
            {/* Status Badge */}
            {projects[0].status && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-indigo-600/20 text-indigo-300 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-wider font-semibold border border-indigo-500/30">
                  {projects[0].status.toUpperCase()}
                </span>
              </div>
            )}
            {/* Image / Preview */}
            <div className="relative h-44 bg-gray-800 flex items-center justify-center overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div>
                <h3 className="text-white font-semibold text-lg tracking-tight flex items-center gap-2">
                  {projects[0].title}
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    {projects[0].category}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
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
              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-auto">
                {projects[0].users && <div><span className="text-gray-400">Users:</span> {projects[0].users}</div>}
                {projects[0].duration && <div><span className="text-gray-400">Duration:</span> {projects[0].duration}</div>}
              </div>
              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
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
            {/* Responsive video-like container retains its own aspect so cards can vary in height */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[9/16] md:aspect-[16/10] bg-gray-800 flex items-center justify-center">
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
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-white font-semibold text-lg tracking-tight">{projects[1].title}</h3>
              <p className="text-gray-400 text-xs uppercase tracking-wider">{projects[1].category}</p>
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

          {/* Project 3 - SpendWise with Lottie animation */}
          <div className="bg-[#111111] rounded-xl overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col">
            <div className="relative w-full aspect-[16/9] bg-gray-800 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Lottie
                  src="https://cdn.lottielab.com/l/Cz3oUBxpVndpXq.json"
                  autoplay
                  loop
                  className="w-[70%] md:w-[55%] h-auto"
                  fallback={<span className="text-[10px] text-gray-400">Animation unavailable</span>}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-white font-semibold text-lg tracking-tight">{projects[2].title}</h3>
              <p className="text-gray-400 text-xs uppercase tracking-wider">{projects[2].category}</p>
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

          {/* Project 4 - APPLE with live website preview */}
          <div className="bg-[#111111] rounded-xl overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all duration-300 relative flex flex-col lg:col-span-2">
            <WebsitePreview url="https://nalaka.netlify.app/" title="APPLE Live Preview" className="rounded-none" />
            
          </div>

          {/* Project 5 - MUSIC APP */}
          <div className="bg-[#111111] rounded-lg overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6 h-48 bg-gray-800 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-1">MUSIC APP</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">MOBILE APPLICATION</p>
            </div>
          </div>
        </div>

        {/* Bottom call-to-action removed per request */}
      </div>
    </section>
  );
};

export default PortfolioProjects;