import React from 'react'

function Company() {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <p className="uppercase text-sm font-semibold text-gray-500 mb-4">About Trawell </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1d3a] leading-tight">World Best Travel Agency Company Since 2008. </h1>
                <p className="text-gray-500 mt-6 max-w-lg leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra. </p>
                <button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition">
                    Find Tours
                </button>
            </div>
            <div className="relative flex justify-center lg:justify-end">
                <div className="rounded-2xl bg-white overflow-hidden shadow-2xl p-3 z-10 relative">
                    <img src="/images/Pages/about.jpg" alt="Travel" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Company
