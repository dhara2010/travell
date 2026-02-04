import React from 'react'

function Adventure() {
    return (
        <section className='flex flex-col items-center text-center py-20 px-10 lg:px-24'>
            <p className='uppercase text-neutral-500 font-semibold mb-2'>MODERN & BEAUTIFUL</p>
            <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mb-4'>Our Most Popular Adventures</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 gap-6">
                <div className="bg-white shadow-xl rounded-2xl p-5 group hover:scale-102">
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <img src="./images/tour-1.jpg" alt="" className='rounded-2xl group-hover:scale-105'/>
                        <div className='max-w-xs text-left'>
                            <h5 className='text-[#10103a] font-bold text-3xl'>Miami Red City Land</h5>
                            <p className='mt-1'><span className='text-xl font-bold text-orange-400'>$190</span> / Per person</p>
                            <p className='mt-3 text-neutral-500'>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                            <button className='mt-4 border p-3 hover:bg-orange-400 transition-transform rounded-full hover:text-white hover:shadow-2xl'>See Details</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-5 group hover:scale-102">
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <img src="./images/tour-2.jpg" alt="" className='rounded-2xl group-hover:scale-105'/>
                        <div className='max-w-xs text-left'>
                            <h5 className='text-[#10103a] font-bold text-3xl'>Miami Red City Land</h5>
                            <p className='mt-1'><span className='text-xl font-bold text-orange-400'>$185</span> / Per person</p>
                            <p className='mt-3 text-neutral-500'>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                            <button className='mt-4 border p-3 hover:bg-orange-400 transition-transform rounded-full hover:text-white hover:shadow-2xl'>See Details</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-5 group hover:scale-102">
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <img src="./images/tour-3.jpg" alt="" className='rounded-2xl group-hover:scale-105'/>
                        <div className='max-w-xs text-left'>
                            <div className="flex text-gray-400 items-center gap-2">
                                <ul className='text-[12px]  '>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </ul>
                                <p>1 Review</p>
                            </div>
                            <h5 className='text-[#10103a] font-bold text-3xl'>Vancouver Red City Land</h5>
                            <p className='mt-1'><span className='text-xl font-bold text-orange-400'>$150</span> / Per person</p>
                            <p className='mt-3 text-neutral-500'>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                            <button className='mt-4 border p-3 hover:bg-orange-400 transition-transform rounded-full hover:text-white hover:shadow-2xl'>See Details</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-5 group hover:scale-102">
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <img src="./images/tour-4.jpg" alt="" className='rounded-2xl group-hover:scale-105'/>
                        <div className='max-w-xs text-left'>
                            <div className="flex text-gray-400 items-center gap-2">
                                <ul className='text-[12px]  '>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star text-yellow-400"></i>
                                    <i class="fa-solid fa-star"></i>
                                </ul>
                                <p>1 Review</p>
                            </div>
                            <h5 className='text-[#10103a] font-bold text-3xl'>Vancouver Red City Land</h5>
                            <p className='mt-1'><span className='text-xl font-bold text-orange-400'>$175</span> / Per person</p>
                            <p className='mt-3 text-neutral-500'>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                            <button className='mt-4 border p-3 hover:bg-orange-400 transition-transform rounded-full hover:text-white hover:shadow-2xl'>See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Adventure
