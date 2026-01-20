import { ArrowUpRight } from "lucide-react";
import React from "react";
import bgImage from '../../assets/images/newsletterBgImage.svg'

const NewsLetter = () => {
  return (
    <section className="text-white bg-black"
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex px-[75px]">
        <div className="flex items-center justify-between w-full py-12">
          
          <div className="flex flex-col">
            <p className="uppercase text-5xl font-extrabold">Newsletter</p>
            <p className="font-mono mt-4 text-gray-300">
              We send occasional updates about new
              <br />
              case studies and useful tips.
            </p>
          </div>

          <div>
            <p className="uppercase font-extrabold">Your Email</p>
            <p className="border-b-2 text-gray-600 mt-2">EMAIL@ADDRESS.COM</p>
          </div>

          <div className="p-2 m-2 bg-white rounded-4xl flex cursor-pointer">
            <button className="uppercase text-black text-sm font-semibold cursor-pointer">
              Get weekly tips
            </button>
            <ArrowUpRight className="text-black ml-2"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
