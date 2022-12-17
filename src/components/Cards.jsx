import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
            
              <h2 className='text-2xl font-bold text-center py-4'>Bench Mark</h2>
              <p className='text-center text-4xl font-bold'>1,94,200</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>CPU: 67761 </p>
                  <p className='py-2 border-b mx-8'>GPU:32801</p>
                  <p className='py-2 border-b mx-8'>MEM:37712</p>
                  <p className='py-2 border-b mx-8'>UX:55926</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Android Version</h2>
              <p className='text-center text-4xl font-bold'>12</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Security Update: July 5,2022 </p>
                  <p className='py-2 border-b mx-8'>Google Play System Update: <span className='font -weight:400'>12</span></p>
                  
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Business Models</h2>
              <p className='text-center text-4xl font-bold'>3</p>
              <div className='text-center font-medium mt-[10px]'>
                  <p className='py-2 border-b mx-8 mt-8'>Device-based model</p>
                  <p className='py-2 border-b mx-8'>Service-based model</p>
                  <p className='py-2 border-b mx-8'>Freemium model</p>
                 
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
