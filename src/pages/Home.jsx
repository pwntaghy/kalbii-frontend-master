import { ArrowDown } from "lucide-react";
import HowWeWork from "../components/home/HowWeWork";
import Herosection from "../components/home/Herosection";
import ServiceSection from "../components/home/ServiceSection";
import WhyUs from "../components/home/WhyUs";
import WhyDelayHurts from "../components/home/WhyDelayHurts";
import RealTimeAiControl from "../components/home/RealTimeAiControl";
import Result from "../components/home/Result";
import WhyWeBelieve from "../components/about/WhyWeBelieve";
import MoreProject from "../components/home/MoreProject";
import StartSmart from "../components/home/StartSmart";
import TeamSection from "../components/home/TeamSection";
import WhyUsDark from "../components/home/WhyUsDark";
import NewsBlogs from "../components/home/NewsBlogs";
import Newsletter from "../components/home/Newsletter";
import FAQ from "../components/home/FAQ";


const Home = () => {
  return (
    <div className="relative min-h-screen bg-[var(--Gray-Primary)] overflow-hidden">

      {/* Noise Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",

          opacity: 0.08,
        }}
      />

      {/* Page Content */}
      <div className="relative z-10">
        <Herosection />
        <HowWeWork />
        <ServiceSection />
        <WhyUs />
        <RealTimeAiControl />
        <WhyDelayHurts />
        <Result />
        <TeamSection />
        <WhyUsDark />
        <WhyWeBelieve />
        <NewsBlogs />
        <Newsletter />
        <FAQ />

      </div >

    </div >
  );
};

export default Home;
