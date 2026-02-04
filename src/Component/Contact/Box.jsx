import React from 'react'

function Box() {
    return (
        <div className='py-30 px-5 lg:px-20 bg-gray-200'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-2xl p-8 flex gap-5 items-start group">
                    <div className="w-20 h-14 bg-gray-200 rounded-full flex items-center justify-center text-orange-400 group-hover:text-white group-hover:bg-orange-400">
                        <i class="fa-solid fa-map-marker-alt text-xl"></i>
                    </div>
                    <div className='text-left'>
                        <h3 className="text-2xl font-bold mb-2 text-blue-950">Address</h3>
                        <p className="text-gray-600">31 park street, 5th Avenue, Dhanmondy, Dhaka.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-8 flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-orange-400 group-hover:text-white group-hover:bg-orange-400">
                        <i class="fa-solid fa-phone text-xl"></i>
                    </div>
                    <div className='text-left'>
                        <h3 className="text-2xl font-bold mb-2 text-blue-950">Phone</h3>
                        <p className="text-gray-600">+31 666 888 0001</p>
                        <p className="text-gray-600">+31 666 888 0023</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-8 flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-orange-400 group-hover:text-white group-hover:bg-orange-400">
                        <i class="fa-solid fa-envelope text-xl"></i>
                    </div>
                    <div className='text-left'>
                        <h3 className="text-2xl font-bold mb-2 text-blue-950">Email</h3>
                        <p className="text-gray-600">info@example.com</p>
                        <p className="text-gray-600">info@example.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Box
