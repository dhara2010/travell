import React, { useState } from 'react'

function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(null)
    
    const images = [
        "./images/Pages/gallery-1.jpg",
        "./images/Pages/gallery-2.jpg",
        "./images/Pages/gallery-3.jpg",
        "./images/Pages/gallery-4.jpg",
        "./images/Pages/gallery-6.jpg",
        "./images/Pages/gallery-5.jpg",
        "./images/Pages/gallery-9.jpg",
        "./images/Pages/gallery-1.jpg",
        "./images/Pages/gallery-6.jpg",
        "./images/Pages/gallery-7.jpg",
        "./images/Pages/gallery-3.jpg",
        "./images/Pages/gallery-4.jpg"
    ]

    const openLightbox = (index) => {
        setCurrentImageIndex(index)
    }

    const closeLightbox = () => {
        setCurrentImageIndex(null)
    }

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
    }
    return (
        <div>
            <div className='relative w-full h-80 overflow-hidden mt-20'>
                <img src="/images/Pages/page-title-4.jpg" alt="" className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Gallery</h1>
                </div>
            </div>
            <div className="py-20 px-5 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {images.map((src, index) => (
                        <div className="bg-white shadow-2xl p-4 rounded-2xl">
                            <img 
                            key={index}
                            src={src} 
                            alt="" 
                            className='h-full w-full object-cover cursor-pointer hover:opacity-80 transition-opacity' 
                            onClick={() => openLightbox(index)}
                        />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {currentImageIndex !== null && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                        <div className="relative max-w-4xl max-h-full p-4">
                            <img 
                                src={images[currentImageIndex]} 
                                alt="" 
                                className="max-w-full max-h-full object-contain"
                            />
                            
                            {/* Close Button */}
                            <button 
                                onClick={closeLightbox}
                                className="absolute -top-10 -right-10 text-black text-3xl hover:bg-red-400 hover:text-white bg-white/80 rounded-full w-10 h-10 flex items-center justify-center"
                            >
                                ×
                            </button>
                            
                            {/* Previous Button */}
                            <button 
                                onClick={prevImage}
                                className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black text-4xl hover:text-orange-400 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center"
                            >
                                ‹
                            </button>
                            
                            {/* Next Button */}
                            <button 
                                onClick={nextImage}
                                className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black text-4xl hover:text-orange-400 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery
