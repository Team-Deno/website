import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Power = () => {
  return (
    <>
    <div className='w-full bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Zoom>
            <img className='w-[500px] mx-auto my-4' src='https://user-images.githubusercontent.com/90026952/208236355-0963cee9-d9be-48eb-a30d-d929d53fe8df.jpeg' alt='/' />
        </Zoom>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold py-2'>Power to you</h1>
          {/* <p className='text-[#00df9a] font-bold '>Power To You</p> */}
          <p className='text-white'>
                    Our open-source apps are here to help you get through the day.
                    <br/>
                    Want to do more with your device?
                    <br/>
                    Power users will enjoy Unix command-line utilities.
                    <br/>
                    Android developers will turn any device into the perfect device
                    <br/>
                    for apps development thanks to enhanced tools and exclusive APIs.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Power
