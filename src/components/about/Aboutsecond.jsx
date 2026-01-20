import React from "react";
import Officeworkarea from "../../assets/images/Office-work-area.svg";

const Aboutsecond = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* IMAGE — UNTOUCHED */}
        <img src={Officeworkarea} alt="office work area" className="w-full mb-0" />

        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3">
          {/* 1 */}
          <div className="p-12 border-r border-gray-700 flex flex-col">
            <p className="text-5xl font-bold">4.9/5</p>
            <p className="mt-16 mr-0 uppercase ml-auto text-right tracking-wider text-sm text-gray-400">average<br /> satisfaction<br /> score</p>
          </div>

          {/* 2 */}
          <div className="p-12 border-r border-gray-700 flex flex-col">
            <p className="text-5xl font-bold">50+</p>
            <p className="mt-16 mr-0 uppercase ml-auto text-right tracking-wider text-sm text-gray-400">completed<br /> client<br /> project</p>
          </div>

          {/* 3 */}
          <div className="p-12 border-gray-700 flex flex-col">
            <p className="text-5xl font-bold">60%</p>
            <p className="mt-16 mr-0 uppercase ml-auto text-right tracking-wider text-sm text-gray-400">routine task<br /> automated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsecond;
