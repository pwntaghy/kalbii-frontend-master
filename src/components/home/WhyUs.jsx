import React from "react";
import { Plus } from "lucide-react";
import logo from "../../assets/icons/Kalbii-logo.svg";

// Crosshair Component
const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 text-black z-10 ${className}`}>
    <Plus strokeWidth={1} className="w-full h-full text-black/50" />
  </div>
);

const WhyUs = () => {
  return (
    <section className="bg-[#E5E5E5] text-black relative border-t border-black/10 overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10">

        {/* Central Vertical Border (Desktop) */}
        <div className="absolute inset-y-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/10 hidden lg:block"></div>

        {/* Intersection Crosshairs */}
        <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
        <Crosshair className="top-[-8px] left-1/2 -ml-2 hidden lg:block" />
        <Crosshair className="top-[-8px] right-[-8px] hidden lg:block" />
        <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block" />
        <Crosshair className="bottom-[-8px] left-1/2 -ml-2 hidden lg:block" />
        <Crosshair className="bottom-[-8px] right-[-8px] hidden lg:block" />

        {/* LEFT COLUMN */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between border-r border-black/10 lg:border-r-0 relative">
          <div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-8">
              Why us?
            </p>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-gray-400 mb-2">
              WHY <br /> COMPANIES
            </h2>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-black mb-12">
              CHOOSE <br /> KALBII
            </h2>

            <p className="font-mono text-sm md:text-base text-gray-600 max-w-sm leading-relaxed">
              We make AI adoption simple, <br />
              strategic, and measurable.
            </p>
          </div>

          <div className="mt-16 sm:mt-24 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-gray-500">Source:</span>
              <span className="font-mono text-sm font-semibold">Client Feedback & Project Data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">Apr 2025</span>
            </div>
          </div>
        </div>


        {/* RIGHT COLUMN */}
        <div className="flex flex-col relative">
          {/* Header Area */}
          <div className="p-8 md:p-12 lg:p-16 pb-8 border-b border-black/10 relative">
            <img src={logo} alt="Kalbi Logo" className="h-[52px] w-auto" />
            <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase">
              Our Advantages <span className="text-gray-400">Include:</span>
            </h3>
            <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block" />
          </div>

          {/* List Items */}
          <div className="flex-1">
            {[
              { id: "01", text: "Clear, Actionable Strategy" },
              { id: "02", text: "Proven AI Frameworks" },
              { id: "03", text: "Hands-On Implementation" },
              { id: "04", text: "Transparent Costs" }
            ].map((item, index) => (
              <div key={item.id} className={`group relative p-8 md:px-16 md:py-10 flex items-center gap-8 md:gap-12 transition-colors hover:bg-white/40 ${index !== 3 ? 'border-b border-black/10' : ''}`}>
                {/* Row Crosshairs */}
                <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
                <Crosshair className="top-[-8px] right-[-8px] hidden lg:block" />

                <div className="flex items-center justify-center w-12 h-8 rounded-full bg-white border border-gray-200 font-mono text-sm text-gray-500 shadow-sm group-hover:scale-110 transition-transform">
                  {item.id}
                </div>
                <p className="font-mono text-lg md:text-xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
