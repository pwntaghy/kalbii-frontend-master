import React from "react";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
    {
        name: "PREAM PATEL",
        role: "DIRECTOR",
        desc: "15 YEARS IN TECH STRATEGY",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&grayscale", // Placeholder
    },
    {
        name: "KEVIN D.",
        role: "AI CONSULTANT",
        desc: "WORKFLOW AUTOMATION EXPERT",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&grayscale", // Placeholder
    },
    {
        name: "ALEX CARTER",
        role: "IMPLEMENTATION SPECIALIST",
        desc: "BACKEND & INTEGRATIONS",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&grayscale", // Placeholder
    },
    {
        name: "CARTER",
        role: "AI SYSTEMS ENGINEER",
        desc: "YOUR FAVORITE CONTACT",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&grayscale", // Placeholder
    },
];

const TeamSection = () => {
    return (
        <div className="w-full bg-[#f4f4f4] text-black">
            <div className="max-w-[1290px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto border-l border-r border-black/10">

                {/* Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-black/10">
                    <div className="hidden lg:block border-r border-black/10 min-h-[200px]"></div>
                    <div className="col-span-1 lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center border-r border-black/10">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider mb-2">
                            Who We Are
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            The Team
                        </h2>
                    </div>
                    <div className="col-span-1 flex items-center justify-center p-8 lg:p-0">
                        <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-gray-800 transition-all">
                            View The Full Team
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col border-b border-black/10 ${index !== 3 ? 'lg:border-r border-black/10' : ''
                                } ${index % 2 === 0 ? 'md:border-r border-black/10' : ''
                                }`}
                        >
                            {/* Role Label */}
                            <div className="p-4 border-b border-black/5">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                                    {member.role}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                />
                            </div>

                            {/* Name & Desc */}
                            <div className="p-6 bg-[#f4f4f4] flex-grow flex flex-col justify-end min-h-[120px]">
                                <h3 className="text-2xl font-bold uppercase mb-1">
                                    {member.name}
                                </h3>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                                    {member.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[400px] border-b border-black/10 relative overflow-hidden">
                    {/* Gradient Blur Background Effect */}
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none mix-blend-multiply"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none mix-blend-multiply"></div>

                    <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center border-r border-black/10 relative z-10">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight max-w-4xl">
                            No Salespeople. No Bots. You’ll Speak Directly With Us.
                        </h2>
                    </div>

                    <div className="lg:col-span-1 grid grid-rows-2">
                        <div className="border-b border-black/10 lg:border-none"></div> {/* Empty spacer or could be content */}
                        <div className="p-8 flex flex-col justify-between items-start lg:items-end">

                            <div className="w-full h-full flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
                                <button className="w-full lg:w-auto group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-gray-800 transition-all">
                                    View The Full Team
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>

                            <div className="w-full">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 text-center lg:text-left">
                                    Dedicated to your growth<br />
                                    <span className="font-bold text-black">Worldwide</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamSection;
