import { ArrowDown } from "lucide-react";
import React from "react";

const Herosection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-8 bg-[var(--Gray-Primary)]">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start relative z-10">
          <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.1] md:leading-[1.1] lg:leading-[114px] text-black tracking-tight">
            <span className="block">AI Services</span>
            <span className="block whitespace-nowrap">for your Business</span>
            <span className="block">Growth</span>
          </h1>

          <p className="mt-8 font-mono text-lg md:text-xl text-black/70 max-w-[700px] leading-relaxed">
            We build custom AI solutions that automate your workflows, save time, and help you scale faster. Practical, transparent, and results-driven.
          </p>

          {/* Buttons + Divider + Social Proof */}
          <div className="mt-16 flex flex-wrap items-center gap-4 md:gap-6">
            <button className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 duration-300">
              Get in Touch
            </button>

            <button className="bg-white border border-black/10 text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 duration-300">
              Our Services
            </button>

            {/* Vertical Divider - Hidden on small screens */}
            <div className="hidden md:block h-12 w-px bg-black/10 mx-2"></div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${10 + i}`}
                    alt="User"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-black/80 leading-tight">
                Loved by founders<br />worldwide
              </p>
            </div>

            <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 ml-auto md:ml-0">
              <ArrowDown size={18} />
            </button>
          </div>
        </div>

        {/* Right Content (Visual Element / Gradient Orb) */}
        <div className="hidden lg:block relative h-[600px] w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 via-orange-100 to-blue-200 blur-3xl opacity-60 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
