import React from "react";
import { Plus } from "lucide-react";
import KalbiLogo from "../../assets/icons/Kalbii-logo.svg";

// Crosshair Component (reused for consistency)
const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 text-black z-10 ${className}`}>
    <Plus strokeWidth={1} className="w-full h-full text-black/50" />
  </div>
);

const WhyDelayHurts = () => {
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
              Why delay hurts
            </p>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-black mb-2">
              THE LONGER <br /> YOU WAIT, <br /> THE MORE
            </h2>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-gray-400 mb-12">
              EXPENSIVE IT <br /> BECOMES <span className="text-gray-400/50">TO <br /> CATCH UP.</span>
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col relative">
          {/* Header Area */}
          <div className="p-8 md:p-12 lg:p-16 pb-8 border-b border-black/10 relative">
            <img src={KalbiLogo} alt="Kalbi Logo" className="h-8 md:h-10 mb-8" />
            <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block" />
          </div>

          {/* List Items */}
          <div className="flex-1">
            {[
              { id: "01", text: "Operational tasks stay manual", value: "+83%" },
              { id: "02", text: "Competitors move faster", value: "+50%" },
              { id: "03", text: "Missed automation opportunities", value: "+78%" },
              { id: "04", text: "Time wasted on repetitive work", value: "+33%" }
            ].map((item, index) => (
              <div key={item.id} className={`group relative p-6 md:px-12 md:py-8 grid grid-cols-[auto_1fr] items-center gap-6 md:gap-8 transition-colors hover:bg-white/40 ${index !== 3 ? 'border-b border-black/10' : ''}`}>
                {/* Row Crosshairs */}
                <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
                <Crosshair className="top-[-8px] right-[-8px] hidden lg:block" />

                <div className="font-mono text-xl md:text-2xl text-gray-300 font-bold group-hover:text-black transition-colors">
                  {item.id}
                </div>

                {/* Pill Container */}
                <div className="flex items-center justify-between bg-white/50 border border-white/60 rounded-full px-6 py-4 w-full shadow-sm group-hover:bg-white group-hover:shadow-md transition-all">
                  <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-tight text-black">
                    {item.text}
                  </span>
                  <span className="ml-4 font-sans text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDelayHurts;
