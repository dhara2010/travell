import React from 'react'

function About() {
  return (
    <section className='relative w-full py-10 pt-20 overflow-hidden'>
        <img src="./images/shape-4.png" alt="" className='absolute left-0 top-1/2 -translate-y-1/2 opacity-10'/>
        <div className="relative max-w-7xl mx-auto px-6 md:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="bg-white p-3 shadow-2xl rouded-lg">
                    <img src="./images/about.jpg" alt="" className='rounded-lg'/>
                </div>
                <div className="max-w-lg">
                    <p className='uppercase text-neutral-500 font-semibold tracking-widest mb-2'>ABOUT TRAVIO</p>
                    <h1 className='text-blue-950 text-3xl md:text-5xl font-bold mb-4'>Best Travel Agency Since 2008.</h1>
                </div>
            </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="max-w-lg lg:text-right">
                    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <h1 className='text-blue-950 text-xl font-bold mb-4'>Find Your Best Destination</h1>
                </div>
                 <div className="bg-white p-3 shadow-2xl rouded-lg">
                    <img src="./images/about-2.jpg" alt="" className='rounded-lg'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
