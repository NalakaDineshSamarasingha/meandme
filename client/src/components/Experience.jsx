import React from "react";

function Experience() {
  return (
    <div className="my-12">
      <div className="relative z-20 text-white text-center">
        <div className="container mx-auto px-6 sm:px-10 md:px-[15vw]">
          <div className="flex items-center mb-4">
            <span className="w-2 h-2 bg-white rounded-full mr-5 shadow-[0_0_6px_3px_rgba(255,255,255,0.8)]"></span>
            <span className="text-gray-400 uppercase text-xs sm:text-sm tracking-widest">
              Experience
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-10 md:px-[15vw] my-12">
        <table className="text-white w-full border-collapse">
          <tbody>
            <tr className="flex flex-col md:table-row w-full">
              <td className="w-full md:w-1/2 text-2xl sm:text-3xl font-bold mb-4 md:mb-0">
                Bank Of Ceylon
              </td>
              <td className="w-full md:w-1/2">
                <span className="text-lg sm:text-2xl">School Leaver Trainer</span>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Sep 2022 - Feb 2023
                </span>
                <br />
                <br />
                <span className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  After completing my secondary education, I worked as a school
                  leaver at the Bank of Ceylon, Badulla City Branch, to gain my
                  first professional experience as an employee.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
