import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <>
    <div className="flex h-[481px] mt-0">
    <div className="float-right">
      <img className='h-auto mt-[2px] px-11 pt-16' width="438" alt="peek_device-removebg-preview" src="https://user-images.githubusercontent.com/90026952/208230695-ff4dd622-ae83-4732-862b-e660c65c8787.png"></img>
    </div>
    <div className='text-white'>
      <div className='max-w-[800px]  w-full h-screen  text-left flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 ml-[60px]'>
          GROWING WITH TECHNOLOGY
        </p>
        <div className='flex items-center ml-[60px]'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast and flexible for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Mobile', 'PC']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold ml-[60px] text-gray-500'>Free open source operating system for variable devices.</p>
        <div className="img-btn flex">
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-[60px] py-3 text-black'>Get AOSP</button>
          <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-[60px] py-3 text-black'>BLOG</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Hero;
