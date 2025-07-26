import React from "react";
import Core1 from "../assets/core1.png";
import Core2 from "../assets/core2.png";

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
        <div className="flex flex-col gap-5 border border-1-black p-5 rounded-md text-left">
          <h1 className="text-3xl">Client Success First</h1>
          <p>
            We are dedicated to achieving measurable results for our clients.
            Each strategy is tailored to meet unique business goals and drive
            long-term success.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 border border-1-black p-5 rounded-md text-left">
          <div className="flex flex-col gap-5 p-5 rounded-md text-left">
            <h1 className="text-3xl">Innovation</h1>
            <p>We constantly strive to stay ahead of industry trends.</p>
          </div>
          <div className="w-52">
            <img src={Core1} alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 border border-1-black p-5 rounded-md text-left">
          <div className="flex flex-col gap-5 p-5 rounded-md text-left">
            <h1 className="text-3xl">Innovation</h1>
            <p>We constantly strive to stay ahead of industry trends.</p>
          </div>
          <div className="w-52">
            <img src={Core1} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 border border-1-black p-5 rounded-md text-left">
          <h1>Innovation</h1>
          <p>
            We believe in building trust through open communication and ethical
            practices. Our clients can always count on us to be honest and
            straightforward.
          </p>
        </div>
      </div>
    </>
  );
};

export default Core;
