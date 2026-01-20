import React from 'react';

export default function HiringProcess() {
  const steps = [
    {
      number: '01',
      title: 'SHORT APPLICATION.',
      description: 'A few questions about your experience and a link to something you’re proud of.'
    },
    {
      number: '02',
      title: 'INTRO CALL (30 MIN).',
      description: 'LocalRent Co. partnered with Effica to streamline order intake and customer support across 18 locations.'
    },
    {
      number: '03',
      title: 'REFERENCES & OFFER.',
      description: 'LocalRent Co. partnered with Effica to streamline order intake and customer support across 18 locations.'
    }
  ];

  return (
    <section className="bg-[var(--Gray-Primary)] text-black pb-20 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:divide-x divide-black/10">

        {/* Left Header Column */}
        <div className="lg:col-span-1 py-12 lg:pr-12">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500">
            WHAT HAPPENS NEXT?
          </p>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-3 py-12 lg:pl-12">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-24">
            THE HIRING <br /> PROCESS
          </h1>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10 border-t border-b border-black/10">
            {steps.map((step, index) => (
              <div key={index} className="py-12 md:px-8 first:pl-0 last:pr-0">
                <div className="inline-block px-3 py-1 bg-gray-200 rounded-full text-xs font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 min-h-[56px]">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Office Image */}
          <div className="mt-24 w-full h-[500px] bg-gray-200 overflow-hidden">
            <img
              src={"/images/banner/kalbi-main-office.png"}
              alt="Office Work Area"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}