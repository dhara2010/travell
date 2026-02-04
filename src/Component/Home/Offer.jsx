import React from 'react'

function Offer() {
    return (
        <section className='relative w-full h-full overflow-hidden pb-20'>
            <img src="./images/offer-1.jpg" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='absolute bg-black/50 w-full h-full top-0 left-0'></div>
            <div className="relative z-10 text-white px-10 lg:px-20 pt-20">
                <p className='text-xl font-semibold pb-2'>DEALS & OFFERS</p>
                <h4 className='text-2xl lg:text-5xl font-bold font-serif'>Last Minute Amazing Deals</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-20">
                    <div className="relative h-66 rounded-2xl overflow-hidden">
                        <img src="./images/offer-2.jpg" alt="" className='absolute rounded-2xl top-0 left-0 w-full h-full object-cover' />
                        <div className='absolute bg-black/50 w-full h-full top-0 left-0 rounded-2xl'></div>
                        <div className="relative top-8 bg-white text-black w-20 rounded-tr-xl">
                            <p>Get 10% Off</p>
                        </div>
                        <div className="relative top-1/2 flex justify-between h-full p-4">
                            <p className="text-white text-2xl font-semibold">Norway Lake</p>
                            <p className="text-orange-500 text-3xl font-bold">$150</p>
                        </div>
                    </div>
                    <div className="relative h-66 rounded-2xl overflow-hidden">
                        <img src="./images/offer-3.jpg" alt="" className='absolute rounded-2xl top-0 left-0 w-full h-full object-cover' />
                        <div className='absolute bg-black/50 w-full h-full top-0 left-0 rounded-2xl'></div>
                        <div className="relative top-8 bg-white text-black w-20 rounded-tr-xl">
                            <p>Get 10% Off</p>
                        </div>
                        <div className="relative top-1/2 flex justify-between h-full p-4">
                            <p className="text-white text-2xl font-semibold">New york city</p>
                            <p className="text-orange-500 text-3xl font-bold">$150</p>
                        </div>
                    </div>
                    <div className="relative h-66 rounded-2xl overflow-hidden">
                        <img src="./images/offer-4.jpg" alt="" className='absolute rounded-2xl top-0 left-0 w-full h-full object-cover' />
                        <div className='absolute bg-black/50 w-full h-full top-0 left-0 rounded-2xl'></div>
                        <div className="relative top-8 bg-white text-black w-20 rounded-tr-xl">
                            <p>Get 10% Off</p>
                        </div>
                        <div className="relative top-1/2 flex justify-between h-full p-4">
                            <p className="text-white text-2xl font-semibold">Norway Lake</p>
                            <p className="text-orange-500 text-3xl font-bold">$150</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
