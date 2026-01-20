import React from "react";
import { ArrowUpRight } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="bg-[#111] text-white py-20 relative overflow-hidden">
            {/* Rainbow Gradient Background */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/patterns/rainbow-Ellipse.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover"
                }}
            />

            <div className="max-w-[1290px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-24">

                    {/* Left Column: Text */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
                            Newsletter
                        </h2>
                        <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed max-w-sm">
                            We send occasional updates about new case studies and useful tips.
                        </p>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-start md:items-end gap-6 lg:gap-8">
                        <div className="w-full flex-1 relative">
                            <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="EMAIL@ADDRESS.COM"
                                className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-xl md:text-2xl font-bold uppercase placeholder-white/20 text-white focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        <button className="whitespace-nowrap group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-gray-200 transition-all shadow-lg">
                            Get Weekly Tips
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;
