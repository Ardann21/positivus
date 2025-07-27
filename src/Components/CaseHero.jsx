import React from "react";
import caseHero from "../assets/caseHero.png";

const CaseHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-13 md:mt-12 md:mx-auto mx-3 items-center md:bg-[#F3F3F3] md:rounded-[70px] md:p-12 md:max-w-[1540px]">
        <div>
          <h1 className="text-4xl text-left mt-13 md:hidden">
            Together for Success
          </h1>
        </div>
        <div className="w-80 md:w-162">
          <img className=" md:w-220 object-contain" src={caseHero} alt="" />
        </div>
        <div className="text-left md:w-120 flex flex-col gap-5">
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

export default CaseHero;
