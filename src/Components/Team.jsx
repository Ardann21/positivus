import React from 'react'
import john from '../assets/john.png'
import icon from '../assets/Social icon.png'
import jane from '../assets/jane.png'

const Team = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12'>
        <div>
          <button className='bg-[#B9FF66] py-2 px-3 mx-auto rounded-md text-4xl'>Team</button>
        </div>
        <div>
          <p className='text-center md:text-left mx-2'>Meet the skilled and experienced team behind <br /> our successful digital marketing strategies</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1240px] mx-auto'>
        <div className='block p-8 border rounded-4xl shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:mx-0 mx-4'>
            <div className='flex justify-around md:justify-center border-b-black  gap-3 my-3'>
                <img className='w-25 block' src={john} alt="" />
                <div className='flex flex-col justify-end-safe text-start'>
                    <h1 className='font-bold'>John Smith</h1>
                    <p className='text-[12px]'>Ceo and Founder</p>
                </div>
                <img className='h-8 block' src={icon} alt="" />
            </div>
            <div className='text-left mt-2 border-t '>
                <p className='mt-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
            </div>
        </div>
        <div className='block p-8 border rounded-4xl shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:mx-0 mx-4'>
            <div className='flex justify-around md:justify-center border-b-black  gap-3 my-3'>
                <img className='w-25 block' src={jane} alt="" />
                <div className='flex flex-col justify-end-safe text-start'>
                    <h1 className='font-bold'>Jane Doe</h1>
                    <p className='text-[12px]'>Director of Operations</p>
                </div>
                <img className='h-8 block' src={icon} alt="" />
            </div>
            <div className='text-left mt-2 border-t '>
                <p className='mt-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
            </div>
        </div>
       <div className='block p-8 border rounded-4xl shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:mx-0 mx-4'>
            <div className='flex justify-around md:justify-center border-b-black  gap-3 my-3'>
                <img className='w-25 block' src={john} alt="" />
                <div className='flex flex-col justify-end-safe text-start'>
                    <h1 className='font-bold'>Michael Brown</h1>
                    <p className='text-[12px]'>Senior SEO Specialist</p>
                </div>
                <img className='h-8 block' src={icon} alt="" />
            </div>
            <div className='text-left mt-2 border-t '>
                <p className='mt-2'>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
            </div>
        </div>
        <div className='block p-8 border rounded-4xl shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:mx-0 mx-4'>
            <div className='flex justify-around md:justify-center border-b-black  gap-3 my-3'>
                <img className='w-25 block' src={john} alt="" />
                <div className='flex flex-col justify-end-safe text-start'>
                    <h1 className='font-bold'>Emily Johnson</h1>
                    <p className='text-[12px]'>PPC Manager</p>
                </div>
                <img className='h-8 block' src={icon} alt="" />
            </div>
            <div className='text-left mt-2 border-t '>
                <p className='mt-2'>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
            </div>
        </div>
        <div className='hidden md:block p-8 border rounded-4xl shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:mx-0 mx-4'>
            <div className='flex justify-around md:justify-center border-b-black  gap-3 my-3'>
                <img className='w-25 block ' src={john} alt="" />
                <div className='flex flex-col justify-end-safe text-start'>
                    <h1 className='font-bold'>Brian Williams</h1>
                    <p className='text-[12px]'>Social Media Specialist</p>
                </div>
                <img className='h-8 block' src={icon} alt="" />
            </div>
            <div className='text-left mt-2 border-t '>
                <p className='mt-2'>4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
            </div>
        </div>
        <div className='hidden md:block p-8 border rounded-4xl shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:mx-0 mx-4'>
            <div className='flex justify-around md:justify-center border-b-black  gap-3 my-3'>
                <img className='w-25 block' src={john} alt="" />
                <div className='flex flex-col justify-end-safe text-start'>
                    <h1 className='font-bold'>Sarah Kim</h1>
                    <p className='text-[12px]'>Content Creator</p>
                </div>
                <img className='h-8 block' src={icon} alt="" />
            </div>
            <div className='text-left mt-2 border-t '>
                <p className='mt-2'>2+ years of experience in writing and editing
                Skilled in creating compelling, SEO-optimized content for various industries</p>
            </div>
        </div>
        
      </div>
      <div className=' mt-12 grid-cols-1 md:grid-cols-3 grid mb-12'>
        <div></div>
        <div></div>
        <div className=''>
        <button className='cursor-pointer bg-[#191A23] text-white px-23 md:px-12 py-5 mx-5 rounded-2xl'>See all Team</button>
        </div>
      </div>    
    </>
  )
}

export default Team