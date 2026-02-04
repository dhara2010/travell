import React from 'react'

const content = [
    {
        title: "New York City",
        img: "/images/destination/place-1.jpg"
    },
    {
        title: "Mont Blanc",
        img: "/images/destination/place-2.jpg"
    },
    {
        title: "Norway Lake",
        img: "/images/destination/place-3.jpg"
    },
    {
        title: "Affrican Park",
        img: "/images/destination/place-4.jpg"
    },
    {
        title: "Vietnam",
        img: "/images/destination/place-5.jpg"
    },
    {
        title: "Netharlands",
        img: "/images/destination/place-9.jpg"
    },
    {
        title: "Greece",
        img: "/images/destination/place-10.jpg"
    },
    {
        title: "Australia",
        img: "/images/destination/place-11.jpg"
    },
    {
        title: "Costa Rica",
        img: "/images/destination/place-12.jpg"
    }
];
function Images() {
    return (
        <section className='py-20 px-5 lg:px-20'>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-9">
                {content.map((item, index) => (
                    <div key={index} className="relative border-4 lg:border-14 border-white overflow-hidden shadow-2xl">
                        <img src={item.img} alt='img' className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
                            {item.title}
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Images
