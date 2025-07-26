import React from 'react'
import award1 from '../Assets/award1.png'
import award2 from '../Assets/award2.png'
import award3 from '../Assets/award3.png'
import award4 from '../Assets/award4.png'
import ilu2 from '../Assets/ilu2.png'

const Awards = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22 mb-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 w-60 md:w-full mx-auto rounded-md text-4xl">
            Awards & Recognition
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            At Positivus, we take pride in our achievements and the recognition <br /> we've received for 
         our commitment to excellence. 
          </p>
        </div>
      </div>


        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mx-1 md:mx-auto  md:max-w-[1240px]'>
            <div className='bg-[#F3F3F3] rounded-4xl p-2 flex flex-col   md:p-10'>
                <div className='mx-auto'><img className='' src={award1} alt="" /></div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-md text-left'>Best Small Business Digital
                     Marketing Agency of he Year</h1>
                    <p className='text-left'>Celebrating our success in delivering
                        innovative digital marketing solutions
                         that drive results for our clients.
                    </p>
                </div>
            </div>
            <div className='bg-[#F3F3F3] rounded-4xl p-2 flex flex-col   md:p-10'>
                <div className='mx-auto'><img className='w-33' src={award2} alt="" /></div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-md text-left'>Innovative Website Design</h1>
                    <p className='text-left'>Celebrating our success in delivering
                        innovative digital marketing solutions
                         that drive results for our clients.
                    </p>
                </div>
            </div>
            <div className='bg-[#F3F3F3] rounded-4xl p-2 flex flex-col   md:p-10'>
                <div className='mx-auto'><img className='w-36' src={award3} alt="" /></div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-md text-left'>Top Performing PPC Campaign of the Year</h1>
                    <p className='text-left'>Celebrating our success in delivering
                        innovative digital marketing solutions
                         that drive results for our clients.
                    </p>
                </div>
            </div>
            <div className='bg-[#F3F3F3] rounded-4xl p-2 flex flex-col   md:p-10'>
                <div className='mx-auto'><img className='w-48' src={award4} alt="" /></div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-md text-left'>Expertise in Social Media Marketing</h1>
                    <p className='text-left'>Celebrating our success in delivering
                        innovative digital marketing solutions
                         that drive results for our clients.
                    </p>
                </div>
            </div>
          
        </div>


        <div className='bg-[#B9FF66] rounded-[70px] flex flex-col p-8 md:flex-row mx-3 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] border md:mx-22 justify-center items-center gap-12 md:mt-32 mt-12'>
                <div className='md:w-170'>
                    <h1 className='text-left font-bold text-3xl mb-5'>Join Our Team</h1>
                    <p className='text-left'>At Positivus, we thrive on innovaton and collabration. We're always looking for
                        talented individuals who share our passion for digital marketing and want to make a difference. Ready to make an
                        impact ? <br />
                    </p>
                     <button className='bg-[#191A23] text-white rounded-md py-5 px-12 mt-8 md:float-left'>Explore Careers</button>
                </div>
            <div className='flex'><img className='w-60 md:w-full' src={ilu2} alt="" /></div>
            </div>


    </>
  )
}

export default Awards