import React, { useState, useEffect } from "react";
import { 
  Code, 
  Palette, 
  Globe, 
  Smartphone, 
  Server, 
  Database,
  Layers,
  FileCode,
  Zap,
  Coffee,
  Terminal,
  GitBranch
} from "lucide-react";

function Techie() {
  const frontendTools = [
    { name: "React", icon: Code, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "HTML5", icon: Globe, color: "text-orange-400", bg: "bg-orange-400/10" },
    { name: "CSS3", icon: Palette, color: "text-blue-300", bg: "bg-blue-300/10" },
    { name: "JavaScript", icon: FileCode, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Flutter", icon: Smartphone, color: "text-cyan-400", bg: "bg-cyan-400/10" }
  ];

  const backendTools = [
    { name: "Node.js", icon: Server, color: "text-green-400", bg: "bg-green-400/10" },
    { name: "PHP", icon: Terminal, color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "Laravel", icon: Layers, color: "text-red-400", bg: "bg-red-400/10" },
    { name: "Python", icon: Coffee, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Java", icon: Zap, color: "text-orange-400", bg: "bg-orange-400/10" }
  ];

  const databaseTools = [
    { name: "MySQL", icon: Database, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-300", bg: "bg-blue-300/10" },
    { name: "MongoDB", icon: Database, color: "text-green-400", bg: "bg-green-400/10" },
    { name: "Firebase", icon: Database, color: "text-yellow-400", bg: "bg-yellow-400/10" }
  ];

  const TechSection = ({ title, tools, gradient, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div 
        className={`relative overflow-hidden transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className={`absolute inset-0 ${gradient} opacity-5 `}></div>
        <div className="relative backdrop-blur-sm bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-bounce">
              <span className="text-white font-bold text-lg">{title.charAt(0)}</span>
            </div>
            <h3 className="text-2xl font-bold text-white animate-fade-in-right">{title}</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={`group relative transform transition-all duration-700 hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${(index * 150) + delay}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`${tool.bg} rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-gray-900/50 relative overflow-hidden`}>
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className={`p-3 rounded-lg ${tool.bg} border border-gray-600/20 group-hover:rotate-12 transition-transform duration-300`}>
                      <tool.icon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      {tool.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen  py-16 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4 animate-ping"></div>
            <span className="text-gray-400 uppercase text-sm tracking-[0.2em] font-medium animate-fade-in-up">
              Technology Stack
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </p>
        </div>

        {/* Tech Sections */}
        <div className="space-y-12">
          <TechSection 
            title="Frontend" 
            tools={frontendTools}
            gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
            delay={600}
          />
          
          <TechSection 
            title="Backend" 
            tools={backendTools}
            gradient="bg-gradient-to-r from-green-500 to-teal-500"
            delay={800}
          />
          
          <TechSection 
            title="Database" 
            tools={databaseTools}
            gradient="bg-gradient-to-r from-purple-500 to-pink-500"
            delay={1000}
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "15+", label: "Technologies", icon: GitBranch },
            { number: "50+", label: "Projects Built", icon: Code },
            { number: "3+", label: "Years Experience", icon: Zap }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${1200 + (index * 200)}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 group-hover:rotate-12 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <stat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 counter-animation">{stat.number}</div>
              <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Techie;