import React from 'react'

function Leaderboard() {
  return (
    <>
      <div id='about' className='w-full py-[10rem] px-4 bg-white'>
        <div>
        <div className='md:text-4xl text-[#00df9a] sm:text-3xl font-bold py-2 ml-[70px] text-center mt-[-80px] pb-[80px]'>
        <h1 className='text-4xl'>The Denominators</h1>
        <p className='text-2xl text-black pt-[20px]'>Team Behind Pandora</p>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-4'>Saalim Quadri</h2>
              <p className='text-center text-2xl'>OS</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-4'>Pratyush Singh</h2>
              <p className='text-center text-2xl'>App</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-4'>Manas Kalra</h2>
              <p className='text-center text-2xl'>Frontend</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-4'>Rishita Dube</h2>
              <p className='text-center text-2xl'>Frontend</p>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Leaderboard
