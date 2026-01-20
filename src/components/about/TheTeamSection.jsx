import React from "react";

const TheTeamSection = () => {
  const teamMembers = [
    {
      label: "DIRECTOR",
      name: "PREAM PATEL",
      role: "15 YEARS IN TECH STRATEGY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    },
    {
      label: "AI CONSULTANT",
      name: "KEVIN D.",
      role: "WORKFLOW AUTOMATION EXPERT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    },
    {
      label: "IMPLEMENTATION SPECIALIST",
      name: "ALEX CARTER",
      role: "BACKEND & INTEGRATIONS",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
    },
    {
      label: "AI SYSTEMS ENGINEER",
      name: "CARTER",
      role: "YOUR FAVORITE CONTACT",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
    },
    {
      label: "DIRECTOR",
      name: "PREAM PATEL",
      role: "15 YEARS IN TECH STRATEGY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    },
    {
      label: "AI CONSULTANT",
      name: "KEVIN D.",
      role: "WORKFLOW AUTOMATION EXPERT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    },
    {
      label: "IMPLEMENTATION SPECIALIST",
      name: "ALEX CARTER",
      role: "BACKEND & INTEGRATIONS",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
    },
    {
      label: "AI SYSTEMS ENGINEER",
      name: "CARTER",
      role: "YOUR FAVORITE CONTACT",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
    },
  ];

  // split into 4 columns (2 per column)
  const columns = [
    teamMembers.slice(0, 2),
    teamMembers.slice(2, 4),
    teamMembers.slice(4, 6),
    teamMembers.slice(6, 8),
  ];

  return (
    <section className="bg-[#e8e4df] text-black py-24 px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-24 px-6 md:px-0">
          <p className="text-xs tracking-[0.35em] font-semibold uppercase mb-2">
            who we are
          </p>
          <h1 className="text-7xl font-bold">THE TEAM</h1>
        </div>

        {/* TEAM LAYOUT */}
        <div className="relative grid grid-cols-4">

          {/* Vertical lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0/4 top-0 h-full w-px bg-black/20" />
            <div className="absolute left-1/4 top-0 h-full w-px bg-black/20" />
            <div className="absolute left-2/4 top-0 h-full w-px bg-black/20" />
            <div className="absolute left-3/4 top-0 h-full w-px bg-black/20" />
            <div className="absolute left-4/4 top-0 h-full w-px bg-black/20" />
          </div>

          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`px-6 space-y-20 ${colIndex % 2 === 1 ? "mt-32" : ""
                }`}
            >
              {column.map((member, index) => (
                <div key={index} className="flex flex-col">
                  {/* Label */}
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 border-b border-black/10 pb-1 inline-block w-full">
                    {member.label}
                  </p>

                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-gray-300 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                    />
                    <div className="absolute left-0 w-full h-py bg-black/20" />
                  </div>

                  {/* Text */}
                  <h3 className="text-sm font-bold tracking-wide uppercase">
                    {member.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TheTeamSection;
