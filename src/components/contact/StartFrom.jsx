import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * StartForm Component
 * Contact form for starting AI projects with Kalbi
 * Matches Figma design with centered layout and modern styling
 */
const StartForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    challenge: "",
    budget: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[var(--Gray-Primary)] text-black py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
            START WITH A SIMPLE STEP
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]">
            LET'S START YOUR <br />
            AI PROJECT
          </h1>
        </div>

        {/* Form Container */}
        <div className="bg-[#d9d9d9] rounded-[40px] p-8 md:p-16 lg:p-24">
          <h2 className="text-2xl font-bold mb-12">Hi, Kalbi team!</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  MY NAME IS
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="YOUR NAME"
                  className="w-full px-6 py-4 rounded-xl bg-white/60 border-none text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  FROM
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="COMPANY NAME / OPTIONAL"
                  className="w-full px-6 py-4 rounded-xl bg-white/60 border-none text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Challenge Description */}
            <div>
              <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-3">
                I WANT TO IMPROVE:
              </label>
              <input
                type="text"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                placeholder="DESCRIBE YOUR WORKFLOW CHALLENGE"
                className="w-full px-6 py-4 rounded-xl bg-white/60 border-none text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                required
              />
            </div>

            {/* Row 3: Budget and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  BUDGET:
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="ENTER BUDGET"
                  className="w-full px-6 py-4 rounded-xl bg-white/60 border-none text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  CONTACT ME AT:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="YOUR EMAIL"
                  className="w-full px-6 py-4 rounded-xl bg-white/60 border-none text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button and Legal */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-8">
              <button
                type="submit"
                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full uppercase text-xs font-bold tracking-wider hover:bg-gray-800 transition-all"
              >
                Send Request
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <p className="font-mono text-[10px] text-gray-600 uppercase tracking-wide leading-relaxed">
                By submitting, you agree to our <br />
                <span className="text-black font-bold">Terms</span> and{" "}
                <span className="text-black font-bold">Privacy Policy</span>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StartForm;
