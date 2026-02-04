import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
    { id: 1, name: "Mike Hardson", img: "./images/Pages/testimonial-1.png" },
    { id: 2, name: "Luaka Smith", img: "./images/Pages/testimonial-2.png" },
    { id: 3, name: "Amy Johnson", img: "./images/Pages/testimonial-3.png" },
    { id: 4, name: "Amy Johnson", img: "./images/Pages/testimonial-3.png" },
];
const duplicate = [...reviews, ...reviews];
function Review() {
    return (
        <div className='py-20 px-8 lg:px-22'>
            <div className="text-center">
                <p className='text-gray-400 font-semibold text-xl'>REVIEW & TESTIMONIALS</p>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-blue-950' >Top Reviews for Trawell</h1>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="px-4"
                >
                    {duplicate.map((review) => (
                        <SwiperSlide key={review.id} className="px-2 py-20">
                            <div className="flex justify-center gap-8">
                                <div className="relative bg-white p-8 rounded-2xl shadow-2xl flex flex-col text-center items-center">
                                    <div className="flex text-amber-500 mb-4 mt-6">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <img src="./images/Pages/quote-1.png" alt="quote" className='absolute top-30 w-20' />
                                    <p className='text-gray-500 font-semibold leading-loose px-4 z-10'>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                    <h5 className="mt-6 font-bold text-xl text-blue-950 mb-2">{review.name}</h5>
                                    <p className="text-gray-400 text-sm mb-10">Traveler</p>
                                    <div className="absolute -bottom-12 bg-white rounded-full p-1 shadow-lg z-20">
                                        <img src={review.img} alt="user" className="w-20 h-20 rounded-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    )
}

export default Review
