import React from 'react'
import logo from '../assets/logo-white.png'
import { Link } from 'react-router-dom'
import { TbBrandLinkedin } from "react-icons/tb";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";




const Footer = () => {
  return (
    <>
    <div className='flex flex-col bg-[#191A23] mt-12 md:mx-10 md:rounded-t-2xl'>
        <div className='flex flex-col md:flex-row justify-around  mt-12 text-white'>
            <div className='mx-auto md:mx-0'><img src={logo} alt="" /></div>
            <div className=''>
                <ul className='flex flex-col md:gap-8 md:flex-row underline text-[13px]'>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/service'>Services</Link></li>
                    <li><Link to='/use'>Use Cases</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className='md:flex gap-2 text-white hidden'>
                <TbBrandLinkedin size={40}/>

                <FaFacebook size={40}/>
                <AiFillTwitterCircle size={44}/>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-8'>
            <div className='text-white mb-8'>
                <button className='bg-[#B9FF66] px-3 rounded-md text-black my-3 font-bold'>Contact us:</button>
                <p className='text-[12px] '>Email: info@positivus.com</p>
                <p className='text-[12px]'>Phone: 555-567-8901</p>
                <p className='text-[12px]'>Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345</p>
            </div>
            <div className='bg-[#373841] flex flex-col md:flex-row md:w-fit p-5 mx-4 rounded-2xl md:items-center md:gap-5'>
                <input className='border border-white rounded-md my-5 w-55 mx-auto md:w-auto h-10' type="text" />
                <button className='bg-[#B9FF66] text-black rounded-md w-55 mx-auto md:w-auto md:mx-0 my-1 md:my-0 cursor-pointer h-10 text-[12px] font-bold' type='submit'>Subscribe to news</button>
            </div>
            <div className='flex justify-center text-white gap-2 mt-2 md:hidden'>
                <TbBrandLinkedin size={40}/>

                <FaFacebook size={40}/>
                <AiFillTwitterCircle size={44}/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-13 mx-12 text-white border-t border-t-white p-2 md:p-10'>
            <div className=''>
                <p>© 2025 Positivus. All Rights Reserved.</p>
            </div>
            
            <div>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer