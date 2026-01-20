import React from "react";

const Fastpage = () => {
  return (
    <div className="bg-[var(--Gray-Primary)] pt-32 pb-20 text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-28">
          <p className="text-8xl font-bold mb-16">Who we are:<br /> keeping AI simple</p>
          <p className="text-3xl max-w-4xl">
            We believe the best systems stay out of the way. That’s why<br /> we keep
            humans in the loop, prioritize defaults over<br /> mandates, and report
            outcomes that leaders care about.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <p className="font-bold text-8xl">70+</p>
            <p className="uppercase tracking-wider">completed client projects</p>
          </div>

          <div className="flex items-center gap-4 ml-24">


            <div className="flex">
              <img
                src="https://i.pravatar.cc/40?img=1"
                className="-ml-0 h-10 w-10 rounded-full border-2 border-slate-950"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                className="-ml-3 h-10 w-10 rounded-full border-2 border-slate-950"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="-ml-3 h-10 w-10 rounded-full border-2 border-slate-950"
              />

            </div>
            <p className="max-w-[140px] text-md text-gray-800 uppercase tracking-wider">
              Loved by founders worldwide
            </p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Fastpage;
