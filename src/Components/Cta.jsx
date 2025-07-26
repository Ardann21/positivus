import React from 'react'
import frame19 from '../assets/frame 19.png'

const Cta = () => {
  return (
    <>
    <div className='bg-[#F3F3F3] rounded-[70px] flex flex-col p-8 md:p-12 md:flex-row mx-3  md:mx-22 justify-evenly items-center gap-12 md:mt-32'>
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

export default Cta