import React from 'react'

function Hero() {
    return (
        <section className='relative w-full h-80 overflow-hidden md:mt-20'>
            <img src="/images/page-title.jpg" alt="" className='absolute inset-0 w-full h-full object-cover' />
            <div className='absolute inset-0 bg-black/50'></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">Destination</h1>
            </div>
        </section>
    )
}

export default Hero
