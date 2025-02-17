import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Techie from "../components/Techie";

function Info() {
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

        <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl opacity-15 z-15"></div>

        {/* Content */}
        <div className="relative z-20 text-white text-center px-6 sm:px-16 lg:px-40">
          <div className="flex items-center justify-center mb-4">
            <span className="w-2 h-2 bg-white rounded-full mr-4 shadow-[0_0_6px_3px_rgba(255,255,255,0.8)]"></span>
            <span className="text-gray-400 uppercase text-[12px] tracking-widest">
              About Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mt-4 shadow-sm">
            I'm passionate about creating beautiful
            <br />
            products that{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 shadow-sm">
              empower people.
            </span>
          </h1>

    <div className="relative w-full bg-cover bg-center h-[60vh]">
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
    </div>


          <div className="pt-8 flex flex-col gap-12">
            {/* First Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
              <div className="flex justify-center">
                <img
                  src="/assets/My01.jpg"
                  className="max-w-full sm:w-[40vw] border-4 sm:border-8 border-white shadow-lg rounded-lg"
                  alt="myself 01"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start justify-center">
                <span className="text-lg sm:text-[20px] mb-4 sm:mb-6 italic">
                  - This is me and me -
                </span>
                <p className="text-center sm:text-left leading-6 text-[#f2f2f280] text-sm sm:text-base">
                  Hi, I’m Nalaka Dinesh, an IT undergraduate at the University
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
                </p>
              </div>
            </div>

            {/* Second Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
              <div className="flex flex-col items-center sm:items-start justify-center">
                <span className="text-lg sm:text-[20px] mb-4 sm:mb-6 italic">
                  - Background of Information Technology -
                </span>
                <p className="text-center sm:text-left leading-6 text-[#f2f2f280] text-sm sm:text-base">
                  I am an undergraduate in Information Technology at the
                  University of Moratuwa, passionate about solving challenging
                  problems through innovative solutions. My degree has equipped
                  me with skills in software development, database management,
                  and emerging technologies like AI and IoT. Driven by curiosity
                  and a love for innovation, I strive to create impactful
                  solutions that address real-world challenges while
                  continuously learning and improving my craft.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/My01.jpg"
                  className="max-w-full sm:w-[40vw] border-4 sm:border-8 border-white shadow-lg rounded-lg"
                  alt="myself 01"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-3/4 m-auto border-0 h-[1px] bg-[#f2f2f266] my-6" />
        <Experience />
        <hr className="w-3/4 m-auto border-0 h-[1px] bg-[#f2f2f266] my-6" />
        <Techie />
      </div>
    </div>
  );
}

export default Info;
