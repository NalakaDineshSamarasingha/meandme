import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectSectio from "../components/ProjectSectio";

function Home() {
  return (
    <div style={{ cursor: "crosshair" }}> {/* Custom Cursor */}
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
      </div>
      <ProjectSectio/>
    </div>
  );
}

export default Home;
