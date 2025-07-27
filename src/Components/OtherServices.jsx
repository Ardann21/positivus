import React from "react";
import tokyo from "../assets/tokyo-magnifier-web-search-with-elements 2.png";
import icon from "../assets/Icon.svg";
import card2 from "../assets/Illustration 2.png";
import card3 from "../assets/Illustration 3.png";
import tokyo2 from "../assets/tokyo-sending-messages-from-one-place-to-another 1.png";
import card4 from "../assets/Illustration 4.png";
import card5 from "../assets/Illustration 5.png";
import core from "../assets/core1.png";

const OtherServices = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 mx-auto rounded-md text-4xl">
            Our Other Services
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            At our digital marketing agency, we offer a range of services to{" "}
            <br /> help businesses grow and succeed online. These services
            include:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-4 md:mx-auto mt-12 md:max-w-[1380px] mb-12">
        <div className="border border-b-black rounded-[70px] gap-3 flex flex-col p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#F3F3F3]">
          <div className="flex justify-start mt-3">
            <h1 className="text-2xl md:text-4xl bg-white text-left ">
              Search engine <br />
              optimization
            </h1>
          </div>
          <div className="flex justify-end ">
            <img className="w-80 md:w-80 md:h-60" src={tokyo} alt="" />
          </div>
          <div className="flex justify-start items-center cursor-pointer">
            <img src={icon} alt="" />
            <p className="ml-2">Learn more</p>{" "}
          </div>
        </div>
        <div className="border border-b-black rounded-[70px] gap-3 flex flex-col p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#F3F3F3]">
          <div className="flex justify-start mt-3">
            <h1 className="text-2xl md:text-4xl bg-white text-left">
              Pay-per-click <br />
              advertising
            </h1>
          </div>
          <div className="flex justify-end ">
            <img className="w-80 md:w-80 md:h-60" src={card2} alt="" />
          </div>
          <div className="flex justify-start items-center cursor-pointer">
            <img src={icon} alt="" />
            <p className="ml-2">Learn more</p>{" "}
          </div>
        </div>
        <div className="border border-b-black rounded-[70px] gap-3 flex flex-col p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#F3F3F3] ">
          <div className="flex justify-start mt-3">
            <h1 className="text-2xl md:text-4xl bg-white text-left">
              Social Media <br />
              Marketing
            </h1>
          </div>
          <div className="flex justify-end ">
            <img className="w-80 md:w-80 md:h-60" src={card3} alt="" />
          </div>
          <div className="flex justify-start items-center cursor-pointer">
            <img src={icon} alt="" />
            <p className="ml-2 ">Learn more</p>{" "}
          </div>
        </div>
        <div className="border border-b-black rounded-[70px] gap-3 flex flex-col p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#F3F3F3]">
          <div className="flex justify-start mt-3">
            <h1 className="text-2xl md:text-4xl bg-white text-left">
              Email <br />
              Marketing
            </h1>
          </div>
          <div className="flex justify-end ">
            <img className="w-80 md:w-80 md:h-60" src={tokyo2} alt="" />
          </div>
          <div className="flex justify-start items-center cursor-pointer">
            <img src={icon} alt="" />
            <p className="ml-2">Learn more</p>{" "}
          </div>
        </div>
        <div className="border border-b-black rounded-[70px] gap-3 flex flex-col p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#F3F3F3]">
          <div className="flex justify-start mt-3">
            <h1 className="text-2xl md:text-4xl bg-white text-left">
              Content <br />
              Creation
            </h1>
          </div>
          <div className="flex justify-end ">
            <img className="w-80 md:w-80 md:h-60" src={card4} alt="" />
          </div>
          <div className="flex justify-start items-center cursor-pointer">
            <img src={icon} alt="" />
            <p className="ml-2">Learn more</p>{" "}
          </div>
        </div>
        <div className="border border-b-black rounded-[70px] gap-3 flex flex-col p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#F3F3F3] ">
          <div className="flex justify-start mt-3">
            <h1 className="text-2xl md:text-4xl bg-white text-left">
              Analytics and <br />
              Tracking
            </h1>
          </div>
          <div className="flex justify-end ">
            <img className="w-80 md:w-80 md:h-60" src={card5} alt="" />
          </div>
          <div className="flex justify-start items-center cursor-pointer">
            <img src={icon} alt="" />
            <p className="ml-2 ">Learn more</p>{" "}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[70px] md:max-w-[1640px] md:mx-auto flex flex-col p-8 md:flex-row mx-3 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] border  justify-center items-center gap-12 md:mt-32 mt-12">
        <div className="md:w-180">
          <h1 className="text-left font-bold text-xl md:text-3xl mb-5 border-b-3 border-b-black md:mr-32">
            Ready to Elevate Your Search Rankings ?
          </h1>
          <p className="text-left md:text-xl">
            At Positivus, we thrive on innovaton and collabration. We're always
            looking for talented individuals who share our passion for digital
            marketing and want to make a difference. Ready to make an impact ?{" "}
            <br />
          </p>
          <button className="hidden md:flex bg-[#B9FF66] rounded-md py-5 px-12 mt-8 md:float-left cursor-pointer">
            Start My SEO Journey
          </button>
        </div>
        <div className="flex">
          <img className="md:w-120 w-110" src={core} alt="" />
        </div>
        <button className="bg-[#B9FF66] rounded-md py-2 px-10 md:float-left md:hidden cursor-pointer">
          Start My SEO Journey
        </button>
      </div>
    </>
  );
};

export default OtherServices;
