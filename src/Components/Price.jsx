import React from "react";
import check from "../assets/check.png";

const Price = () => {
  return (
    <>
      <>
        <div className="mt-12 ">
          <div className=" grid grid-cols-1 gap-7 mx-5 md:px-18 ">
            <button className=" w-60 rounded-md text-4xl md:text-6xl text-left">
              Pricing
            </button>
            <p className="text-left md:w-150 ">
              Elevate your experience with our premium plans. Choose the one
              that suits you best and enjoy exclusive features and benefits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mx-4 md:mx-auto mt-6 md:max-w-[1380px] mb-12">
          <div className="border  rounded-[70px] gap-3 flex flex-col p-12 md:py-20 ">
            <h1 className="text-left text-4xl text-nowrap">Basic Plan</h1>
            <p className="text-left">
              <span className="font-bold text-4xl ">$500</span>
              /month
            </p>
            <button className="bg-[#191A23] py-3 text-white rounded-md">
              Get Started
            </button>
            <button className="border py-3 border-black rounded-md">
              Request a quote
            </button>
            <div className="border-t flex flex-col border-t-black gap-5">
              <div className="flex mt-3 text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Website Optimization</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Social Media Setup & Management (1 Platform)</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Monthly Progress Report</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Email Support</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Basic Competitor Analysis</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Initial SEO Audit</p>
              </div>
            </div>
          </div>
          <div className="border bg-[#191A23] text-white rounded-[70px] gap-3 flex flex-col p-12 md:py-20 ">
            <div className="flex items-center align-middle justify-between">
              <h1 className="text-left text-4xl bg-">Pro Plan</h1>
              <p className="bg-[#B9FF66] text-black rounded-xl px-2">Popular</p>
            </div>

            <p className="text-left">
              <span className="font-bold text-4xl ">$1000</span> /month
            </p>
            <button className="bg-[#B9FF66] py-3 text-black rounded-md">
              Get Started
            </button>
            <button className="border py-3  border-white rounded-md">
              Request a quote
            </button>
            <div className="border-t flex flex-col border-t-black gap-5">
              <div className="flex mt-3 text-left">
                <img className="h-6 w-auto flex" src={check} alt="" />
                <p>Website Optimization</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Social Media Setup & Management (1 Platform)</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Monthly Progress Report</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Email Support</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Basic Competitor Analysis</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Initial SEO Audit</p>
              </div>
            </div>
          </div>
          <div className="border  rounded-[70px] gap-3 flex flex-col p-12 md:py-20 ">
            <h1 className="text-left text-4xl text-nowrap">Elite Plan</h1>
            <p className="text-left">
              <span className="font-bold text-4xl ">$2000</span> /month
            </p>
            <button className="bg-[#191A23] py-3 text-white rounded-md">
              Get Started
            </button>
            <button className="border py-3 border-black rounded-md">
              Request a quote
            </button>
            <div className="border-t flex flex-col border-t-black gap-5">
              <div className="flex mt-3 text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Website Optimization</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Social Media Setup & Management (1 Platform)</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Monthly Progress Report</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Email Support</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Basic Competitor Analysis</p>
              </div>
              <div className="flex text-left">
                <img className="h-6 w-auto flex mr-1" src={check} alt="" />
                <p>Initial SEO Audit</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Price;
