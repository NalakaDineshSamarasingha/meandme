import React from "react";

function Experience() {
  return (
    <div className="my-12">
      <div className="relative z-20 text-white text-center">
        <div className="container mx-auto px-[15vw] ">
          <div className="flex items-center  mb-2">
            <span className="w-2 h-2 bg-white rounded-full mr-5 shadow-[0_0_6px_3px_rgba(255,255,255,0.8)]"></span>
            <span className="text-gray-400 uppercase text-[12px] tracking-widest">
              Experience
            </span>
          </div>
        </div>
      </div>
      <div className="px-[15vw] my-12">
        <table className="text-white w-[100%]" border='1'>
            <tr className=" w-[100%]">
                <td className="w-[50%] text-3xl font-bold content-start">Bank Of Ceylon</td>
                <td className="w-[50%]"><span className="text-2xl">School Leaver Trainer</span> <br/> <span className="text-gray-500 text-xs"> Sep 2022 - Feb 2023</span> <br/> <br/> <span className="text-gray-400 ">After completing my Secoundary Education, I worked as a school leaver at the Bank of Ceylon, Badulla City Branch, to gain my first professional experience as an employee.</span> </td>
            </tr>
        </table>
      </div>
    </div>
  );
}

export default Experience;
