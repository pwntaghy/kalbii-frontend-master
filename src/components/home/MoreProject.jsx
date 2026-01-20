import React, { useState } from "react";
import { Plus } from "lucide-react";
import projectImage from "../../assets/images/service-image1.png";

const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 text-black z-10 ${className}`}>
    <Plus strokeWidth={1} className="w-full h-full text-black/50" />
  </div>
);

const projects = [
  {
    name: "FINEDDGE ADVISORS",
    date: "2025",
    description: "Whether you’re just exploring possibilities or looking to scale existing tools, we build a clear plan that aligns with your goals.",
    image: projectImage,
  },
  {
    name: "BRIGHTPATH INTERNATIONAL LOGISTICS",
    date: "2025",
    image: projectImage,
  },
  {
    name: "NORSE STAR",
    date: "2025",
    image: projectImage,
  },
  {
    name: "EDUCORE LEARNING",
    date: "2025",
    image: projectImage,
  },
  {
    name: "CRAFTWORKS MANUFACTURING",
    date: "2025",
    image: projectImage,
  },
  {
    name: "HEALTHFIRST CLINICS",
    date: "2025",
    image: projectImage,
  },
];

const MoreProject = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="bg-[#f0f0f0] text-black relative border-t border-black/10 overflow-hidden py-20 min-h-[700px]">
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0  opacity-[0.6] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1290px] h-[712px] bg-[#fff] xl:max-w-[1240px] 2xl:max-w-[1536px]  mx-auto relative z-10 p-16 sm:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: List */}
          <div className="flex flex-col justify-start">
            <p className="font-mono text-lg font-semibold uppercase tracking-wider text-black mb-16">
              More Projects
            </p>

            <div className="space-y-8">
              {projects.map((project, index) => {
                const isActive = hoveredIndex === index;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer flex flex-col items-start"
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <div className="flex items-baseline gap-3">
                      <h3
                        className={` text-2xl font-extrabold md:text-2xl font-black uppercase transition-colors duration-300 ${isActive ? "text-black" : "text-black/30"
                          }`}
                      >
                        {project.name}
                      </h3>
                      <span className="font-mono text-[10px] text-gray-500 relative -top-1">
                        {project.date}
                      </span>
                    </div>
                    {isActive && project.description && (
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-700 font-mono tracking-tight">
                        {project.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Image Preview */}
          <div className="relative mt-8 lg:mt-0 lg:sticky lg:top-20">
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
              {/* Preload images to avoid flicker, or just use one for now if identical */}
              <img
                src={projects[hoveredIndex].image}
                alt="Project Preview"
                className="w-full h-full object-cover grayscale-[0.2]"
              />

              {/* Optional: subtle glare/lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MoreProject;