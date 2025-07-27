import React from "react";
import serviceHero from "../assets/servicehero.png";
import icon from "../assets/Icon.svg";
import vector from "../assets/Vector.png";
const ServiceHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-13 md:mt-12 md:mx-auto mx-3 items-center md:bg-[#F3F3F3] md:rounded-[70px] md:p-12 md:max-w-[1540px]">
        <div>
          <h1 className="text-4xl text-left mt-13 md:hidden">
            Together for Success
          </h1>
        </div>
        <div className="w-80 md:w-152">
          <img className="w-auto object-contain" src={serviceHero} alt="" />
        </div>
        <div className="text-left md:w-120">
          <h1 className="text-4xl mb-6 hidden md:block font-bold">
            Expert Digital Marketing Services
          </h1>
          <p className="">
            At positivus, we help business grow by combining
            creativity,innovation and data-driven strategies. Together, we build
            a future of shred success
          </p>
        </div>
      </div>
      <div className="flex max-w-[1540px] ml-6 md:mx-auto mt-10 gap-3 cursor-pointer">
        <img className="transform rotate-230 w-6 md:w-auto" src={icon} alt="" />
        <p className="text-md md:text-3xl">Back</p>
      </div>

      <div className="bg-[#191A23] max-w-[1540px] md:mx-auto mx-3 mt-6 text-white rounded-[40px] gap-3 md:gap-7 flex flex-col p-8 md:p-12 md:flex-row md: items-center md:mt-10">
        <div className="md:hidden text-white flex gap-3">
          <img className="w-5 h-full" src={vector} alt="" />
          <h1 className="text-[#B9FF66]">Featured</h1>
        </div>
        <div className="flex gap-3 flex-1/4 items-center">
          <img className="w-10 h-full hidden md:block" src={vector} alt="" />
          <h1 className="text-3xl text-left">
            <span className="md:bg-[#B9FF66]">Search engine optimization</span>
          </h1>
        </div>
        <div className="flex-3/4 ">
          <h1 className="hidden md:flex text-left font-bold text-3xl mb-5">
            Let's make things happen
          </h1>
          <p className="text-left">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-[#F3F3F3] text-black rounded-md md:w-full py-5 px-12 mt-8 md:float-left">
            Boost My Rankings
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;
