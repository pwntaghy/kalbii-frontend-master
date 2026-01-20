import React from "react";

/**
 * LetKeepItSimple Component
 * Displays messaging about keeping communication simple with office image
 */
const LetsKeepItSimple = () => {
    return (
        <section className="bg-white text-black py-20 border-b border-black/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 mb-16">
                    LET'S KEEP IT SIMPLE
                </p>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Left Column: Main Message */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-400 leading-tight mb-8">
                            You don't need to prepare slides or technical notes — just share
                            what's on your mind. Whether it's a quick question or a bigger
                            project idea, we'll get back to you with a clear next step.
                        </h2>
                    </div>

                    {/* Right Column: Description */}
                    <div className="flex items-center">
                        <p className="text-lg md:text-xl text-black leading-relaxed">
                            We believe the best systems stay out of the way. That's why we
                            keep humans in the loop, prioritize defaults over mandates, and
                            report outcomes that leaders care about.
                        </p>
                    </div>
                </div>

                {/* Office Image */}
                <div className="w-full h-[400px] md:h-[600px] bg-gray-200 overflow-hidden rounded-2xl">
                    <img
                        src="/images/banner/kalbi-work-area.png"
                        alt="Kalbi Office Workspace"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default LetsKeepItSimple;
