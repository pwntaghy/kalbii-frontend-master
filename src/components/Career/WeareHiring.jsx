import React from "react";
import { ArrowUpRight, User } from "lucide-react";

/**
 * WeareHiring Component
 * Displays current job openings at Kalbi.
 * Matches design with "Careers at Kalbi [5]" title and list of jobs.
 */
const WeareHiring = () => {
  const jobs = new Array(5).fill({
    title: "CUSTOM AI TOOLS & INTEGRATIONS",
    tags: ["# AITOOLS", "# TAILOREDTECH"],
  });

  return (
    <section className="bg-[var(--Gray-Primary)] text-black py-32 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Header Column */}
        <div className="lg:col-span-1">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">
            WE'RE HIRING
          </p>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-3">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-24">
            Careers at <br />
            Kalbi [5]
          </h1>

          {/* Job List */}
          <div className="border-t border-black/10">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-black/10 hover:bg-black/5 transition-colors px-4 -mx-4 rounded-xl"
              >
                {/* Job Info */}
                <div className="flex items-start gap-6 mb-6 md:mb-0">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white shrink-0">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button className="self-start md:self-center flex items-center gap-2 bg-[#dcdcdc] text-black px-6 py-3 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-all group-hover:scale-105">
                  Apply
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeareHiring;
