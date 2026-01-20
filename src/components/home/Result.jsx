import React from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { MoveUpRight } from "lucide-react";

// Crosshair Component
const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 z-10 ${className}`}>
    <Plus strokeWidth={1} className="w-full h-full text-gray-500/50" />
  </div>
);

const Result = () => {
  return (
    <section className="relative border-t border-black/10 lg:border-none">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT COLUMN - White Background */}
        <div className="bg-white text-black relative flex flex-col border-r border-black/10">
          {/* Top Content */}
          <div className="p-8 md:p-12 lg:p-16 pb-12">
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-6">
              Results
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase mb-8">
              Case Study
            </h2>
            <p className="font-mono text-sm text-gray-600 max-w-sm leading-relaxed">
              LocalRent Co. partnered with Effica to streamline order intake and customer support across 18 locations.
            </p>
          </div>

          {/* Meta Data Grid */}
          <div className="mt-auto">
            <div className="border-t border-black/10 grid grid-cols-[100px_1fr] items-center text-sm font-mono p-4 px-8 md:px-16">
              <span className="text-gray-500">Date:</span>
              <span className="font-semibold text-right md:text-left">Mar 2025</span>
            </div>
            <div className="border-t border-black/10 grid grid-cols-[100px_1fr] items-center text-sm font-mono p-4 px-8 md:px-16">
              <span className="text-gray-500">Industry:</span>
              <span className="font-semibold text-right md:text-left">Retail & E-commerce</span>
            </div>
            <div className="border-t border-black/10 grid grid-cols-[100px_1fr] items-baseline text-sm font-mono p-4 px-8 md:px-16">
              <span className="text-gray-500">Challenge:</span>
              <span className="font-semibold text-right md:text-left">Manual order management & customer support delays</span>
            </div>

            {/* Bottom Action Area */}
            <div className="border-t border-black/10 p-8 md:p-12 flex justify-end md:justify-start lg:justify-end items-center relative">
              {/* Interior Crosshair */}
              <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />

              <div className="flex-1"></div> {/* Spacer if needed */}

              <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:bg-gray-800">
                Read the full story
                <MoveUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
          {/* Decorative Crosshairs for Left Col */}
          <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
          <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block" />
        </div>


        {/* RIGHT COLUMN - Dark Background */}
        <div className="bg-[#131313] text-white relative flex flex-col p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Gradient Background Effect */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-orange-500/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none opacity-60 rounded-full translate-x-1/3 -translate-y-1/4"></div>

          <div className="relative z-10 flex-1 flex flex-col justify-center mb-16">
            <blockquote className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-gray-400">
              “ They didn’t overwhelm us with jargon or endless options. Just a clean plan, executed quickly.
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                We saw measurable results in the first month.
              </span>
            </blockquote>
          </div>

          {/* Bottom Stats & Profile */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Stats Cards */}
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-black to-gray-900 border border-white/10 p-4 rounded-xl flex-1 min-w-[140px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-3xl font-bold text-white mb-1">50<span className="text-xl">+</span></h3>
                <p className="text-[10px] text-gray-400 uppercase font-bold leading-tight">Hours Saved <br /> Monthly</p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-900 border border-white/10 p-4 rounded-xl flex-1 min-w-[140px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-3xl font-bold text-white mb-1">+99<span className="text-xl">%</span></h3>
                <p className="text-[10px] text-gray-400 uppercase font-bold leading-tight">Increase in <br /> Retention</p>
              </div>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-4 md:justify-end border-t border-white/10 pt-8 md:border-t-0 md:pt-0">
              <img
                src="https://i.pravatar.cc/150?u=pream"
                alt="Pream Patel"
                className="w-10 h-10 rounded-full border border-white/20"
              />
              <div>
                <p className="font-mono text-xs font-bold text-white uppercase">Pream Patel</p>
                <p className="font-mono text-[10px] text-gray-500 uppercase">SEO of Kalbii Global</p>
              </div>
            </div>
          </div>

          {/* Corner Crosshairs */}
          <Crosshair className="top-[-8px] right-[-8px] hidden lg:block !text-white/20" />
          <Crosshair className="bottom-[-8px] right-[-8px] hidden lg:block !text-white/20" />
          <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block !text-white/20" />
        </div>

      </div>
    </section>
  );
};

export default Result;