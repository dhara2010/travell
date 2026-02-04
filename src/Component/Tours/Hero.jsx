import React from 'react'

function Hero() {
    return (
       <section>
         <div className='relative w-full h-80 overflow-hidden mt-20'>
            <img src="/images/tour/hero.jpg" alt="" className='absolute inset-0 w-full h-full object-cover' />
            <div className='absolute inset-0 bg-black/50'></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">Tours</h1>
            </div>
        </div>
        <div className="relative left-1/2 translate-x-[-50%] md:-top-10 w-11/12 lg:w-3/4 bg-white rounded-xl shadow-2xl p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
                    <input type="text" className='border border-gray-300 rounded-2xl px-5 py-4 w-full focus:outline-none' placeholder='Where To?' />
                    <input type="month" onFocus={(e) => e.target.showPicker()} className='border border-gray-300 rounded-2xl px-5 py-4 w-full pr-12 focus:outline-none text-gray-600' placeholder='When' />
                    <select name="type" id="type" className='border border-gray-300 rounded-2xl px-5 py-4 w-full appearance-none focus:outline-none'>
                        <option value="Adventure">Adventure Tours</option>
                        <option value="City">City Tours</option>
                        <option value="Couple">Couple Tours</option>
                        <option value="Group">Group Tours</option>
                    </select>
                    <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold rounded-2xl px-6 py-4 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-magnifying-glass"></i> Find Now
                    </button>
                </div>
            </div>
       </section>
    )
}

export default Hero
