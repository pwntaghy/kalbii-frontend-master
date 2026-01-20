import React from "react";
import logo from "../../assets/icons/Kalbii-logo.svg";

const WhyUsDark = () => {
    return (
        <div className="w-full bg-black text-white border-t border-white/10">
            <div className="max-w-[1290px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto flex flex-col lg:flex-row min-h-[600px] border-l border-r border-white/10">

                {/* Left Column: Brand & Team Intro */}
                <div className="w-full lg:w-1/4 border-r border-white/10 flex flex-col justify-between p-8 lg:p-12 relative">
                    {/* Header */}
                    <div>
                        <h3 className="font-bold text-xl uppercase tracking-wider mb-8">The Team</h3>
                        <div className="flex items-center gap-2 mb-4">
                            {/* Logo Placeholder */}
                            <img src={logo} alt="Kalbi Logo" className="h-[52px] w-auto" />
                        </div>
                    </div>

                    {/* Bottom Social Proof */}
                    <div className="mt-auto">
                        <div className="flex items-center gap-[-10px] mb-2">
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="Avatar" />
                                <img className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" alt="Avatar" />
                                <img className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=64&q=80" alt="Avatar" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] font-bold z-10">8+</div>
                        </div>
                        <p className="text-xs text-gray-400 font-mono">Loved by founders<br />worldwide</p>
                    </div>
                </div>

                {/* Right Area: Grid of Metrics */}
                <div className="w-full lg:w-3/4 flex flex-col">

                    {/* Top Row: Title */}
                    <div className="h-1/2 flex items-center justify-center border-b border-white/10 p-12 relative">
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-gray-500">
                            Why Us?
                        </div>
                        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white/90">
                            Why Us
                        </h2>
                    </div>

                    {/* Bottom Row: Metrics Grid */}
                    <div className="h-1/2 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

                        {/* Metric 1 */}
                        <div className="p-8 lg:p-10 flex flex-col justify-between">
                            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                                ROI Timeline
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-300 mb-8 leading-relaxed">
                                MOST CLIENTS RECOVER THEIR INVESTMENT WITHIN 1.5 MONTHS.
                            </p>
                            <div className="mt-auto">
                                <span className="text-5xl font-bold tracking-tighter">50</span>
                                <div className="inline-block ml-4 text-[9px] font-mono text-gray-500 text-right uppercase leading-tight">
                                    Avg. ROI in<br />45 Days
                                </div>
                            </div>
                        </div>

                        {/* Metric 2 */}
                        <div className="p-8 lg:p-10 flex flex-col justify-between">
                            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                                Time Saved
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-300 mb-8 leading-relaxed">
                                ON AVERAGE, CLIENTS REDUCE MANUAL WORK BY 35 HOURS/MONTH.
                            </p>
                            <div className="mt-auto">
                                <span className="text-5xl font-bold tracking-tighter">25+</span>
                                <div className="inline-block ml-4 text-[9px] font-mono text-gray-500 text-right uppercase leading-tight">
                                    Hours Saved<br />Every Month
                                </div>
                            </div>
                        </div>

                        {/* Metric 3 */}
                        <div className="p-8 lg:p-10 flex flex-col justify-between">
                            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                                Workflow Impact
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-300 mb-8 leading-relaxed">
                                WE HELP BUSINESSES AUTOMATE UP TO 60% OF REPETITIVE WORKFLOWS.
                            </p>
                            <div className="mt-auto">
                                <span className="text-5xl font-bold tracking-tighter">50</span>
                                <div className="inline-block ml-4 text-[9px] font-mono text-gray-500 text-right uppercase leading-tight">
                                    % of Routine<br />Tasks Automated
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhyUsDark;
