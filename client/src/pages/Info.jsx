import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Techie from "../components/Techie";
import TechStack3D from "../components/ThreeD";

// Animation variants for different elements
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay: 0.2
    }
  }
};

const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay: 0.2
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });
  
  return [ref, isInView];
}

function Info() {
  const [headerRef, headerInView] = useScrollAnimation();
  const [scrollIndicatorRef, scrollIndicatorInView] = useScrollAnimation();
  const [firstSectionRef, firstSectionInView] = useScrollAnimation();
  const [secondSectionRef, secondSectionInView] = useScrollAnimation();
  const [experienceRef, experienceInView] = useScrollAnimation();
  const [techieRef, techieInView] = useScrollAnimation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center pt-[30vh] bg-[#101010b3] relative overflow-hidden">
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

        <motion.div 
          className="absolute w-80 h-80 bg-white rounded-full blur-3xl opacity-15 z-15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        {/* Header Content */}
        <motion.div 
          ref={headerRef}
          className="relative z-20 text-white text-center px-6 sm:px-16 lg:px-40"
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            variants={fadeInUp}
          >
            <motion.span 
              className="w-2 h-2 bg-white rounded-full mr-4 shadow-[0_0_6px_3px_rgba(255,255,255,0.8)]"
              animate={{
                boxShadow: [
                  "0_0_6px_3px_rgba(255,255,255,0.8)",
                  "0_0_12px_6px_rgba(255,255,255,1)",
                  "0_0_6px_3px_rgba(255,255,255,0.8)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.span>
            <span className="text-gray-400 uppercase text-[12px] tracking-widest">
              About Me
            </span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mt-4 shadow-sm"
            variants={fadeInUp}
          >
            I'm passionate about creating beautiful
            <br />
            products that{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 shadow-sm">
              empower people.
            </span>
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          ref={scrollIndicatorRef}
          className="relative w-full bg-cover bg-center h-[60vh]"
          initial="hidden"
          animate={scrollIndicatorInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <motion.div
                className="border border-white rounded-full p-2 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              <p className="text-white text-sm mt-4">SCROLL DOWN</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div className="relative z-20 text-white px-6 sm:px-16 lg:px-40 w-full">
          <div className="pt-8 flex flex-col gap-12">
            
            {/* First Section */}
            <motion.div 
              ref={firstSectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate={firstSectionInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="flex justify-center"
                variants={fadeInLeft}
              >
                <motion.img
                  src="/assets/My01.jpg"
                  className="max-w-full sm:w-[40vw] border-4 sm:border-8 border-white shadow-lg rounded-lg"
                  alt="myself 01"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center sm:items-start justify-center"
                variants={fadeInRight}
              >
                <motion.span 
                  className="text-lg sm:text-[20px] mb-4 sm:mb-6 italic"
                  variants={fadeInUp}
                >
                  - This is me and me -
                </motion.span>
                <motion.p 
                  className="text-center sm:text-left leading-6 text-[#f2f2f280] text-sm sm:text-base"
                  variants={fadeInUp}
                >
                  Hi, I'm Nalaka Dinesh, an IT undergraduate at the University
                  of Moratuwa, Sri Lanka's leading institution for technology
                  and innovation. I hail from Badulla, one of the most beautiful
                  and internationally admired cities in Sri Lanka, known for its
                  breathtaking landscapes and cultural charm. I am passionate
                  about tackling challenging tasks and turning obstacles into
                  opportunities for growth. Whether it's solving complex
                  technical problems, mastering new technologies, or creating
                  innovative solutions, I thrive in pushing boundaries to
                  achieve the extraordinary. Driven, adaptable, and eager to
                  learn, I aim to contribute my skills and enthusiasm to create
                  impactful projects that make a difference.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Second Section */}
            <motion.div 
              ref={secondSectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate={secondSectionInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="flex flex-col items-center sm:items-start justify-center"
                variants={fadeInLeft}
              >
                <motion.span 
                  className="text-lg sm:text-[20px] mb-4 sm:mb-6 italic"
                  variants={fadeInUp}
                >
                  - Background of Information Technology -
                </motion.span>
                <motion.p 
                  className="text-center sm:text-left leading-6 text-[#f2f2f280] text-sm sm:text-base"
                  variants={fadeInUp}
                >
                  I am an undergraduate in Information Technology at the
                  University of Moratuwa, passionate about solving challenging
                  problems through innovative solutions. My degree has equipped
                  me with skills in software development, database management,
                  and emerging technologies like AI and IoT. Driven by curiosity
                  and a love for innovation, I strive to create impactful
                  solutions that address real-world challenges while
                  continuously learning and improving my craft.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="flex justify-center"
                variants={fadeInRight}
              >
                <motion.img
                  src="/assets/My01.jpg"
                  className="max-w-full sm:w-[40vw] border-4 sm:border-8 border-white shadow-lg rounded-lg"
                  alt="myself 01"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: -2,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Dividers and Components */}
        <motion.hr 
          className="w-3/4 m-auto border-0 h-[1px] bg-[#f2f2f266] my-6"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        
        <motion.div
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Experience />
        </motion.div>
        
        <motion.hr 
          className="w-3/4 m-auto border-0 h-[1px] bg-[#f2f2f266] my-6"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        
        <motion.div
          ref={techieRef}
          initial="hidden"
          animate={techieInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Techie />
          
        </motion.div>
      </div>
          <TechStack3D/>
    </div>
  );
}

export default Info;