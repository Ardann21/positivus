import React from "react";
import Core1 from "../assets/core1.png";
import Core2 from "../assets/core2.png";
import hero2 from "../assets/hero2.png";

const Core = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 w-60 md:w-full mx-auto rounded-md text-4xl">
            Core Values
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            At the heart of everything we do <br /> are our core values
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-[1280px] md:mx-auto">
        <div className="flex flex-col gap-5 border border-1-black p-5 rounded-[50px] text-left mx-5 md:mx-3 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <h1 className="text-3xl border-b border-b-black mt-4 font-bold">Client Success First</h1>
          <p>
            We are dedicated to achieving measurable results for our clients.
            Each strategy is tailored to meet unique business goals and drive
            long-term success.
          </p>
        </div>

        <div className="flex flex-col md:flex-row border border-1-black p-5 rounded-[50px] text-left mx-5 md:mx-3 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <div className="flex flex-col gap-5  rounded-md text-left">
            <h1 className="text-3xl border-b border-b-black font-bold">Innovation</h1>
            <p>We constantly strive to stay ahead of industry trends.</p>
          </div>
          <div className="md:w-70 md:my-auto mx-auto">
            <img className="w-80" src={Core1} alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border border-1-black p-5 rounded-[50px] text-left mx-5 md:mx-3 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <div className="flex flex-col gap-5  rounded-md text-left">
            <h1 className="text-3xl border-b border-b-black font-bold">Collabration</h1>
            <p>We constantly strive to stay ahead of industry trends.</p>
          </div>
          <div className="md:w-70 md:my-auto mx-auto">
            <img className="w-80" src={Core2} alt="" />
          </div>
        </div>
        
        <div className="flex flex-col gap-5 border border-1-black p-5 rounded-[50px] text-left mx-5 md:x-3 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <h1 className="text-3xl border-b border-b-black mt-4 font-bold">Transparency</h1>
          <p>
            We are dedicated to achieving measurable results for our clients.
            Each strategy is tailored to meet unique business goals and drive
            long-term success.
          </p>
        </div>
      </div>

      <div className='bg-[#191A23] text-white rounded-[70px] flex flex-col p-8 md:p-12 md:flex-row mx-3  md:mx-22 justify-evenly items-center mt-12 gap-12 md:mt-32'>
        <div className='hidden md:flex my-auto h-130 '><img className='w-full object-contain' src={hero2} alt="" /></div>
        <div className='md:w-170'>
            <h1 className='text-left font-bold text-3xl mb-5'>Let's make things happen</h1>
            <p className='text-left'>Contact us today to learn more
             about how our digital marketing services
             can help your business grow and succeed online.</p>
             <p className="text-left mt-3">-John Smith, Founder of Positivus</p>
        </div>
         <div className='flex md:hidden my-auto h-auto w-42 '><img className='w-full object-contain' src={hero2} alt="" /></div>
      </div>
    </>
  );
};

export default Core;
