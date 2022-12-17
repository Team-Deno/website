import React from 'react';
import Roll from 'react-reveal/Roll';

const Analytics = () => {
  return (
    <>
   <div id='features' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center mx-8'>
          <h1 className='md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold py-2 ml-[70px]'>Add Custom Features</h1>
          <p className='text-black'>
            You can differentiate your customized operating features by adding features that are not avaliable in other operating systems. These include new tools or utilities oe innovative ways of interacting with the system. 
          </p>
        </div>
        <Roll right>
          <img className='inline-block ml-[100px] my-2 fl ' width="300" src='https://user-images.githubusercontent.com/90026952/208234625-1febbc9b-6087-4907-b37c-15bcc8ea8e2b.png' alt='/' />
        </Roll>
      </div>
    </div>
    </>
  );
};



export default Analytics;