import React from "react";

const Numbers = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 w-60 md:w-full mx-auto rounded-md text-4xl">
            Our Impact in Numbers
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            A snapshot of the milestones and achievements <br />
            that drive our success
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="border-t-3 border-t-black  rounded-2xl p-6 w-50 text-left">
          <h1 className="text-2xl font-bold">8+</h1>
          <p className="text-[12px]">Years of Experience</p>
        </div>
        <div className="border-t-3 border-t-black  rounded-2xl p-6 w-50 text-left">
          <h1 className="text-2xl font-bold">50+</h1>
          <p className="text-[12px]">Experts</p>
        </div>
        <div className="border-t-3 border-t-black  rounded-2xl p-6 w-50 text-left">
          <h1 className="text-2xl font-bold">100+</h1>
          <p className="text-[12px]">Succesfull Campaigns</p>
        </div>
        <div className="border-t-3 border-t-black  rounded-2xl p-6 w-50 text-left">
          <h1 className="text-2xl font-bold">20+</h1>
          <p className="text-[12px]">Industry Awards</p>
        </div>
        <div className="border-t-3 border-t-black  rounded-2xl p-6 w-50 text-left">
          <h1 className="text-2xl font-bold">500%</h1>
          <p className="text-[12px]">ROI for our clients</p>
        </div>
      </div>
    </>
  );
};

export default Numbers;
