import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
    return (
        <div>
            <div className='relative w-full h-80 overflow-hidden mt-20'>
                <img src="/images/Pages/page-title-5.jpg" alt="" className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Error Page</h1>
                </div>
            </div>
            <div className="py-20 text-center justify-center">
                <h1 className='text-red-500 text-3xl md:text-5xl lg:text-[200px] font-bold'>404</h1>
                <p className='text-blue-950 font-semibold text-2xl mb-10'>Oops! That page is not found.</p>
                <Link to='/'>
                <button type="submit" className='relative px-10 py-4 rounded-xl overflow-hidden bg-orange-400 text-white font-semibold group'>
                    <span className="relative z-10 transition-colors duration-300">Go To Home</span>
                    <span className="absolute left-0 bottom-0 w-full h-full bg-[#10103a] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Error
