import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-left h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl mt-[5px] font-bold text-[#00df9a]'>Pandora OS</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-blue-700 cursor-pointer'>
          <a href="#home">Home</a></li>
        <li className='p-4 hover:text-blue-700 cursor-pointer'><a href="#features">Features</a></li>
        <li className='p-4 hover:text-blue-700 cursor-pointer'><a href="#about">About</a></li>
        <li className='p-4 hover:text-blue-700 cursor-pointer'><a href="#contact">Contact</a></li>
        <li className='p-4 hover:text-blue-700 cursor-pointer'><a href='https://katb.in/ulazeciviqe'>Instructions</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Pandora OS</h1>
          <li className='text-left p-4 border-b border-gray-600'><a className='hover:text-blue-700 cursor-pointer'>Home</a></li>
          <li className='text-left p-4 border-b border-gray-600'><a className='hover:text-blue-700 cursor-pointer'>Features</a></li>
          <li className='text-left p-4 border-b border-gray-600'><a className='hover:text-blue-700 cursor-pointer'>About</a></li>
          <li className='text-left p-4 border-b border-gray-600'><a className='hover:text-blue-700 cursor-pointer'>Legal</a></li>

      </ul>
    </div>
  );
};

export default Navbar;
