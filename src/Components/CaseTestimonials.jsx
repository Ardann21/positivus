import React from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useRef } from "react";
import frame19 from '../assets/frame 19.png'

const CaseTestimonials = () => {
  
    const slider = useRef(null);
    
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
    
            <div className="absolute transform left-0 ml-22 md:ml-72">
              <FaArrowCircleLeft
                className="text-[#B9FF66] cursor-pointer"
                onClick={slideLeft}
                size={40}
              />
            </div>
    
            <div className="absolute transform right-0 mr-22 md:mr-72">
              <FaArrowCircleRight
                className="text-[#B9FF66] cursor-pointer"
                onClick={slideRight}
                size={40}
              />
            </div>
          </div>

          <div className='bg-[#B9FF66] rounded-[70px] flex flex-col p-8 md:p-12 md:flex-row mx-3  md:mx-22 justify-evenly items-center gap-12 md:mt-32'>
                  <div className='md:w-170'>
                      <h1 className='text-left font-bold text-3xl mb-5'>Let's make things happen</h1>
                      <p className='text-left'>Contact us today to learn more
                       about how our digital marketing services
                       can help your business grow and succeed online.</p>
                       <button className='bg-[#191A23] text-white rounded-md py-5 px-12 mt-8 md:float-left'>Get your free proposal</button>
                  </div>
              <div className='hidden md:flex'><img className='' src={frame19} alt="" /></div>
              </div>
        </>
  )
}

export default CaseTestimonials