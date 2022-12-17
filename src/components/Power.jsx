import React from 'react'

const Power = () => {
  return (
    <>
    <div className='w-full bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src='https://user-images.githubusercontent.com/90026952/208236355-0963cee9-d9be-48eb-a30d-d929d53fe8df.jpeg' alt='/' />
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
    {/* <div>
      <div className="overlay" style={{ backgroundColor: "white" }}>
        <div className="row">
            <div className="col-1" />
            <div className="col-5">
                <div className="card" style={{ height: 450, marginTop: 25 }}>
                    <div className="card-body">
                    <h1 className="card-title">Power to you</h1>
                    <p className="card-text" style={{ fontSize: 20 }}>
                    
                    </p>
                </div>
            </div>
        </div>
        <div className="col-5">
            <img src="https://user-images.githubusercontent.com/90026952/208236355-0963cee9-d9be-48eb-a30d-d929d53fe8df.jpeg" style={{ height: 500, width: 500 }} />
        </div>
        </div>
    </div> */}
    </>
  )
}

export default Power
