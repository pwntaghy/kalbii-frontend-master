import React from "react";

const StartSmart = () => {
    return (
        <div className="w-full bg-[var(--Gray-Primary)]">
            <div className=" xl:mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px] shadow-2xl overflow-hidden">

                {/* Left Side - Image */}
                <div className="relative h-[400px] lg:h-auto w-full">
                    <img
                        src="/images/banner/kalbi-global-front.png"
                        alt="Kalbi Global Office"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay if needed to match tone, but image looks clean in design */}
                </div>

                {/* Right Side - Content */}
                <div className="bg-[#0f0f0f] p-12 lg:p-16 flex flex-col justify-center relative text-white">
                    {/* Texture/Noise could go here if needed */}

                    <div className="space-y-6 lg:max-w-lg">
                        <span className="Ibm-plex-mono inline-block text-lg font-semibold uppercase tracking-widest text-gray-400">
                            Easy First Step
                        </span>

                        <h2 className="text-[79px] font-extrabold md: font-black leading-[1.1] tracking-tight">
                            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent block">
                                Start Smart,
                            </span>
                            <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent block">
                                Start Small
                            </span>
                        </h2>

                        <p className="text-gray-400 font-normal text-base md:text-base leading-relaxed max-w-md mt-4">
                            Whether you’re just exploring possibilities or looking to scale existing tools, we build a clear plan that aligns with your goals.
                        </p>

                        {/* Profile Section */}
                        <div className="flex items-center gap-4 mt-12 pt-8">
                            {/* Profile Image Placeholder */}
                            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                                {/* Try to use a generic avatar or initials if no image */}
                                <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-gray-500 text-xs">
                                    PP
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm tracking-wide uppercase">
                                    Pream Patel
                                </span>
                                <span className="text-gray-500 text-xs font-mono tracking-wider uppercase">
                                    CEO of Kalbii Global
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartSmart;
