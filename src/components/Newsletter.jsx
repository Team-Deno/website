import React from 'react';

const Newsletter = () => {
  return (
    <div className=' bg-[#202626]'>
     <div className='max-w-[1000px] mx-auto  grid md:grid-cols-2'>
      <div className='flex flex-col justify-center space-y-1'>
      <h1 className='text-white md:text-4xl sm-text-3xl font-bold py-2 mt-[300px]'>SECURITY</h1>
      <p className='text-white text- 2.125rem;'>Your data, your rules. Along with monthly security updates to every supported device, we enhance existing privacy touchpoints around the OS and keep you informed of how the system shares your data.</p>
     </div>
      </div>
    <div className="right">
      <img className=" w-60 ml-auto max-w-lg h-auto "src="https://lineageos.org/assets/img/security.png " alt="" />
     
    </div>
    </div>
                    
         
  );
};

export default Newsletter;
