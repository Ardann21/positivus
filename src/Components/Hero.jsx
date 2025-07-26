import React from 'react'
import hero from '../assets/Illustration.png'
import amazon from '../assets/Company logo.png'
import scribble from '../assets/Company logo 2.png'
import hubsport from '../assets/Company logo 3.png'
import notion from '../assets/Company logo 4.png'
import netflix from '../assets/Company logo 5.png'
import zoom from '../assets/Company logo 6.png'


const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-center mt-12 gap-6'>
        <div>
            <img className='z-12' src={hero} alt="hero" />
        </div>
        <div className='flex md:w-123 flex-col gap-2 mx-4'>
            <h1 className='text-5xl text-left'>Navigating the digital landscape for success</h1>
            <p className='text-left'>Our digital marketing agency helps businesses grow
             and succeed online through a range of services includin
             SEO, PPC, social media marketing, and content creation.</p>
             <button className=' bg-[#191A23] text-white rounded-md cursor-pointer px-12 py-3 mx-auto mt-8 hover:bg-[#B9FF66] hover:text-[#191A23]'>Book a consultation</button>
        </div>
    </div>
    <div className='flex flex-wrap gap-4 justify-around mt-12'>
    <img src={amazon} alt=""/>
    <img src={scribble} alt="" />
    <img src={hubsport} alt="" />
    <img src={notion} alt="" />
    <img src={netflix} alt="" />
    <img src={zoom} alt="" />
    </div>
    </>
  )
}

export default Hero