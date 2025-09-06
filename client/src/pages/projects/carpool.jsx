import React, { useState } from "react";
import {
  ExternalLink,
  Download,
  Users,
  Play,
  Github,
  Calendar,
  Code2,
  Sparkles,
  Database,
  Workflow,
  GitBranch,
  BookOpen,
  Layers,
  Cpu,
  Award,
} from "lucide-react";
import Navbar from "../../components/Navbar";

const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Sample project data for skill showcase
  const project = {
    title: "CarPool Concept",
    subtitle: "Share your ride, Save your planet.",
    type: "Learning Project",
    status: "Completed",
    description:
      "A conceptual ride-sharing application  implement full-stack solutions using modern technologies.",
    fullDescription: `This project was developed as part of my journey to undergraduate. It demonstrates my ability to:

      - Design and implement a complete application architecture
      - Work with frontend (Flutter/React) and backend (Ballerina) technologies
      - Integrate various services and APIs
      - Solve complex problems with clean, maintainable code

    While not a production application, this is open source project if you like this you can customize it and use.`,

    image: "/assets/header.png",
    demoVideo: "https://www.youtube.com/embed/WuC90aa6kX0?si=gWI9dws7e6ZoE2hh",
    demoVideoId: "gWI9dws7e6ZoE2hh",

    technologies: [
      { name: "Flutter", purpose: "Mobile frontend" },
      { name: "NextJS", purpose: "Admin dashboard" },
      { name: "Ballerina", purpose: "Backend services" },
      { name: "Firebase", purpose: "Authentication" },
    ],

    duration: "12 Months",
    complexity: "Expert",

    keyFeatures: [
      "User Management & Role change",
      "Ride Management",
      "Real time tracking and location share",
      "Notification and In-App communication",
      "Admin dashboard",
    ],

    learningOutcomes: [
      {
        title: "State Management",
        description:
          "Learned to implement complex state management solutions in Flutter using Provider pattern.",
        icon: <Layers size={24} className="text-blue-400" />,
      },
      {
        title: "API Design",
        description:
          "Gained experience designing RESTful APIs with proper authentication and error handling.",
        icon: <Cpu size={24} className="text-green-400" />,
      },
      {
        title: "Problem Solving",
        description:
          "Developed critical thinking skills by implementing the route matching algorithm.",
        icon: <BookOpen size={24} className="text-purple-400" />,
      },
      {
        title: "Project Planning",
        description:
          "Learned to break down large problems into manageable tasks and estimate timelines.",
        icon: <Award size={24} className="text-orange-400" />,
      },
      {
        title: "Team work",
        description:
          "Working as a team for managing project.",
        icon: <Award size={24} className="text-orange-400" />,
      },
    ],

    links: {
      demo: "https://nalaka.netlify.app",
      github: "https://github.com/nalaka/carpool-concept",
      documentation:
        "https://github.com/nalaka/carpool-concept/blob/main/README.md",
    },

    screenshots: [
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=600&fit=crop",
    ],

    diagrams: {
      systemArchitecture: "/assets/system_architecture.png",
      classDiagram: "/assets/class_diagram.png",
      databaseSchema: "/assets/database_schema.png",
    },
    team: {
      members: [
        {
          name: "John Doe",
          role: "Frontend Developer",
          avatar: "/assets/team/john.jpg",
          contribution: "Implemented the user interface and state management",
        },
        {
          name: "Jane Smith",
          role: "Backend Developer",
          avatar: "/assets/team/jane.jpg",
          contribution: "Designed the API architecture and database schema",
        },
        // Add more team members as needed
      ],
      mentors: [
        {
          name: "Dr. Sarah Johnson",
          role: "Project Advisor",
          avatar: "/assets/team/sarah.jpg",
          organization: "University of Tech",
          guidance: "Provided architectural guidance and code reviews",
        },
        // Add more mentors as needed
      ],
    },
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Sparkles },
    { id: "skills", label: "Skills Gained", icon: BookOpen },
    { id: "team", label: "Team", icon: Users },
    { id: "architecture", label: "Technical Details", icon: Code2 },
    { id: "demo", label: "Demo", icon: Play },
  ];

  return (
    <div className="min-h-screen pt-[10vh] bg-[#101010b3] text-white relative">
      <Navbar />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/noise.png')",
          backgroundSize: "",
          backgroundRepeat: "repeat",
          opacity: 0.4,
          zIndex: -1,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative px-12 sm:px-12 py-24 md:py-32">
        <div className="max-w-[90vw] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Secound year software project
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm text-sm group relative"
                  >
                    <span>{tech.name}</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-xs text-gray-200 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {tech.purpose}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Demo
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
                <a
                  href={project.links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700/50 text-gray-200 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
                >
                  <BookOpen size={18} />
                  Documentation
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-3xl"></div>
              <img
                src={project.image}
                alt={project.title}
                className="relative w-full max-w-lg mx-auto object-cover rounded-2xl shadow-2xl "
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Calendar className="mx-auto mb-3 text-blue-400" size={32} />
              <div className="text-2xl font-bold mb-2">{project.duration}</div>
              <div className="text-gray-400">Development Time</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Code2 className="mx-auto mb-3 text-green-400" size={32} />
              <div className="text-2xl font-bold mb-2">
                {project.technologies.length}
              </div>
              <div className="text-gray-400">Technologies Used</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Award className="mx-auto mb-3 text-purple-400" size={32} />
              <div className="text-2xl font-bold mb-2">
                {project.complexity}
              </div>
              <div className="text-gray-400">Project Complexity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto space-x-1 bg-white/5 backdrop-blur-sm rounded-xl p-1 mb-8 border border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-none md:flex-1 flex items-center justify-center gap-2 py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <div className="space-y-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  Key Features Implemented
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Concept Screenshots</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-xl border border-white/10">
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <ExternalLink size={20} className="text-gray-800" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {project.learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {outcome.icon}
                    <h3 className="text-2xl font-semibold">{outcome.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "team" && (
            <div className="space-y-12">
              {/* Team Members Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Users className="text-blue-400" size={28} />
                  Development Team
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.team.members.map((member, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-400/50">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm">
                        {member.contribution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentors Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Award className="text-purple-400" size={28} />
                  Mentors & Advisors
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.team.mentors.map((mentor, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-400/50">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {mentor.name}
                        </h3>
                        <p className="text-purple-300 mb-2">
                          {mentor.role} • {mentor.organization}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {mentor.guidance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-12">
              {/* System Architecture */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <GitBranch className="text-blue-400" size={28} />
                  <h2 className="text-3xl font-bold">System Architecture</h2>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-white/10">
                  <img
                    src={project.diagrams.systemArchitecture}
                    alt="System Architecture Diagram"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  This diagram illustrates the conceptual architecture I
                  designed for this project. It demonstrates my understanding of
                  separating concerns between frontend, backend, and services.
                  The mobile app communicates with a Ballerina backend through
                  REST APIs, while the admin dashboard uses Next.js for
                  server-side rendering.
                </p>
              </div>

              {/* Class Diagram */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="text-green-400" size={28} />
                  <h2 className="text-3xl font-bold">Class Structure</h2>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-white/10">
                  <img
                    src={project.diagrams.classDiagram}
                    alt="Class Diagram"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The class diagram shows the object-oriented design approach I
                  took for the core domain models. I focused on creating clean,
                  modular classes with single responsibilities. The
                  relationships between User, Ride, and Route demonstrate my
                  understanding of object-oriented principles.
                </p>
              </div>

              {/* Database Schema */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="text-orange-400" size={28} />
                  <h2 className="text-3xl font-bold">Database Design</h2>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-white/10">
                  <img
                    src={project.diagrams.databaseSchema}
                    alt="Database Schema Diagram"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  This database schema demonstrates my ability to design
                  normalized relational databases. I implemented proper foreign
                  key relationships and considered indexing strategies for
                  performance. The schema supports all the application's
                  features while maintaining data integrity.
                </p>
              </div>
            </div>
          )}

          {activeTab === "demo" && (
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-6">
                  Project Demonstration
                </h2>

                <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6 relative border border-white/10">
                  {!videoLoaded ? (
                    <div
                      className="w-full h-full bg-cover bg-center cursor-pointer relative group"
                      style={{
                        backgroundImage: `url(https://img.youtube.com/vi/${project.demoVideoId}/maxresdefault.jpg)`,
                      }}
                      onClick={() => setVideoLoaded(true)}
                    >
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                          <Play
                            size={32}
                            className="text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-semibold mb-2">
                          {project.title} - Walkthrough
                        </h3>
                        <p className="text-gray-200 text-sm">
                          Click to play the demonstration
                        </p>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={`${project.demoVideo}?autoplay=1`}
                      title="Project Demo"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    View Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    <Github size={20} />
                    Explore Code
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
