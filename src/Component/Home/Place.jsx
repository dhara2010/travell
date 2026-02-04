import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const places = [
    { id: 1, title: "Mont Blanc", img: "/images/place-1.jpg" },
    { id: 2, title: "Mont Blanc", img: "/images/place-2.jpg" },
    { id: 3, title: "Mont Blanc", img: "/images/place-3.jpg" }
];
const duplicate = [...places, ...places]

function Place() {
    return (
        <section className='py-20 bg-neutral-200 text-center'>
            <p className='uppercase text-neutral-500 font-semibold mb-2'>CHOOSE YOUR PLACE</p>
            <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mb-10'>Popular Destinations</h1>
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
                className="max-w-6xl mx-auto px-4"
            >
                {duplicate.map((place) => (
                    <SwiperSlide key={place.id}>
                        <div className="flex justify-center">
                            <div className="relative rounded-full border-4 lg:border-12 border-white overflow-hidden">
                                <img src={place.img} alt={place.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                                    {place.title}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Place
