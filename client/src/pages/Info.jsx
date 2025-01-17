import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Techie from "../components/Techie";


function Info() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-start pt-[30vh] justify-center bg-[#101010b3] relative overflow-hidden">
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
        <div className="relative z-20 text-white text-center">
        <div className="container mx-auto px-[15vw] ">

          <div className="flex items-center  mb-2">
            <span className="w-2 h-2 bg-white rounded-full mr-5 shadow-[0_0_6px_3px_rgba(255,255,255,0.8)]"></span>
            <span className="text-gray-400 uppercase text-[12px] tracking-widest">
              About Me
            </span>
          </div>
        </div>

          <h1 className="text-5xl font-bold leading-snug mt-6 shadow-sm">
            I'm passionate about creating beautiful
            <br />
            products that{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 shadow-sm">
              empower people.
            </span>
          </h1>
          <div className="pt-[5rem] flex flex-col gap-8 ">
            <div className="grid grid-cols-2 mx-[15vw] gap-[5vw]">
              <div>
                <img
                  src="/assets/My01.jpg"
                  className="w-[40vw] border-8 border-white shadow-[0px_4px_10px_2px_rgba(255,255,255,0.5)] rounded-lg"
                  alt="myself 01"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-[20px] mb-6 italic">
                  - This is me and me -
                </span>
                <span className="text-start leading-6 text-[#f2f2f280]">
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
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 mx-[15vw] gap-[5vw] pb-14">
              <div className="flex flex-col items-start justify-center">
                <span className="text-[20px] mb-6 italic">
                  - Background of Information Technology -
                </span>
                <span className="text-start leading-6 text-[#f2f2f280]">
                  I am an undergraduate in Information Technology at the
                  University of Moratuwa, passionate about solving challenging
                  problems through innovative solutions. My degree has equipped
                  me with skills in software development, database management,
                  and emerging technologies like AI and IoT. Driven by curiosity
                  and a love for innovation, I strive to create impactful
                  solutions that address real-world challenges while
                  continuously learning and improving my craft.
                </span>
              </div>
              <div>
                <img
                  src="/assets/My01.jpg"
                  className="w-[40vw] border-8 border-white shadow-[0px_4px_10px_2px_rgba(255,255,255,0.5)] rounded-lg"
                  alt="myself 01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="">
        <hr className="w-3/4 m-auto border-0 h-[1px] bg-[#f2f2f266]" />

        </div>
        <Experience/>
        <hr className="w-3/4 m-auto border-0 h-[1px] bg-[#f2f2f266]" />
        <Techie/>
    </div>
  );
}

export default Info;
