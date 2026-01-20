import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import logo from "../../assets/icons/Kalbii-logo.svg";

const faqData = [
    {
        id: "01",
        question: "Clear, Actionable Strategy",
        answer: "Whether you’re just exploring possibilities or looking to scale existing tools, we build a clear plan that aligns with your goals."
    },
    {
        id: "02",
        question: "Proven AI Frameworks",
        answer: "We utilize industry-standard frameworks ensuring reliability, scalability, and security for all our AI implementations."
    },
    {
        id: "03",
        question: "Hands-On Implementation",
        answer: "Our team doesn't just advise; we build, deploy, and optimize your systems to ensure they work in your real-world environment."
    },
    {
        id: "04",
        question: "Transparent Costs",
        answer: "No hidden fees. We provide clear, upfront pricing models so you know exactly what your investment covers."
    },
    {
        id: "05",
        question: "Ongoing Support",
        answer: "We don't disappear after deployment. We offer continuous monitoring and support to keep your systems running smoothly."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-[#f9f9f9] text-black border-b border-black/10">
            <div className="max-w-[1290px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-4 border-l border-r border-black/10 min-h-[800px]">

                {/* Left Sidebar: Branding */}
                <div className="hidden lg:flex flex-col p-12 border-r border-black/10">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider mb-8 text-gray-500">
                        Help & Info
                    </span>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Kalbi Logo" className="h-[42px] w-auto" />
                    </div>        </div>

                {/* Right Content Area */}
                <div className="col-span-1 lg:col-span-3">

                    {/* Header */}
                    <div className="p-8 lg:p-16 border-b border-black/10">
                        <h2 className="text-6xl md:text-8xl font-black uppercase text-gray-400 tracking-tighter">
                            FAQ
                        </h2>
                    </div>

                    {/* Accordion Items */}
                    <div className="divide-y divide-black/10 border-b border-black/10">
                        {faqData.map((item, index) => (
                            <div key={item.id} className="bg-white">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-8 hover:bg-gray-50 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-8 md:gap-16">
                                        <span className="font-mono text-lg text-gray-300 font-bold">{item.id}</span>
                                        <span className="font-mono text-sm md:text-base font-bold uppercase tracking-wider">{item.question}</span>
                                    </div>
                                    {openIndex === index ? <Minus className="w-5 h-5 text-gray-400" /> : <Plus className="w-5 h-5 text-black" />}
                                </button>

                                {/* Answer Content */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-8 pt-0 pl-20 md:pl-28 pr-8 lg:pr-32">
                                        <p className="font-mono text-xs md:text-sm text-gray-500 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Split Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Left: Still Unsure? */}
                        <div className="p-12 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-between min-h-[300px]">
                            <div>
                                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">
                                    Help & Info
                                </span>
                                <h3 className="text-4xl font-black uppercase tracking-tight">
                                    Still Unsure?
                                </h3>
                            </div>
                            <button className="w-full group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-gray-800 transition-all mt-8">
                                Ask a Question
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Right: Personal Quote */}
                        <div className="p-12 flex flex-col justify-center items-end text-right">
                            <h4 className="text-xl md:text-2xl font-bold uppercase leading-tight mb-8">
                                My role is to make sure every client feels supported from day one.
                            </h4>

                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-xs uppercase tracking-wider">Pream Patel</span>
                                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                                        CEO of Kalbi Global
                                    </span>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80"
                                    alt="Pream Patel"
                                    className="w-12 h-12 rounded-full border border-gray-200 object-cover"
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section >
    );
};

export default FAQ;
