import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Download,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Info,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";

const ProfessionalCV = () => {
  const [showGpaDetails, setShowGpaDetails] = useState(false);

  

  // Sample academic results data - replace with your actual data
  const academicResults = {
    "Semester 1": [
      { module: "Essentials of Mathematics", grade: "A", credits: 2.5 },
      { module: "Structured Programming I", grade: "A", credits: 2.5 },
      { module: "Digital Systems and Digital Computers", grade: "A", credits: 3 },
      { module: "Multimedia Technologies and Web Design", grade: "A", credits: 3 },
      { module: "Principles of Management", grade: "B+", credits: 2.5 },
    ],
    "Semester 2": [
      { module: "Elements of Probability and Statistics", grade: "I", credits: 2.5 },
      { module: "Structured Programming II", grade: "A+", credits: 2.5 },
      { module: "Fundamentals of Databases", grade: "A-", credits: 2.5 },
      { module: "Business Foundation", grade: "C", credits: 2.5 },
      { module: "Microcontroller based ICT Project", grade: "A-", credits: 3 },
      { module: "Industry Reconnaissance and Engagement", grade: "A", credits: 2.5 },
    ],
    // "Semester 3": [
    //   { module: "Object-Oriented Programming", grade: "A", credits: 4 },
    //   { module: "Computer Networks", grade: "A-", credits: 4 },
    //   { module: "Linear Algebra", grade: "B+", credits: 3 },
    //   { module: "Software Engineering", grade: "A", credits: 4 },
    //   { module: "Operating Systems", grade: "A-", credits: 4 },
    // ],
    // "Semester 4": [
    //   { module: "Web Development", grade: "A", credits: 4 },
    //   { module: "Machine Learning", grade: "A-", credits: 4 },
    //   { module: "Discrete Mathematics", grade: "B+", credits: 3 },
    //   { module: "Human-Computer Interaction", grade: "A", credits: 3 },
    //   { module: "Mobile App Development", grade: "A", credits: 4 },
    // ],
    // "Semester 5 (Fall 2017)": [
    //   { module: "Advanced Algorithms", grade: "A", credits: 4 },
    //   { module: "Computer Graphics", grade: "A-", credits: 4 },
    //   { module: "Cybersecurity", grade: "A", credits: 4 },
    //   { module: "Technical Writing", grade: "A", credits: 2 },
    //   { module: "Artificial Intelligence", grade: "A-", credits: 4 },
    // ],
    // "Semester 6 (Spring 2018)": [
    //   { module: "Software Architecture", grade: "A", credits: 4 },
    //   { module: "Cloud Computing", grade: "A", credits: 4 },
    //   { module: "Project Management", grade: "A-", credits: 3 },
    //   { module: "Ethics in Technology", grade: "A", credits: 2 },
    //   { module: "Senior Capstone I", grade: "A", credits: 4 },
    // ],
    // "Semester 7 (Fall 2018)": [
    //   { module: "DevOps & Automation", grade: "A", credits: 4 },
    //   { module: "Big Data Analytics", grade: "A-", credits: 4 },
    //   { module: "Quality Assurance", grade: "A", credits: 3 },
    //   { module: "Leadership & Communication", grade: "A", credits: 2 },
    //   { module: "Senior Capstone II", grade: "A", credits: 4 },
    // ],
    // "Semester 8 (Spring 2019)": [
    //   { module: "Advanced Web Technologies", grade: "A", credits: 4 },
    //   { module: "System Design", grade: "A", credits: 4 },
    //   { module: "Internship", grade: "A", credits: 6 },
    //   { module: "Final Project", grade: "A", credits: 4 },
    // ],
  };

  const getGradePoint = (grade) => {
    const gradePoints = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      I: 0.0,
    };
    return gradePoints[grade] || 0.0;
  };
  return (
    <div className="bg-[#101010b3] ">
      <Navbar />
      <div className="min-h-screen  py-4 px-4 pt-[25vh] bg-[#101010b3] relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            backgroundSize: "",
            backgroundRepeat: "repeat",
            opacity: 0.4,
            zIndex: 1,
          }}
        ></div>

        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden ">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center">
                {/* <User size={64} className="text-white/80" /> */}
                <img src="/assets/cv.png" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Nalaka Dinesh
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-4 text-blue-100">
                  Undergraduate
                </h2>
                <p className="text-blue-100 leading-relaxed max-w-2xl">
                  As a secound-year undergraduate with
                  a keen interest in technology, I'm eager
                  to dive into projects and expand my
                  skills. Though my experience is limited,
                  my enthusiasm and commitment to
                  learning are boundless.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-gray-50 p-6 md:p-8 space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-blue-600" />
                  Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={16} />
                    <span className="text-sm">naladadineshx@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={16} />
                    <span className="text-sm">+94719297961</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-sm">Badull,Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Globe size={16} />
                    <span className="text-sm">nalaka.netlify.app</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Linkedin size={16} />
                    <span className="text-sm">linkedin.com/in/nalaka-dinesh-b53173271</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Github size={16} />
                    <span className="text-sm">github.com/NalakaDineshSamarasingha</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Code size={20} className="text-blue-600" />
                  Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Tailwind CSS", "Next.js"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "Ballerina", "Java"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "Docker", "AWS", "Figma"].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Languages
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sinhala</span>
                    <span className="text-sm text-gray-500">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">English</span>
                    <span className="text-sm text-gray-500">Native</span>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 p-6 md:p-8 space-y-8">
              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <Briefcase size={24} className="text-blue-600" />
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {/* <div className="border-l-4 border-blue-600 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Senior Full Stack Developer
                      </h4>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">
                      TechCorp Solutions
                    </p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>
                        • Led development of microservices architecture serving
                        1M+ users
                      </li>
                      <li>
                        • Improved application performance by 40% through code
                        optimization
                      </li>
                      <li>
                        • Mentored 5 junior developers and conducted technical
                        interviews
                      </li>
                      <li>
                        • Implemented CI/CD pipelines reducing deployment time
                        by 60%
                      </li>
                    </ul>
                  </div> */}

                  {/* <div className="border-l-4 border-blue-600 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Full Stack Developer
                      </h4>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        2020 - 2022
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">StartupXYZ</p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>
                        • Built responsive web applications using React and
                        Node.js
                      </li>
                      <li>
                        • Integrated third-party APIs and payment gateways
                      </li>
                      <li>
                        • Collaborated with design team to implement
                        pixel-perfect UIs
                      </li>
                      <li>
                        • Maintained 99.9% uptime through proactive monitoring
                      </li>
                    </ul>
                  </div> */}

                  <div className="border-l-4 border-blue-600 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Banking Trainer
                      </h4>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        2022 - 2023
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">
                      Bank of Ceylon
                    </p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>
                        • Work with bank customer in front desk.
                      </li>
                      <li>
                        • Help officers with day to day task.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
             <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <GraduationCap size={24} className="text-blue-600" />
                  Education
                </h3>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Bachelor of Science in Information Technology and Management
                    </h4>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      2022 - Current
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">
                    University of Moratuwa
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm">
                      Current GPA • GPA: 3.8/4.0
                    </p>
                    <button
                      onClick={() => setShowGpaDetails(true)}
                      className="p-1 rounded-full relative z-50 hover:bg-blue-100 text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      title="View detailed results"
                    >
                      <Info size={16}/>
                    </button>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <Code size={24} className="text-blue-600" />
                  Featured Projects
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      E-Commerce Platform
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Full-stack e-commerce solution with React, Node.js, and
                      Stripe integration
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Node.js", "MongoDB"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Task Management App
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Collaborative task management tool with real-time updates
                      and team features
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Socket.io", "PostgreSQL"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <Award size={24} className="text-blue-600" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">
                      AWS Certified Solutions Architect
                    </span>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">
                      Google Cloud Professional Developer
                    </span>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GPA Details Modal */}
          {showGpaDetails && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                  <h2 className="text-2xl font-bold">Academic Results</h2>
                  <button
                    onClick={() => setShowGpaDetails(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                  <div className="grid gap-6">
                    {Object.entries(academicResults).map(
                      ([semester, modules]) => {
                        const semesterGPA =
                          modules.reduce(
                            (acc, module) =>
                              acc +
                              getGradePoint(module.grade) * module.credits,
                            0
                          ) /
                          modules.reduce(
                            (acc, module) => acc + module.credits,
                            0
                          );

                        return (
                          <div
                            key={semester}
                            className="bg-gray-50 rounded-lg p-6"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                              <h3 className="text-lg font-semibold text-gray-800">
                                {semester}
                              </h3>
                              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                                <span className="text-sm text-gray-600">
                                  Credits:{" "}
                                  {modules.reduce(
                                    (acc, module) => acc + module.credits,
                                    0
                                  )}
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                  GPA: {semesterGPA.toFixed(2)}
                                </span>
                              </div>
                            </div>

                            <div className="grid gap-3">
                              {modules.map((module, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                                >
                                  <div className="flex-1">
                                    <h4 className="font-medium text-gray-800">
                                      {module.module}
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                      {module.credits} credits
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-600">
                                      {getGradePoint(module.grade).toFixed(1)}{" "}
                                      pts
                                    </span>
                                    <span
                                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        module.grade.startsWith("A")
                                          ? "bg-green-100 text-green-800"
                                          : module.grade.startsWith("B")
                                          ? "bg-blue-100 text-blue-800"
                                          : module.grade.startsWith("C")
                                          ? "bg-yellow-100 text-yellow-800"
                                          : "bg-red-100 text-red-800"
                                      }`}
                                    >
                                      {module.grade}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
                        Overall Academic Performance
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600">
                          Total Credits:{" "}
                          {Object.values(academicResults)
                            .flat()
                            .reduce((acc, module) => acc + module.credits, 0)}
                        </span>
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                          Cumulative GPA: 3.8/4.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Download Button */}
          <div className="p-6 bg-gray-50 border-t flex justify-end items-end">
            <button className="w-full sm:w-auto  flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCV;
