import React from 'react'

function Footer() {
    return (
        <section className='relative h-full w-full overflow-hidden p-10 lg:p-22'>
            <img src="/images/shape-5.png" alt="" className='absolute top-0 left-0 w-full h-full object-cover z-50' />
            <div className='absolute bg-blue-950 w-full h-full top-0 left-0 z-10'></div>
            <div className="relative grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 z-10 text-white gap-6">
                <div className='flex flex-col gap-4'>
                    <img src="/images/logo.png" alt="" className='w-40 mb-5' />
                    <p className='text-gray-300'>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
                    <ul className='flex gap-2 mt-10'>
                        <li className='bg-neutral-700 px-2 py-1.5 rounded-full'><i class="fa-brands fa-facebook-f"></i></li>
                        <li className='bg-neutral-700 px-2 py-1.5 rounded-full'><i class="fa-brands fa-twitter"></i></li>
                        <li className='bg-neutral-700 px-2 py-1.5 rounded-full'><i class="fa-brands fa-instagram"></i></li>
                        <li className='bg-neutral-700 px-2 py-1.5 rounded-full'><i class="fa-brands fa-google-plus-g"></i></li>
                        <li className='bg-neutral-700 px-2 py-1.5 rounded-full'><i class="fa-brands fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 md:items-center'>
                    <h1 className='text-2xl font-bold mb-5'>Services</h1>
                    <ul className='space-y-3 text-gray-300'>
                        <li>About Us</li>
                        <li>How it Works</li>
                        <li>Our Blog</li>
                        <li>Our Services</li>
                        <li>Contact Us</li>
                        <li>Listing</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl font-bold mb-5'>Gallery</h1>
                    <div className="grid grid-cols-3 gap-1">
                        <img src="/images/footer-gallery-1.jpg" alt="" className='rounded-md' />
                        <img src="/images/footer-gallery-2.jpg" alt="" className='rounded-md' />
                        <img src="/images/footer-gallery-3.jpg" alt="" className='rounded-md' />
                        <img src="/images/footer-gallery-4.jpg" alt="" className='rounded-md' />
                        <img src="/images/footer-gallery-5.jpg" alt="" className='rounded-md' />
                        <img src="/images/footer-gallery-6.jpg" alt="" className='rounded-md' />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className='text-2xl font-bold mb-5'>Contact Us</h1>
                    <div className="flex gap-4 items-center">
                        <i class="fa-solid fa-location-dot text-orange-400"></i>
                        <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <i class="fa-solid fa-microphone text-orange-400"></i>
                        <p>+2(305) 587-3407</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <i class="fa-solid fa-envelope text-orange-400"></i>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
