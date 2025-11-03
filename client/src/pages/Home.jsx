import React from 'react';
import Navbar from '../components/Navbar';
// import ExperienceTimeline from '../components/ExperienceTimeline';
import ProfileExperience from '../components/ProfileExperience';
import Projects from '../components/Projects';
import FooterMeta from '../components/FooterMeta';

function Home() {
  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      <Navbar />
      <main className="pt-32 md:pt-[8vw] flex flex-col items-center w-full">        
        <ProfileExperience />
        <Projects />
        <div id="contact" className="w-full px-6 md:px-3 mt-24 md:mt-[20vh] max-w-[1500px]">
          <h2 className="text-zinc-100 text-2xl md:text-4xl font-light tracking-tight mb-5 md:mb-6">Let's build something</h2>
          <p className="text-zinc-400 text-[13.5px] md:text-base max-w-prose leading-relaxed">Open to collaborations around systems, interaction, productivity & expressive surfaces. If you have an ambitious or ambiguous problem space—reach out.</p>
          <a href="mailto:nalakadinesh97@gmail.com" className="inline-flex items-center gap-2 mt-5 md:mt-6 text-amber-300 hover:text-amber-200 transition-colors text-sm md:text-base">nalakadinesh97@gmail.com <span className="inline-block translate-y-px">↗</span></a>
        </div>
        <FooterMeta />
      </main>
    </div>
  );
}

export default Home;