import React from "react";
import hero from "../assets/Illustration.png";
const BlogHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-13 md:mt-12 md:mx-auto mx-3 md:items-center md:bg-[#F3F3F3] md:rounded-[70px] md:p-12 md:max-w-[1540px]">
        <div className="flex flex-col justify-baseline">
          <button className="bg-[#e7e7e7] rounded-md mb-5 mt-13 w-50 md:hidden">
            Marketing Strategies
          </button>
          <h1 className="text-4xl text-left md:hidden">Together for Success</h1>
        </div>
        <div className="w-70 mx-auto md:w-162">
          <img className=" md:w-220 object-contain" src={hero} alt="" />
        </div>
        <div className="text-left md:w-120 flex flex-col gap-5">
          <button className="bg-[#e7e7e7] rounded-md w-1/2 hidden md:block">
            Marketing Strategies
          </button>
          <h1 className="text-5xl mb-6 hidden md:block font-bold">
            Proven Success Stories
          </h1>
          <p className="">
            At positivus, we help business grow by combining
            creativity,innovation and data-driven strategies. Together, we build
            a future of shred successAt positivus, we help business grow by
            combining creativity,innovation and data-driven strategies.
            Together, we build a future of shred success
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
