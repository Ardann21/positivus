import React from "react";
import Vector from "../Assets/Vector.png";

const Journey = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 w-60 md:w-full mx-auto rounded-md text-4xl">
            Our Journey
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            From our humble beginnings in 2010, Positivus has grown into a
            leading event management company, organizing over 100 events
            annually
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1280px] md:mx-auto mt-5 gap-12">
        <div className="bg-[#191A23] p-6 mx-6 md:mx-12 rounded-4xl text-white flex flex-col md:w-1/2 self-start ">
          <h1 className="text-left text-4xl p-2 border-l-6 border-l-[#B9FF66] pl-4">
            2019
          </h1>
          <div className="flex flex-col border-l-6 border-l-[#B9FF66] pl-4">
            <div className="flex p-2 gap-3 items-center">
              <img clas src={Vector} alt="Journey Vector" className="w-5 h-5" />
              <h1 className="text-xl text-left">The Beggining</h1>
            </div>
            <div className="p-2">
              <p className="text-left">
                Positivus was founded to help business navigate the complexities
                of event management. Our first event was a small
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#191A23] p-6 mx-6 md:mx-12 rounded-4xl text-white flex flex-col md:w-1/2 self-end ">
          <h1 className="text-left text-4xl p-2 border-l-6 border-l-[#B9FF66] pl-4">
            2021
          </h1>
          <div className="flex flex-col border-l-6 border-l-[#B9FF66] pl-4">
            <div className="flex p-2 gap-3 items-center">
              <img clas src={Vector} alt="Journey Vector" className="w-5 h-5" />
              <h1 className="text-xl text-left">Industry Recognition</h1>
            </div>
            <div className="p-2">
              <p className="text-left">
                Positivus was founded to help business navigate the complexities
                of event management. Our first event was a small
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#191A23] p-6 mx-6 md:mx-12 rounded-4xl text-white flex flex-col md:w-1/2 self-start ">
          <h1 className="text-left text-4xl p-2 border-l-6 border-l-[#B9FF66] pl-4">
            2023
          </h1>
          <div className="flex flex-col border-l-6 border-l-[#B9FF66] pl-4">
            <div className="flex p-2 gap-3 items-center">
              <img clas src={Vector} alt="Journey Vector" className="w-5 h-5" />
              <h1 className="text-xl text-left">Innovation and Growth</h1>
            </div>
            <div className="p-2">
              <p className="text-left">
                Positivus was founded to help business navigate the complexities
                of event management. Our first event was a small
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#191A23] p-6 mx-6 md:mx-12 rounded-4xl text-white flex flex-col md:w-1/2 self-end ">
          <h1 className="text-left text-4xl p-2 border-l-6 border-l-[#B9FF66] pl-4">
            2024
          </h1>
          <div className="flex flex-col border-l-6 border-l-[#B9FF66] pl-4">
            <div className="flex p-2 gap-3 items-center">
              <img clas src={Vector} alt="Journey Vector" className="w-5 h-5" />
              <h1 className="text-xl text-left">Leading the Future</h1>
            </div>
            <div className="p-2">
              <p className="text-left">
                Positivus was founded to help business navigate the complexities
                of event management. Our first event was a small
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
