import React from "react";
import { useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import link from "../assets/Link.png";

const Testimonials = () => {
  const slider = useRef();

  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 300;
  };
  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 300;
  };
  return (
    <>
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

      <p className="md:text-xl">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>

      <div
        ref={slider}
        className="rounded-none text-white flex gap-3 overflow-x-auto mx-5 scroll md:bg-[#191A23] mb-5 md:justify-between md:rounded-[70px] md:py-12 relative hide-scrollbar scroll-smooth"
      >
        <div className="flex-shrink-0 md:flex-shrink md:w-full w-97 flex flex-col justify-center p-12 text-left bg-[#191A23] md:rounded-none rounded-[70px] gap-5 border-r border-r-white">
          <p className="md:text-xl">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <img className="w-32" src={link} alt="" />
        </div>
        <div className="flex-shrink-0 md:flex-shrink w-97 md:w-full flex flex-col justify-center p-12 text-left bg-[#191A23] md:rounded-none rounded-[70px] gap-5 border-r border-r-white">
          <p className="md:text-xl">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <img className="w-32" src={link} alt="" />
        </div>
        <div className="flex-shrink-0 md:flex-shrink w-97 md:w-full flex flex-col justify-center p-12 text-left bg-[#191A23] rounded-[70px] gap-5">
          <p className="md:text-xl">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <img className="w-32" src={link} alt="" />
        </div>
      </div>
      <div className="flex  justify-center gap-6">
        <div className="bg-[#191A23] flex justify-center gap-6 p-2 rounded-[70px]">
          <FaArrowCircleLeft
            className="text-[#B9FF66]"
            onClick={slideLeft}
            size={40}
          />
          <FaArrowCircleRight
            className="text-[#B9FF66]"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
