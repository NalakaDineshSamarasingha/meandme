import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Play, 
  ArrowRight, 
  Calendar, 
  Users, 
  Code2, 
  Sparkles,
  Star,
  GitBranch,
  Database,
  Monitor,
  Smartphone,
  Award,
  BookOpen,
  Layers,
  Cpu,
  Zap,
  Target,
  Rocket,
  Eye,
  Brain,
  Settings
} from 'lucide-react';
import Navbar from '../../components/Navbar';

const UltraModernProjectShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const project = {
    title: "CarPool",
    subtitle: "Concept",
    tagline: "Revolutionary Mobility Solution",
    description: "AI-powered ride sharing that transforms urban transportation through intelligent matching and sustainable practices.",
    
    hero: {
      stats: [
        { value: "12M", label: "Development Hours", icon: Calendar, color: "from-violet-400 to-purple-600" },
        { value: "4+", label: "Tech Stack", icon: Code2, color: "from-cyan-400 to-blue-600" },
        { value: "99%", label: "Performance Score", icon: Zap, color: "from-emerald-400 to-green-600" },
        { value: "5★", label: "User Rating", icon: Star, color: "from-orange-400 to-red-500" }
      ]
    },

    technologies: [
      { 
        name: "Flutter",
        icon: "🦋",
        role: "Cross-Platform Mobile",
        level: 95,
        color: "from-blue-400 via-cyan-500 to-blue-600",
        features: ["Custom Animations", "State Management", "Native Performance"]
      },
      { 
        name: "Next.js",
        icon: "⚡",
        role: "Full-Stack Framework", 
        level: 88,
        color: "from-gray-600 via-gray-800 to-black",
        features: ["SSR", "API Routes", "Performance Optimization"]
      },
      { 
        name: "Ballerina",
        icon: "🎭",
        role: "Cloud-Native Backend",
        level: 92,
        color: "from-orange-400 via-red-500 to-pink-600",
        features: ["Microservices", "GraphQL", "Real-time APIs"]
      },
      { 
        name: "Firebase",
        icon: "🔥",
        role: "Backend-as-a-Service",
        level: 90,
        color: "from-yellow-400 via-orange-500 to-red-600",
        features: ["Authentication", "Real-time DB", "Cloud Functions"]
      }
    ],

    features: [
      {
        title: "Neural Route Optimization",
        description: "AI algorithm that learns from traffic patterns, user preferences, and environmental factors to suggest the most efficient routes.",
        icon: Brain,
        color: "from-purple-600 via-pink-600 to-red-500",
        tech: "Machine Learning",
        impact: "40% faster routes"
      },
      {
        title: "Quantum Security Layer",
        description: "Advanced encryption and biometric authentication ensuring user data remains completely secure and private.",
        icon: Settings,
        color: "from-blue-600 via-cyan-500 to-teal-400",
        tech: "Cryptography",
        impact: "Zero security breaches"
      },
      {
        title: "Holographic UI Interface",
        description: "Immersive 3D interface with gesture controls and voice commands for hands-free interaction while driving.",
        icon: Eye,
        color: "from-green-500 via-emerald-500 to-cyan-500",
        tech: "AR/VR Integration",
        impact: "95% user satisfaction"
      },
      {
        title: "Predictive Matching Engine",
        description: "Advanced algorithm that predicts user travel patterns and pre-matches compatible riders for seamless experiences.",
        icon: Target,
        color: "from-orange-500 via-red-500 to-pink-600",
        tech: "Predictive Analytics",
        impact: "85% match accuracy"
      }
    ],

    journey: [
      {
        phase: "Research & Discovery",
        duration: "2 months",
        description: "Market analysis, user interviews, and competitive research to identify key opportunities.",
        achievements: ["50+ user interviews", "Market gap analysis", "Technical feasibility study"],
        color: "from-violet-500 to-purple-600"
      },
      {
        phase: "Design & Prototyping", 
        duration: "3 months",
        description: "Creating intuitive user experiences through iterative design and rapid prototyping.",
        achievements: ["Interactive prototypes", "User testing sessions", "Design system creation"],
        color: "from-cyan-500 to-blue-600"
      },
      {
        phase: "Development & Testing",
        duration: "6 months", 
        description: "Building scalable architecture with comprehensive testing and optimization.",
        achievements: ["Full-stack implementation", "Performance optimization", "Security auditing"],
        color: "from-emerald-500 to-green-600"
      },
      {
        phase: "Launch & Optimization",
        duration: "1 month",
        description: "Deployment, monitoring, and continuous improvement based on real user feedback.",
        achievements: ["Production deployment", "Performance monitoring", "User feedback integration"],
        color: "from-orange-500 to-red-600"
      }
    ]
  };

  const addToRefs = (el, id) => {
    if (el && !observerRefs.current.find(ref => ref && ref.id === id)) {
      el.id = id;
      observerRefs.current.push(el);
    }
  };

  return (
    <div className=" bg-black text-white overflow-x-hidden relative">
    <Navbar/>
      {/* Dynamic Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-white/30 pointer-events-none z-50 mix-blend-difference transition-all duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.3) 2px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(236, 72, 153, 0.3) 2px, transparent 0)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex mt-[30vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Dynamic Background Orbs */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8), rgba(236, 72, 153, 0.4))',
              left: `${20 + mousePosition.x * 0.02}%`,
              top: `${10 + mousePosition.y * 0.02}%`,
              transform: `rotate(${scrollY * 0.1}deg)`
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.8), rgba(6, 182, 212, 0.4))',
              right: `${15 + mousePosition.x * 0.015}%`,
              bottom: `${20 + mousePosition.y * 0.015}%`,
              transform: `rotate(${-scrollY * 0.08}deg)`
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Floating Badge */}
          <div className="mb-8 inline-flex items-center">
            <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 border border-white/20 backdrop-blur-xl px-6 py-3">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 animate-pulse" />
              <div className="relative flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 font-medium">Featured Project</span>
                <Rocket className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Main Title with Staggered Animation */}
          <div className="mb-8 ">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-2xl md:text-2xl font-black leading-none relative">
                <span className="text-white bg-clip-text text-transparent animate-pulse">
                  {project.title}
                </span>
                <div className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-60 blur-xl animate-bounce" />
              </h1>
            </div>
            <h2 className="text-xl md:text-xl font-bold text-white/80 mb-6">{project.subtitle}</h2>
          </div>

          {/* Tagline with Typewriter Effect */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
            {project.tagline}
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {project.description}
          </p>

          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => setVideoPlaying(true)}
              className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Play className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                Experience Demo
                <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </button>
            
            <button className="group relative overflow-hidden px-10 py-5 border-2 border-gray-600 rounded-2xl font-bold text-lg hover:border-white transition-all duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Github className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
                Explore Code
                <ExternalLink className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </div>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {project.hero.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative">
                      <Icon className={`mx-auto mb-4 text-4xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300`} size={40} />
                      <div className="text-4xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={(el) => addToRefs(el, 'tech-section')} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-6xl font-black mb-8 transition-all duration-1000 ${isVisible['tech-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Neural Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies orchestrated for maximum performance and scalability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {project.technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`group relative transition-all duration-700 delay-${index * 100} ${isVisible['tech-section'] ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'}`}
              >
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center text-4xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{tech.name}</h3>
                        <p className="text-cyan-400 font-semibold">{tech.role}</p>
                      </div>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Proficiency</span>
                        <span className="text-sm font-bold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible['tech-section'] ? `${tech.level}%` : '0%' }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section ref={(el) => addToRefs(el, 'features-section')} className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-cyan-900/10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-6xl font-black mb-8 transition-all duration-1000 ${isVisible['features-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
                Next-Gen Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionary capabilities that redefine what's possible in ride sharing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {project.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group relative transition-all duration-700 delay-${index * 150} ${isVisible['features-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">{feature.tech}</div>
                          <div className="text-lg font-bold text-emerald-400">{feature.impact}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                        <span>Deep Dive</span>
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section ref={(el) => addToRefs(el, 'journey-section')} className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-6xl font-black mb-8 transition-all duration-1000 ${isVisible['journey-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Development Odyssey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A transformative 12-month journey from concept to revolutionary product
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 via-pink-500 to-orange-500 opacity-30" />
            
            {project.journey.map((phase, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-20 transition-all duration-700 delay-${index * 200} ${isVisible['journey-section'] ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${phase.color} rounded-full border-4 border-black z-10`} />
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 ml-auto'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{phase.phase}</h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${phase.color} rounded-full text-sm font-semibold`}>
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <div className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full mr-3`} />
                          <span className="text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-pink-900/20 to-cyan-900/20" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Ready to Innovate?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Experience the future of transportation. Dive into the code, explore the possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 rounded-2xl font-bold text-xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Rocket className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                Launch Experience
                <ExternalLink className="ml-3" size={20} />
              </div>
            </button>
            
            <button className="group relative overflow-hidden px-12 py-5 border-2 border-gray-600 rounded-2xl font-bold text-xl hover:border-white transition-all duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Github className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
                Source Universe
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Immersive Video Modal */}
      {videoPlaying && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6">
          <div className="relative w-full max-w-7xl aspect-video">
            <button
              onClick={() => setVideoPlaying(false)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors text-xl font-bold"
            >
              ✕ Close Experience
            </button>
            <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-3xl p-2">
              <iframe
                src="https://www.youtube.com/embed/WuC90aa6kX0?autoplay=1&controls=1&modestbranding=1"
                className="w-full h-full rounded-2xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UltraModernProjectShowcase;