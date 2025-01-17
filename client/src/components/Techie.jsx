import React from "react";
import Dice from "./Dice";
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faNpm,
  faFlutter,
  faJs
} from "@fortawesome/free-brands-svg-icons";
import { faPhp,faNodeJs, faLaravel,faJava,faPython} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Techie() {
  const tools = [
    { name: "React", icon: faReact, color: "text-blue-500" },
    { name: "HTML", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss3, color: "text-blue-400" },
    { name: "JavaScript", icon: faJsSquare, color: "text-yellow-500" },
    { name: "Tailwind", icon: faCss3, color: "text-teal-500" }, // Placeholder
    { name: "TypeScript", icon: faJsSquare, color: "text-blue-500" }, // Placeholder
    { name: "Flutter", icon: faFlutter, color: "text-blue-500" }, // Placeholder
  ];
  const toolsB = [
    { name: "PHP", icon: faPhp, color: "text-blue-500" },
    { name: "NodeJS", icon: faNodeJs, color: "text-orange-500" },
    { name: "Laravel", icon: faLaravel, color: "text-blue-400" },
  ];

  return (
    <div className="my-12">
      <div className="relative z-20 text-white text-center">
        <div className="container mx-auto px-[15vw] ">
          <div className="flex items-center  mb-2">
            <span className="w-2 h-2 bg-white rounded-full mr-5 shadow-[0_0_6px_3px_rgba(255,255,255,0.8)]"></span>
            <span className="text-gray-400 uppercase text-[12px] tracking-widest">
              Technology
            </span>
          </div>
        </div>
      </div>
      <div className="px-[15vw] my-12">
        <table className="text-white w-[100%]" border="1">
          <tr className=" w-[100%]">
            <td className="w-[50%] text-3xl font-bold content-start">Frontend</td>
            <td className="w-[50%]">
              <Dice
                icon1={faReact}
                icon2={faHtml5}
                icon3={faCss3}
                icon4={faJsSquare}
                icon5={faFlutter}
                icon6={faNpm}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div className="flex flex-wrap gap-6 w-full">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center "
                  >
                    <FontAwesomeIcon
                      icon={tool.icon}
                      className={`text-4xl ${tool.color}`}
                    />
                  </div>
                ))}
              </div>
            </td>
          </tr>

          <tr className=" w-[100%]">
            <td className="w-[50%] text-3xl font-bold content-start">Backend</td>
            <td className="w-[50%]">
              <Dice
                icon1={faLaravel}
                icon2={faPhp}
                icon3={faNodeJs}
                icon4={faJava}
                icon5={faPython}
                icon6={faJs}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div className="flex flex-wrap gap-6 w-full">
                {toolsB.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center "
                  >
                    <FontAwesomeIcon
                      icon={tool.icon}
                      className={`text-4xl ${tool.color}`}
                    />
                  </div>
                ))}
              </div>
            </td>
          </tr>


          <tr className=" w-[100%]">
            <td className="w-[50%] text-3xl font-bold content-start">Database</td>
            <td className="w-[50%]">
              <Dice
                icon1={faLaravel}
                icon2={faPhp}
                icon3={faNodeJs}
                icon4={faJava}
                icon5={faPython}
                icon6={faJs}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div className="flex flex-wrap gap-6 w-full">
                {toolsB.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center "
                  >
                    <FontAwesomeIcon
                      icon={tool.icon}
                      className={`text-4xl ${tool.color}`}
                    />
                  </div>
                ))}
              </div>
            </td>
          </tr>



        </table>
      </div>
    </div>
  );
}

export default Techie;
