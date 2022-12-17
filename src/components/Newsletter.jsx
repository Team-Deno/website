import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';


const Newsletter = () => {
  return (
    <>
   <div className='w-full bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center mx-8'>
          <h1 className='md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold py-2 ml-[170px]'>Security</h1>
          <p className='text-white'>Your data, your rules. Along with monthly security updates to every supported device, we enhance existing privacy touchpoints around the OS and keep you informed of how the system shares your data. You can make your custom operating system stand out by building in strong security and privacy features that are not avaliable in other operating systems.</p>
        </div>
        <LightSpeed right>
        <img className='inline-block ml-[70px] my-2 fl ' width="500" src='https://lineageos.org/assets/img/security.png' alt='/' />
        </LightSpeed>
      </div>
    </div>
    </>
         
  );
};

export default Newsletter;

 
 