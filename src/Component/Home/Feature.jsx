import React from 'react'

function Feature() {
    return (
        <section className='bg-[#f5f6f6] h-full w-full'>
            <div className="relative pt-20 item-center text-center">
                <div className='hidden md:block'>
                    <img src="./images/shape-1.png" alt="" className='left-10 top-10 absolute' />
                    <img src="./images/shape-2.png" alt="" className='left-55 top-40 absolute ' />
                    <img src="./images/shape-3.png" alt="" className='right-20 top-20 absolute' />
                </div>
                <div className="flex flex-col z-10 relative">
                    <p className='uppercase text-neutral-500 font-semibold'>Trawell Specials</p>
                    <h1 className='text-blue-950 text-2xl md:text-5xl font-bold'>Why Travel with Tutive?</h1>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 md:mx-20 py-20">
                    <div className='relative shadow-lg overflow-hidden bg-white rounded-2xl hover:scale-105'>
                        <img src="./images/feature-1.jpg" alt="" className='rounded-t-2xl w-full object-cover' />
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2">
                            <div className="bg-white p-4 shadow-xl rounded-full">
                                <i class="fa-solid fa-user-check text-orange-400 text-xl"></i>
                            </div>
                        </div>
                        <p className='text-xl text-blue-950 font-bold text-center px-5 py-8'>2000+ Our Worldwide Guides</p>
                    </div>
                    <div className='relative shadow-lg overflow-hidden bg-white rounded-2xl hover:scale-105'>
                        <img src="./images/feature-2.jpg" alt="" className='rounded-t-2xl w-full object-cover' />
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2">
                            <div className="bg-white p-4 shadow-xl rounded-full">
                                <i class="fa-solid fa-users text-orange-400 text-xl"></i>
                            </div>
                        </div>
                        <p className='text-xl text-blue-950 font-bold text-center px-5 py-8'>100+ Trusted Tour Agency</p>
                    </div>
                    <div className='relative shadow-lg overflow-hidden bg-white rounded-2xl hover:scale-105'>
                        <img src="./images/feature-3.jpg" alt="" className='rounded-t-2xl w-full object-cover' />
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2">
                            <div className="bg-white p-4 shadow-xl rounded-full">
                                <i class="fa-solid fa-arrows-rotate text-orange-400 text-xl"></i>
                            </div>
                        </div>
                        <p className='text-xl text-blue-950 font-bold text-center px-5 py-8'>12+ Years of Travel Experience</p>
                    </div>
                    <div className='relative shadow-lg overflow-hidden bg-white rounded-2xl hover:scale-105'>
                        <img src="./images/feature-4.jpg" alt="" className='rounded-t-2xl w-full object-cover' />
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2">
                            <div className="bg-white p-4 shadow-xl rounded-full">
                                <i class="fa-solid fa-star text-orange-400 text-xl"></i>
                            </div>
                        </div>
                        <p className='text-xl text-blue-950 font-bold text-center px-5 py-8'>2000+ of Our Travelers are Happy</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
