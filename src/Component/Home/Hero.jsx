import React from 'react'

function Hero() {
    return (
        <section className='relative w-full h-screen overflow-hidden'>
            <img src="./images/img1.jpg" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='absolute bg-black/50 w-full h-full top-0 left-0'></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Where will you go next?
                </h1>
                <p className="max-w-xl text-sm md:text-lg text-gray-200">
                    Welcome to Travell, a theme carefully crafted for travelers and adventurers.
                    Pack your bags, hit the road and don't forget to write down all of your amazing stories!
                </p>
            </div>
        </section>
    )
}

export default Hero
