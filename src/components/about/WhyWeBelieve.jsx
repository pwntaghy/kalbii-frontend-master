import React from 'react';
import { Quote } from 'lucide-react';

const WhyWeBelieve = () => {
  return (
    <section className="relative bg-white text-black py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 relative min-h-[800px] border-t border-b border-black/10">

        {/* Left Column: Image */}
        <div className="relative h-full border-r border-black/10 p-8 lg:p-16 flex flex-col justify-center items-center">
          <div className="relative w-full h-full max-h-[800px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2600&auto=format&fit=crop"
              alt="Robot and Human Handshake"
              className="w-full h-full object-cover"
            />

            {/* Name Tag Overlay */}
            <div className="absolute bottom-8 left-8 text-black bg-white/10 backdrop-blur-md p-4 border-l-2 border-black">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-1">Pream Patel</h3>
              <p className="font-mono text-[10px] text-gray-800 uppercase tracking-widest">Founder & Director Kalbi</p>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="relative p-8 lg:p-24 flex flex-col justify-center bg-white">

          {/* Header Tag */}
          <div className="mb-12">
            <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">
              What We Believe
            </span>
          </div>

          {/* Background Quotes Icon */}
          <Quote className="absolute top-16 right-16 w-32 h-32 text-gray-100 rotate-180 pointer-events-none" />

          {/* Main Statement */}
          <h2 className="relative font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-12">
            We didn’t build this company to chase trends.
            <span className="text-gray-400"> We built it to solve real problems — clearly, quietly, and without wasting your time. AI can be useful, but only if it’s done right.</span>
          </h2>

          {/* Secondary Text */}
          <div className="border-l-2 border-black/10 pl-8">
            <p className="font-mono text-sm md:text-base text-gray-500 leading-relaxed uppercase tracking-wider">
              We’re here to make AI work in the real world — without noise, hype, or distractions.
            </p>
          </div>

          {/* Gradient Glow */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
};

export default WhyWeBelieve;
