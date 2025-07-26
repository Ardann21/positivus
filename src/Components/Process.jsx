import React from 'react';
import plus from '../assets/Plus icon.png';
import minus from '../assets/Minus icon.png';
import { useState } from 'react';

const Process = ({number,title,content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='grid grid-cols-1 gap-12 mx-4 md:mx-auto mt-12 md:max-w-[1380px] mb-12'>
        
        <div
          className={`
            border border-b-black rounded-[70px] md:rounded-4xl
            shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]
            transition-all duration-300 ease-in-out
            
            ${!isOpen ? 'bg-[#F3F3F3] p-5 md:p-12' : 'bg-[#B9FF66] p-5 md:p-12'}
          `}
        >
         
          <button
            className="w-full flex justify-between items-center text-left focus:outline-none "
            onClick={handleToggle}
            aria-expanded={isOpen}
          >
            <div className='flex items-center gap-5 flex-1'>
              <h1 className='font-bold text-lg md:text-xl'>{number}</h1> {/* Added text-lg for small screens */}
              <h1 className='text-[13px] md:text-2xl'>{title}</h1> {/* Added text-lg for small screens */}
            </div>
            <div>
              {!isOpen ? (
                <img className='w-9' src={plus} alt="Expand" />
              ) : (
                <img className='w-9' src={minus} alt="Collapse" />
              )}
            </div>
          </button>

     
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${isOpen ? 'max-h-screen opacity-100 mt-5 md:mt-8 pt-5 border-t border-t-black' : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0'}
            `}
          >
           
            <p className="text-sm md:text-base leading-relaxed text-start p-2">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;