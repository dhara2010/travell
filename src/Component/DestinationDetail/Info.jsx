import React from 'react'

function Info() {
    return (
        <div className='flex flex-col lg:flex-row max-w-7xl mx-auto py-20 px-5 lg:px-20 md:gap-8'>
            <div className='lg:w-2/3 lg:pr-5 lg:border-r lg:border-gray-200'>
                <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mb-4'>Mont Blanc Mountain</h1>
                <p className="text-gray-600 mb-6 tracking-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <img src="/images/destination/destination-1.jpg" alt="img" />
                    <img src="/images/destination/destination-2.jpg" alt="img" />
                    <img src="/images/destination/destination-3.jpg" alt="img" />
                </div>
                <p class="text-gray-600 my-10 mb-8 tracking-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <h2 className='my-3 text-[#10103a] text-xl font-semibold md:text-3xl'>Country Details</h2>
                <p className="text-gray-600 mb-6 tracking-wider">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <table className='w-60 md:w-full border border-gray-300 md:p-0'>
                    <tbody>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fas fa-map-marker-alt text-orange-400 w-5"></i> Address:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">New York City</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-brands fa-cc-visa text-orange-400 w-5"></i> Visa Requirements:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">Yes Requard</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-solid fa-globe text-orange-400 w-5"></i> Country:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">New York City</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-regular fa-comments text-orange-400 w-5"></i> Languages spoken:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">English & Spanish</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-solid fa-dollar-sign text-orange-400 w-5"></i> Currency Used:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">USD</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-solid fa-phone text-orange-400 w-5"></i> Suport Phone:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">+310215402</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-regular fa-envelope text-orange-400 w-5"></i> Emergency Email:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">info@example.com</td>
                        </tr>
                        <tr className='border-b border-gray-300 p-3 md:p-0'>
                            <td className="flex items-center gap-3 py-3 px-1 md:p-4 font-semibold text-gray-700"> <i className="fa-regular fa-map text-orange-400 w-5"></i> Distance:</td>
                            <td className="py-3 px-1 md:p-4 text-gray-600">10.7m</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mt-10 my-4'>Photo Gallery</h1>
                <p className="text-gray-600 mb-6 tracking-wider">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img src="/images/destination/destination-1.jpg" alt="" className='w-full h-full' />
                    <img src="/images/destination/destination-2.jpg" alt="" className='w-full h-full' />
                    <img src="/images/destination/destination-3.jpg" alt="" className='w-full h-full' />
                    <img src="/images/destination/destination-4.jpg" alt="" className='w-full h-full md:col-span-2' />
                    <img src="/images/destination/destination-5.jpg" alt="" className='w-full h-full' />
                </div>
                <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mt-10 my-4'>View on map</h1>
                <p className="text-gray-600 mb-6 tracking-wider">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat duis aute irure dolor.</p>
                <div className="md:w-full h-100 rounded-lg overflow-hidden shadow">
                    <iframe title="Google Map" src="https://www.google.com/maps?q=New+York+City&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
                </div>
                <h3 className='text-[#10103a] text-3xl font-bold mt-20 mb-6'>Leave a Comment</h3>
                <p className="text-gray-600 mb-6 tracking-wider">You must be <span className='text-blue-500'>logged in</span> to post a comment.</p>
            </div>
            <div className='lg:w-1/3'>
                <div className='bg-white p-2 lg:p-10 shadow-2xl mb-10'>
                    <input type="search" className='border-2 border-gray-300 rounded-2xl p-2 py-3 px-1 md:p-4' placeholder='Search'/>
                </div>
                <div className="bg-white p-2 lg:p-5 shadow-2xl">
                <h3 className='text-[#10103a] text-2xl font-bold my-6'>Latest News</h3>
                    <div className="flex">
                        <img src="/images/destination/news-1.jpg" alt="img" className='rounded-full h-20'/>
                        <div className='ml-4'>
                            <p className='text-gray-500 text-sm'>Februay 9, 2021</p>
                            <h4 className='text-[#10103a] text-xl font-bold'>Including animation in your design system</h4>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <img src="/images/destination/news-2.jpg" alt="img" className='rounded-full h-20'/>
                        <div className='ml-4'>
                            <p className='text-gray-500 text-sm'>Februay 9, 2021</p>
                            <h4 className='text-[#10103a] text-xl font-bold'>Including animation in your design system</h4>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <img src="/images/destination/news-3.jpg" alt="img" className='rounded-full h-20'/>
                        <div className='ml-4'>
                            <p className='text-gray-500 text-sm'>January 28, 2021</p>
                            <h4 className='text-[#10103a] text-xl font-bold'>Including animation in your design system</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
