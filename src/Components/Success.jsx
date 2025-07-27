import React from 'react'
import icon from '../assets/icon-green.png'
const Success = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 w-60 md:w-full mx-auto rounded-md text-4xl">
            All Success Stories
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
           Explore our success stories to see how we have helped businesses achieve <br />
            their goals through effective digital marketing strategies. 
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-4 md:mx-auto mt-12 md:max-w-[1380px] mb-12 md:border md:border-black md:rounded-[70px] md:p-12">
          
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:shadow-none md:border-b md:border-b-black w-100%">
            <h2 className="text-2xl md:text-4xl text-left">E-Commerce Fashion Brand</h2>
            <p className="mt-4 text-left">We implemented a tailored SEO strategy that boosted organic search rankings,
             leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
             <div className='flex justify-start items-center cursor-pointer mt-4'>
                <img src={icon} alt="" />
                <p className="ml-2 text-left cursor-pointer">Learn more</p>
             </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none md:border-b md:border-b-black md:border-r md:border-r-black md:border-l md:border-l-black">
            <h2 className="text-2xl md:text-4xl text-left">E-Commerce Fashion Brand</h2>
            <p className="mt-4 text-left">We implemented a tailored SEO strategy that boosted organic search rankings,
             leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
             <div className='flex justify-start items-center cursor-pointer mt-4'>
                <img src={icon} alt="" />
                <p className="ml-2 text-left cursor-pointer">Learn more</p>
             </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:shadow-none md:border-b md:border-b-black ">
            <h2 className="text-2xl md:text-4xl text-left">E-Commerce Fashion Brand</h2>
            <p className="mt-4 text-left">We implemented a tailored SEO strategy that boosted organic search rankings,
             leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
             <div className='flex justify-start items-center cursor-pointer mt-4'>
                <img src={icon} alt="" />
                <p className="ml-2 text-left cursor-pointer">Learn more</p>
             </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none  ">
            <h2 className="text-2xl md:text-4xl text-left">E-Commerce Fashion Brand</h2>
            <p className="mt-4 text-left">We implemented a tailored SEO strategy that boosted organic search rankings,
             leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
             <div className='flex justify-start items-center cursor-pointer mt-4'>
                <img src={icon} alt="" />
                <p className="ml-2 text-left cursor-pointer">Learn more</p>
             </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none  md:border-r md:border-r-black md:border-l md:border-l-black">
            <h2 className="text-2xl md:text-4xl text-left">E-Commerce Fashion Brand</h2>
            <p className="mt-4 text-left">We implemented a tailored SEO strategy that boosted organic search rankings,
             leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
             <div className='flex justify-start items-center cursor-pointer mt-4'>
                <img src={icon} alt="" />
                <p className="ml-2 text-left cursor-pointer">Learn more</p>
             </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none  ">
            <h2 className="text-2xl md:text-4xl text-left">E-Commerce Fashion Brand</h2>
            <p className="mt-4 text-left">We implemented a tailored SEO strategy that boosted organic search rankings,
             leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
             <div className='flex justify-start items-center cursor-pointer mt-4'>
                <img src={icon} alt="" />
                <p className="ml-2 text-left cursor-pointer">Learn more</p>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Success