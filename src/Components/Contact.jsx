import React from "react";
import contact from "../assets/Illustration contact.png"
const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 mx-auto rounded-md text-4xl">
            Contact Us
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
          </p>
        </div>
      </div>

      <div className="bg-[#F3F3F3] p-4 md:p-12 mx-3 md:mx-22 rounded-4xl">
        <div className="flex flex-col md:flex-row justify-center gap-13">
          <form className="md:w-160 md:my-auto my-6" action="">
            <div className="flex justify-center gap-1 md:float-start">
              <input className="text-cyan-500" id="radio" type="radio" name="radio" />
              <label className="">Say Hi</label>
              <input className="ml-3 text-cyan-500" id="radio" type="radio" name="radio" />
              <label htmlFor="">Get Quote</label>
            </div> 
            <div className="flex flex-col gap-2 mt-12">
              <label className="text-left" htmlFor="name">Name</label>
              <input className="bg-white rounded-xl border" id="name" type="text" />
              <label className="text-left" htmlFor="email">Email *</label>
              <input className="bg-white rounded-xl border" id="email" type="email" />
              <label className="text-left" htmlFor="email">Message *</label>
              <textarea className="bg-white rounded-xl border" name="" id=""></textarea>
              <button className="bg-[#191A23] text-white mt-8 p-3 rounded-2xl">Send Message</button>
            </div>
            </form>
            <div className="w-102 my-auto">
            <img className="hidden md:block" src={contact} alt="" />
            </div>
         </div>
        </div>
    </>
  );
};

export default Contact;