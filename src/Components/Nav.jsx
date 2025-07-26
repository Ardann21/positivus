import React from 'react'
import logo from '../assets/Frame 9.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
    const [toggle,setToggle]=useState(false)

    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <>
    <div className='flex justify-between max-w-[1280px] mx-auto mt-5'>
        <Link to='/'><img className='w-32 ml-2' src={logo} alt="logo" /></Link>
        <ul className=' gap-8 items-center hidden md:flex mr-2'>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/service'>Services</Link></li>
            <li><Link to='/use'>Use Cases</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li className='border border-1-black rounded-md p-2'>Request a quote</li>
        </ul>
        <div onClick={handleToggle} className='md:hidden'>
            {!toggle ? <GiHamburgerMenu className='fixed right-2' size={30}/> : <IoCloseSharp className='fixed right-2' size={30}/>}
            
            <div  className={toggle ? 'fixed text-left top-0 left-0 border-r border-r-1-black w-[60%] h-full bg-white ease-in-out duration-500 z-5' : 'fixed left-[-100%] ease-out duration-500'}>
            <img className='w-32 ' src={logo} alt="logo" />
            <ul className='flex flex-col gap-8 mt-8 ml-2'>
                
                <li>About Us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li className=''>Request a quote</li>
            </ul>
            </div>
            
        </div>
        
        
        
    </div>
    </>
  )
}

export default Nav