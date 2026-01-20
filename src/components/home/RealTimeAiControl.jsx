import React, { useEffect, useRef, useState } from "react";
import HomeFrame from "../../assets/images/HomeFrame1.png";

const RealTimeAiControl = () => {
  return (
    <section className="bg-white text-black relative border-t border-black/10 overflow-hidden py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="px-8 md:px-12 lg:px-16 flex flex-col justify-center">
          <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-8">
            Real-time AI Control
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black uppercase mb-8">
            YOUR AI, ALWAYS IN <br /> YOUR POCKET
          </h2>

          <p className="font-mono text-sm md:text-base text-gray-600 max-w-md leading-relaxed mb-12">
            Run your business smarter — track performance, approve automations,
            and get instant insights right from your phone.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Stat Box 1 */}
            <div className="flex-1 min-w-[140px] bg-[#131313] text-white p-5 rounded px-6 flex flex-col justify-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">3x</p>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 leading-tight">
                faster <br /> approvals
              </p>
            </div>
            {/* Stat Box 2 */}
            <div className="flex-1 min-w-[140px] bg-[#131313] text-white p-5 rounded px-6 flex flex-col justify-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">99<span className="text-2xl">%</span></p>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 leading-tight">
                uptime
              </p>
            </div>
            {/* Stat Box 3 */}
            <div className="flex-1 min-w-[140px] bg-[#131313] text-white p-5 rounded px-6 flex flex-col justify-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">+28<span className="text-2xl">%</span></p>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 leading-tight">
                faster <br /> responses
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-16 lg:mt-0 flex justify-center lg:justify-end px-8 md:px-12 lg:px-16">
          {/* Gradient Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/20 via-yellow-200/30 to-orange-500/20 blur-3xl opacity-70 pointer-events-none rounded-full"></div>

          <img
            src={HomeFrame}
            alt="Real-time AI Control App Interface"
            className="relative z-10 w-full max-w-md lg:max-w-xl h-auto drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default RealTimeAiControl;