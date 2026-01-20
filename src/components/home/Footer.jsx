import React from "react";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "../../assets/icons/Kalbii-logo.svg";

const Footer = () => {
    return (
        <footer className="bg-[#e8e4df] text-black relative border-t border-black/10 overflow-hidden font-sans">

            {/* Main Grid */}
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-4 min-h-[750px]">

                {/* Column 1: Brand & Logo */}
                <div className="flex flex-col justify-between p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 relative">
                    <div className="space-y-6 pt-4">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black block">
                            Ready to Start?
                        </span>
                        <img src={logo} alt="Kalbi Logo" className="h-[52px] w-auto" />
                    </div>

                    <div className="pb-4">
                        <img src={logo} alt="Kalbi Logo" className="h-[42px] w-auto" />
                    </div>
                </div>

                {/* Column 2: GET IN TOUCH & Name & Contact Info */}
                <div className="flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 relative">
                    <div className="pt-4">
                        <h2 className="text-[64px] leading-[0.85] font-black uppercase tracking-tighter mb-8">
                            Get In <br /> Touch
                        </h2>
                        <p className="font-mono text-xs font-medium text-gray-500 max-w-[280px] leading-relaxed tracking-wide">
                            <span className="underline decoration-blue-500 decoration-2 underline-offset-4">Whether you have questions or just want</span> <br />
                            <span className="underline decoration-blue-500 decoration-2 underline-offset-4">to explore options, we’re here.</span>
                        </p>
                    </div>

                    <div className="mt-auto">
                        {/* Name Input */}
                        <div className="mb-16">
                            <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-gray-500">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                className="w-full bg-transparent border-b border-black/20 pb-4 text-2xl font-bold uppercase placeholder-black/20 focus:outline-none focus:border-black transition-colors"
                            />
                        </div>

                        {/* Contact Details moved here */}
                        <div className="space-y-1 pb-4">
                            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
                                T : +91 70693 70032
                            </div>
                            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
                                KALBI.GLOBAL@GMAIL.COM
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3: Email Input & Social Icons */}
                <div className="flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 relative">
                    {/* Background Blur Effect */}
                    <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/3 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-orange-300/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="mt-auto">
                        {/* Email Input - Aligned with Name Input */}
                        <div className="mb-16">
                            <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-gray-500">
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="EMAIL@ADDRESS.COM"
                                className="w-full bg-transparent border-b border-black/20 pb-4 text-2xl font-bold uppercase placeholder-black/20 focus:outline-none focus:border-black transition-colors"
                            />
                        </div>

                        {/* Social Icons moved here - Aligned with Contact Info */}
                        <div className="flex gap-4 pb-3">
                            <Linkedin className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" strokeWidth={1.5} />
                            <Twitter className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" strokeWidth={1.5} />
                            <Instagram className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" strokeWidth={1.5} />
                            <Facebook className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                {/* Column 4: Navigation & CTA */}
                <div className="flex flex-col justify-between p-8 md:p-12 bg-[#e8e4df] relative">
                    <nav className="flex flex-col items-end gap-3 text-right pt-4">
                        {['Home', 'About', 'Portfolio', 'Blogs', 'Career', 'Login', 'Register'].map((link) => (
                            <a key={link} href="#" className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-12 flex flex-col items-end gap-8 pb-4">
                        <button className="flex items-center justify-between pl-6 pr-4 py-3 bg-[#111] text-white rounded-full w-[160px] group hover:bg-black transition-colors">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Let's Talk</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-gray-300" />
                        </button>

                        <div className="text-right max-w-[220px]">
                            <p className="font-mono text-[10px] text-gray-500 leading-relaxed tracking-wide">
                                By submitting, you agree <br />
                                to our <a href="#" className="underline decoration-gray-400 underline-offset-2 hover:text-black">Terms</a> and <a href="#" className="underline decoration-gray-400 underline-offset-2 hover:text-black">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Gradient Strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 w-full bg-gradient-to-r from-[#ff4d00] via-[#ffffff] to-[#009933]"></div>
        </footer>
    );
};

export default Footer;
