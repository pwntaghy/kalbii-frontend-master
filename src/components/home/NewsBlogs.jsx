import React from "react";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
    {
        date: "SEPTEMBER 18, 2025",
        title: "MOST CLIENTS RECOVER THEIR INVESTMENT WITHIN 1.5 MONTHS.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&grayscale",
    },
    {
        date: "SEPTEMBER 18, 2025",
        title: "MOST CLIENTS RECOVER THEIR INVESTMENT WITHIN 1.5 MONTHS.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&grayscale",
    },
    {
        date: "SEPTEMBER 18, 2025",
        title: "MOST CLIENTS RECOVER THEIR INVESTMENT WITHIN 1.5 MONTHS.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&grayscale",
    },
    {
        date: "SEPTEMBER 18, 2025",
        title: "MOST CLIENTS RECOVER THEIR INVESTMENT WITHIN 1.5 MONTHS.",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1887&auto=format&fit=crop&grayscale",
    },
];

const NewsBlogs = () => {
    return (
        <section className="bg-white text-black py-20 border-b border-black/10">
            <div className="max-w-[1290px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto border-l border-r border-black/10">

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-black/10 min-h-[300px]">

                    {/* Spacer / Left Col */}
                    <div className="hidden lg:block border-r border-black/10 bg-[#f4f4f4]"></div>

                    {/* Title Area */}
                    <div className="col-span-1 lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center border-r border-black/10 bg-[#f4f4f4]">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                            Who We Are
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            News & Blogs
                        </h2>
                    </div>

                    {/* CTA Area */}
                    <div className="col-span-1 flex items-center justify-center p-8 bg-[#f4f4f4]">
                        <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-gray-800 transition-all">
                            View All
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className={`flex flex-col border-b border-black/10 ${index !== 3 ? 'lg:border-r border-black/10' : ''
                                } ${index % 2 === 0 ? 'md:border-r border-black/10' : ''
                                }`}
                        >
                            {/* Date Header */}
                            <div className="p-4 border-b border-black/10 bg-[#e0e0e0]">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
                                    {post.date}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt="Blog Cover"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 bg-[#e0e0e0] flex-grow">
                                <h3 className="text-sm font-medium uppercase leading-relaxed tracking-wide text-gray-800">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NewsBlogs;
