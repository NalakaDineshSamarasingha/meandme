import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectSectio from "../components/ProjectSectio";

// Animation variants for different elements
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -100,
    rotate: -3
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay: 0.2
    }
  }
};

const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
    rotate: 3
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay: 0.3
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleInBounce = {
  hidden: { 
    opacity: 0, 
    scale: 0.6,
    rotate: -10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.8
    }
  }
};

// Custom hook for scroll animations
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: "-50px 0px -50px 0px" 
  });
  
  return [ref, isInView];
}

// Parallax wrapper component
function ParallaxWrapper({ children, speed = 0.5, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div 
      ref={ref} 
      style={{ y }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Enhanced animated components
function AnimatedNavbar() {
  const [ref, inView] = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInLeft}
    >
      <Navbar />
    </motion.div>
  );
}

function AnimatedHero() {
  const [ref, inView] = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <Hero />
      </motion.div>
    </motion.div>
  );
}

function AnimatedProjectSection() {
  const [ref, inView] = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInRight}
    >
      <ProjectSectio />
    </motion.div>
  );
}

// Floating elements for extra visual flair
function FloatingElements() {
  return (
    <>
      {/* Floating orb 1 */}
      <motion.div
        className="fixed top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-30 pointer-events-none z-0"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating orb 2 */}
      <motion.div
        className="fixed top-60 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-20 pointer-events-none z-0"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Floating orb 3 */}
      <motion.div
        className="fixed bottom-40 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-25 pointer-events-none z-0"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.7, 0.25]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
}

// Scroll progress indicator
function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  // Page entrance animation
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      style={{ cursor: "crosshair" }}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Background Animation with Parallax */}
      <ParallaxWrapper speed={-0.3}>
        <BackgroundAnimation />
      </ParallaxWrapper>
      
      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        
        {/* Hero Section with Parallax */}
        <ParallaxWrapper speed={-0.1}>
          <AnimatedHero />
        </ParallaxWrapper>
      </div>
      
      {/* Project Section with enhanced entrance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ParallaxWrapper speed={0.2}>
          <AnimatedProjectSection />
        </ParallaxWrapper>
      </motion.div>
      
      {/* Smooth transition overlay for better visual flow */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-5 pointer-events-none z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.02, 0.05])
        }}
      />
    </motion.div>
  );
}

export default Home;