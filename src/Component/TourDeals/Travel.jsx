import React, { useState } from 'react'

function Travel() {
   const [activeMarker, setActiveMarker] = useState(null);
    return (
        <section className='py-20 px-5 lg:px-22 bg-neutral-200 text-center'>
            <p className='uppercase text-neutral-500 font-semibold mb-2'>MODERN & BEAUTIFUL</p>
            <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mb-10'>Explore the World for Travel</h1>
            <div className="hidden md:block relative">
                <img src="./images/Pages/map-1.png" alt="" />
                <div className="absolute top-20 left-1/8 cursor-pointer" onClick={() => setActiveMarker(activeMarker === 1 ? null : 1)}>
                    <div className="relative w-fit">
                        <img src="./images/Pages/marker-1.png" alt="" className='block' />
                        <p className='absolute text-white font-bold text-xl inset-0 flex items-center justify-center -top-2'>1</p>
                    </div>
                </div>
                {activeMarker === 1 && (
                    <div className={`absolute top-40 left-1/9 z-10 bg-gray-200 shadow-2xl rounded-md p-2 max-w-sm transition-all duration-300 ease-out ${activeMarker === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                       <div className="bg-white p-6 text-left">
                         <h3 className="text-2xl font-bold text-blue-950 mb-2"> Moscow City </h3>
                        <p className="text-gray-500 leading-relaxed">Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt. </p>
                       </div>
                    </div>
                )}
                <div className="absolute top-100 left-1/6 cursor-pointer" onClick={() => setActiveMarker(activeMarker === 2 ? null : 2)}>
                    <div className="relative w-fit">
                        <img src="./images/Pages/marker-1.png" alt="" className='block' />
                        <p className='absolute text-white font-bold text-xl inset-0 flex items-center justify-center -top-2'>2</p>
                    </div>
                </div>
                 {activeMarker === 2 && (
                    <div className={`absolute top-120 left-1/6 z-10 bg-gray-200 shadow-2xl rounded-md p-2 max-w-sm transition-all duration-300 ease-out ${activeMarker === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                       <div className="bg-white p-6 text-left">
                         <h3 className="text-2xl font-bold text-blue-950 mb-2"> African Park </h3>
                        <p className="text-gray-500 leading-relaxed">Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt. </p>
                       </div>
                    </div>
                )}
                <div className="absolute top-5 right-1/2 cursor-pointer" onClick={() => setActiveMarker(activeMarker === 3 ? null : 3)}>
                    <div className="relative w-fit">
                        <img src="./images/Pages/marker-1.png" alt="" className='block' />
                        <p className='absolute text-white font-bold text-xl inset-0 flex items-center justify-center -top-2'>3</p>
                    </div>
                </div>
                 {activeMarker === 3 && (
                    <div className={`absolute top-25 right-1/4 z-10 bg-gray-200 shadow-2xl rounded-md p-2 max-w-sm transition-all duration-300 ease-out ${activeMarker === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                       <div className="bg-white p-6 text-left">
                         <h3 className="text-2xl font-bold text-blue-950 mb-2"> Norway Lake</h3>
                        <p className="text-gray-500 leading-relaxed">Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt. </p>
                       </div>
                    </div>
                )}
                <div className="absolute top-60 right-1/5 cursor-pointer" onClick={() => setActiveMarker(activeMarker === 4 ? null : 4)}>
                    <div className="relative w-fit">
                        <img src="./images/Pages/marker-1.png" alt="" className='block' />
                        <p className='absolute text-white font-bold text-xl inset-0 flex items-center justify-center -top-2'>4</p>
                    </div>
                </div>
                 {activeMarker === 4 && (
                    <div className={`absolute top-80 -right-20 z-10 bg-gray-200 shadow-2xl rounded-md p-2 max-w-sm transition-all duration-300 ease-out ${activeMarker === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                       <div className="bg-white p-6 text-left">
                         <h3 className="text-2xl font-bold text-blue-950 mb-2"> New York City </h3>
                        <p className="text-gray-500 leading-relaxed">Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt. </p>
                       </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Travel
