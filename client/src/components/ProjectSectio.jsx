import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Code, 
  Briefcase, 
  GraduationCap,
  Star,
  Calendar,
  Users,
  Zap,
  Award,
  Target,
  ArrowRight,
  Eye
} from 'lucide-react';

function ProjectSection() {
  const [activeTab, setActiveTab] = useState('real-world');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const realWorldProjects = [
    {
      id: 1,
      title: "CarPool",
      description: "Ride sharing platform for organizations.",
      image: "/assets/carpool.png",
      technologies: ["Flutter","NextJs", "Ballerina", "Firebase"],
      category: "Mobile App",
      status: "In Development",
      users: "1000+",
      duration: "12 Months",
      highlights: ["Ride Sharing", "Real-time Tracking", "Admin Panel"],
      links: {
        live: false,
        github: "#"
      }
    },
    {
      id: 2,
      title: "My Portfolio",
      description: "Static website design by me for showcase my passion",
      image: "/assets/image.png",
      technologies: ["ReactJs"],
      category: "Web Application",
      status: "Live",
      users: "",
      duration: "Current",
      highlights: ["Showcase My Passion"],
      links: {
        live: "https://nalaka.netlify.app/",
        github: "https://github.com/NalakaDineshSamarasingha/meandme#"
      }
    },
    
  ];

  const skillProjects = [
    {
      id: 4,
      title: "AI Chat Bot",
      description: "Intelligent chatbot using natural language processing for customer support automation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
      category: "AI/ML",
      status: "Completed",
      skillLevel: "Advanced",
      duration: "2 months",
      highlights: ["NLP Integration", "Context Understanding", "Multi-language"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price tracking with portfolio management and price alerts.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "WebSocket", "API"],
      category: "Data Visualization",
      status: "Completed",
      skillLevel: "Intermediate",
      duration: "3 weeks",
      highlights: ["Real-time Data", "Interactive Charts", "Price Alerts"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio with Three.js animations and smooth transitions.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      technologies: ["Three.js", "GSAP", "React", "WebGL"],
      category: "3D Graphics",
      status: "Completed",
      skillLevel: "Advanced",
      duration: "1 month",
      highlights: ["3D Animations", "WebGL Shaders", "Interactive UI"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const ProjectCard = ({ project, type }) => (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
            'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Overlay Links */}
        <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.links.live && (
            <a href={project.links.live} target='_blank' className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-sm font-medium transition-colors duration-200">
              <Globe className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target='_blank' className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white text-sm font-medium transition-colors duration-200">
              <Eye className="w-4 h-4" />
              View Demo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target='_blank' className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-colors duration-200">
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Stats */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {project.duration}
          </div>
          {type === 'real-world' && project.users && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {project.users} users
            </div>
          )}
          {type === 'skill' && project.skillLevel && (
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              {project.skillLevel}
            </div>
          )}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {project.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="text-xs text-gray-300 bg-gray-800/30 px-2 py-1 rounded border border-gray-700/30"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  py-16 relative z-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-red-500 rounded-full mr-4 animate-ping"></div>
            <span className="text-gray-400 uppercase text-sm tracking-[0.2em] font-medium">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore my journey through real-world applications and skill-building experiments that showcase growth and innovation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2">
            <button
              onClick={() => setActiveTab('real-world')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'real-world'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Real World Projects
            </button>
            <button
              onClick={() => setActiveTab('skill-dev')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'skill-dev'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Skill Development
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {activeTab === 'real-world' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realWorldProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProjectCard project={project} type="real-world" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skill-dev' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProjectCard project={project} type="skill" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default ProjectSection;