import React, { useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import link from "../assets/Link.png"; // Ensure this path is correct

const Testimonials = () => {
  const slider = useRef(null); // Initialize useRef with null for best practice

  const slideRight = () => {
    if (slider.current) {
      slider.current.scrollLeft += 550;
    }
  };

  const slideLeft = () => {
    if (slider.current) {
      slider.current.scrollLeft -= 550;
    }
  };

  return (
    <>
      {/* Header section for testimonials */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 mx-auto rounded-md text-4xl">
            Testimonials
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            Hear from Our Satisfied Clients: Read Our Testimonials <br /> to
            Learn More about Our Digital Marketing Services
          </p>
        </div>
      </div>

      <div className="relative mx-5 mb-5 bg-[#191A23] rounded-[70px] py-12 gap-3">
        <div
          ref={slider}
          className="text-white flex overflow-x-auto gap-10 px-5 hide-scrollbar scroll-smooth"
        >
          <div className="flex flex-row gap-30 justify-start items-center">
            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>
            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>
            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            <div className="w-[320px] md:w-[800px] flex-shrink-0 p-8">
              <p className="text-left border-2 border-[#B9FF66] rounded-[70px] text-[13px] md:text-xl p-6 md:p-7">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="text-left ml-3 mt-3">
                <h1 className="text-[#B9FF66]">John Smith</h1>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Button - positioned absolutely relative to the NEW outer container */}
        <div className="absolute transform left-0 ml-22 md:ml-72">
          <FaArrowCircleLeft
            className="text-[#B9FF66] cursor-pointer"
            onClick={slideLeft}
            size={40}
          />
        </div>

        {/* Right Button - positioned absolutely relative to the NEW outer container */}
        <div className="absolute transform right-0 mr-22 md:mr-72">
          <FaArrowCircleRight
            className="text-[#B9FF66] cursor-pointer"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
