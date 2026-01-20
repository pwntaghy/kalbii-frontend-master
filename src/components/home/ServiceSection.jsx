import React from "react";
import service1 from "../../assets/images/service-image1.png";
import service2 from "../../assets/images/service-image2.png";
import service3 from "../../assets/images/service-image3.png";
import service4 from "../../assets/images/service-image4.png";
import { ArrowUpRight, Plus } from "lucide-react";

// Shared Crosshair Component
const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 text-white z-10 ${className}`}>
    <Plus strokeWidth={1} className="w-full h-full text-white/50" />
  </div>
);

const services = [
  {
    id: "01",
    title: "AI CONSULTING & STRATEGY",
    description:
      "Whether you're just exploring possibilities or looking to scale existing tools, we build a clear plan that aligns with your goals.",
    tags: ["#AICONSULTING", "#BUSINESSAUTOMATION"],
    image: service1,
  },
  {
    id: "02",
    title: "WORKFLOW AUTOMATION",
    description:
      "We design and deploy automation systems that take repetitive tasks off your plate — from handling emails and reports to streamlining admin and customer service processes.",
    tags: ["#SAVETIME", "#WORKSMARTER", "#NOMOREMANUALWORK"],
    image: service2,
  },
  {
    id: "03",
    title: "CUSTOM AI TOOLS & INTEGRATIONS",
    description:
      "Need something more specific? We develop lightweight AI solutions tailored to your operations — from data analysis tools to smart assistants.",
    tags: ["#AITOOLS", "#TAILOREDTECH"],
    image: service3,
  },
  {
    id: "04",
    title: "TEAM ONBOARDING & TRAINING",
    description:
      "AI only works when your team knows how to use it. We offer simple onboarding, documentation, and ongoing support to make sure everyone feels confident — even without a technical background.",
    tags: ["#AITRAINING"],
    image: service4,
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-noise-pattern text-white relative border-t border-white/10">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Central Vertical Border for the whole section */}
        <div className="absolute inset-y-0 left-1/2 -ml-[0.5px] w-[1px] bg-white/10 hidden lg:block"></div>

        {/* HEADER SECTION */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* Crosshairs for Header */}
          <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
          <Crosshair className="top-[-8px] left-1/2 -ml-2 hidden lg:block" />
          <Crosshair className="top-[-8px] right-[-8px] hidden lg:block" />

          {/* Left Header */}
          <div className="p-8 md:p-12 lg:p-16 border-r border-white/10 lg:border-r-0">
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-6">
              Services
            </p>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold leading-tight text-white uppercase">
              TURNING REPETITIVE <br /> WORK INTO TIME-SAVING SYSTEMS
            </h2>
          </div>

          {/* Right Header */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <p className="text-gray-400 max-w-md leading-relaxed">
              We provide practical AI consulting and automation services for
              companies that want results — not just theory. Our work is
              tailored, transparent, and focused on the areas of your business
              where AI makes a real impact.
            </p>
            <button className="group mt-8 w-fit flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-gray-200">
              <span className="tracking-wide uppercase">Our Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <div key={service.id} className="relative grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 last:border-b-0 group">
              {/* Crosshairs for each row - aligned to grid */}
              <Crosshair className="top-[-8px] left-[-8px] hidden lg:block" />
              <Crosshair className="top-[-8px] left-1/2 -ml-2 hidden lg:block" />
              <Crosshair className="top-[-8px] right-[-8px] hidden lg:block" />
              {/* Bottom crosshairs for last item */}
              {index === services.length - 1 && (
                <>
                  <Crosshair className="bottom-[-8px] left-[-8px] hidden lg:block" />
                  <Crosshair className="bottom-[-8px] left-1/2 -ml-2 hidden lg:block" />
                  <Crosshair className="bottom-[-8px] right-[-8px] hidden lg:block" />
                </>
              )}

              {/* Left Side: Content */}
              <div className="p-8 md:p-12 lg:p-16 border-r border-white/10 lg:border-r-0 flex flex-col justify-between relative group-hover:bg-white/5 transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  <span className="font-mono text-4xl text-white/30 font-light">{service.id}</span>
                  <div>
                    <h3 className="font-sans text-xl md:text-2xl font-bold uppercase mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 flex flex-wrap gap-x-6 gap-y-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center relative group-hover:bg-white/5 transition-colors duration-500">
                <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-lg filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
