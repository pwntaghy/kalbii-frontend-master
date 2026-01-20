import React, { useEffect, useRef, useState } from "react";
import homeworkprocess from "../../assets/images/home-work.png";
import { ArrowUpRight, Plus } from "lucide-react";

// Crosshair Component for Grid Intersections
const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 text-white z-10 ${className}`}>
    <Plus strokeWidth={1} className="w-full h-full text-white/50" />
  </div>
);

const textLines = [
  "WE'RE A HANDS-ON TEAM OF AI CONSULTANTS FOCUSED ON HELPING SMALL",
  "AND MID-SIZE BUSINESSES USE AUTOMATION WHERE IT MATTERS MOST.",
  "WE CUT THROUGH THE NOISE AND IMPLEMENT IT WITH NO DISRUPTION.",
];

const words = textLines.join(" ").split(" ");

const HowWeWork = () => {
  const containerRef = useRef(null);
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when element top enters from bottom, 1 when element bottom leaves top
      // We want the effect to happen while the element is in the main viewing area.
      // Let's say we start revealing when the element is 10% into the viewport
      // and finish when it's near the top or fully visible.

      const startReveal = windowHeight * 0.8; // Start when element is 80% down the screen (entering)
      const endReveal = windowHeight * 0.2; // Finish when element is 20% from top

      // Distance of element top from viewport top
      const elementTop = rect.top;

      // Total travel distance for the effect
      const totalDistance = startReveal - endReveal;

      // Current progress through that distance
      // If elementTop is at startReveal, progress is 0.
      // If elementTop is at endReveal, progress is 1.
      let progress = (startReveal - elementTop) / totalDistance;

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      const totalWords = words.length;
      const wordsToShow = Math.floor(progress * totalWords);

      setVisibleWords(wordsToShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-grid-pattern text-white relative border-t border-white/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 relative">
        {/* Central Vertical Border */}
        <div className="absolute inset-y-0 left-1/2 -ml-[0.5px] w-[1px] bg-white/10 hidden lg:block"></div>

        {/* Intersection Crosshairs */}
        <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
        <Crosshair className="top-[-8px] left-1/2 -ml-2 hidden lg:block" />
        <Crosshair className="top-[-8px] right-[-8px] hidden lg:block" />
        <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block" />
        <Crosshair className="bottom-[-8px] left-1/2 -ml-2 hidden lg:block" />
        <Crosshair className="bottom-[-8px] right-[-8px] hidden lg:block" />

        {/* Left Column */}
        <div className="relative border-r border-white/10 lg:border-r-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          {/* Crosshair for internal mobile borders if needed, skipping for cleaner desktop focus */}

          <div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-6">
              How we work
            </p>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold leading-tight text-white mb-12">
              HOW WE HELP YOU USE AI <br className="hidden md:block" /> WITHOUT THE HYPE
            </h2>

            {/* Image Section within Grid */}
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-white/5 p-1">
              <img
                src={homeworkprocess}
                alt="Work process"
                className="w-full h-auto rounded-md filter brightness-90"
              />
            </div>
          </div>



          {/* Decorative Crosshair for internal grid alignment */}
          <Crosshair className="top-[calc(100%-1px)] right-0 hidden lg:block" />
        </div>

        {/* Right Column */}
        <div ref={containerRef} className="relative p-8 md:p-12 lg:p-16 flex flex-col">
          <div className="min-h-[300px] mb-12">
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed uppercase tracking-tight text-gray-700">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-3 transition-colors duration-300 ${index < visibleWords ? "text-white" : "text-white/20"
                    }`}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-auto pt-12 border-t border-white/10">
            <p className="text-gray-400 mb-6 max-w-sm">
              We verify your infrastructure, analyze your data, and deploy custom AI solutions that scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=12"
                  alt="Founder"
                  className="h-12 w-12 rounded-full border border-white/20"
                />
                <div>
                  <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Loved by founders</p>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                    Client success manager
                  </p>
                </div>
              </div>

              <button className="group w-fit flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-gray-200">
                <span className="tracking-wide">ABOUT US</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
