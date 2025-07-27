import React from "react";
import icon from "../Assets/Icon-g.png";
import vector from "../Assets/Vector.png";

const Featured = () => {
  return (
    <>
      <div className="mt-12 bg-[#191A23] text-white md:max-w-[1540px] md:mx-auto rounded-4xl gap-7 justify-evenly py-12 flex flex-col md:flex-row  items-center">
        <div className="flex flex-col text-left md:text-center gap-6 ml-3">
          <div className="flex md:hidden gap-4">
            <img className="w-5 h-full" src={vector} alt="" />{" "}
            <h1 className="text-[#B9FF66] text-2xl">FEATURED</h1>
          </div>
          <h1 className="hidden md:flex text-3xl bg-[#B9FF66] md:w-100 rounded-md text-black">
            Featured Success Story
          </h1>

          <p className="text-2xl text-left">
            Scaling Success for a Leading E-Commerce Brand
          </p>
          <p className="text-left md:w-102">
            Trough a comprehensive SEO and PPC strategy, we helped this leading
            e-commerce brand achieve a 50% increase in organic traffic.
          </p>
          <div className=" hidden md:flex gap-3 self-start">
            <img className="w-8 h-auto" src={icon} alt="" />
            <p>Read</p>
          </div>
        </div>
        <div className="grid-cols-1 md:grid-cols-2 grid gap-5  w-full md:w-fit  text-black">
          <div className="flex flex-col gap-2 bg-white py-13  rounded-4xl mx-3">
            <h1 className="text-4xl font-bold">200%</h1>
            <p className="mx-2">increase in organic traffic</p>
          </div>
          <div className="flex flex-col gap-2 bg-white py-13 rounded-4xl mx-3">
            <h1 className="text-4xl font-bold">150%</h1>
            <p className="mx-2">rise in online sales</p>
          </div>
          <div className="flex flex-col gap-2 bg-white py-13 rounded-4xl mx-3">
            <h1 className="text-4xl font-bold">75%</h1>
            <p className="mx-2">reduction in cost-per-click</p>
          </div>
          <div className="flex flex-col gap-2 bg-white py-13 rounded-4xl mx-3">
            <h1 className="text-4xl font-bold">300%</h1>
            <p className="mx-2">improvement in conversion rate</p>
          </div>
        </div>
        <div className="flex md:hidden ml-2 gap-2 self-start">
          <img src={icon} alt="" />
          <p>Read</p>
        </div>
      </div>
    </>
  );
};

export default Featured;
