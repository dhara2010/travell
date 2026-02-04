import React from 'react'

const deal = [
    { id: 1, name: "New york city", price: "150", image: "./images/Pages/offer-1.jpg" },
    { id: 2, name: "Vietnam", price: "170", image: "./images/Pages/offer-2.jpg" },
    { id: 3, name: "Norway Lake", price: "190", image: "./images/Pages/offer-3.jpg" },
    { id: 3, name: "New york city", price: "150", image: "./images/Pages/offer-4.jpg" },
    { id: 3, name: "Vietnam", price: "170", image: "./images/Pages/offer-5.jpg" },
    { id: 3, name: "Norway Lake", price: "190", image: "./images/Pages/offer-6.jpg" },
]
function Deals() {
    return (
        <section className='py-20 px-5 lg:px-22 text-center'>
            <p className='uppercase text-neutral-500 font-semibold mb-2'>DEALS & OFFERS</p>
            <h1 className='text-[#10103a] text-3xl md:text-5xl font-bold mb-10'>Last Minute Amazing Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {deal.map((item) => (
                    <div key={item.id} className="relative h-66 rounded-2xl overflow-hidden">
                        <img src={item.image} alt="" className='absolute rounded-2xl top-0 left-0 w-full h-full object-cover' />
                        <div className='absolute bg-black/50 w-full h-full top-0 left-0 rounded-2xl'></div>
                        <div className="relative top-8 bg-white text-black w-20 rounded-tr-xl">
                            <p>Get 10% Off</p>
                        </div>
                        <div className="relative top-1/2 flex justify-between h-full p-4">
                            <p className="text-white text-2xl font-semibold">{item.name}</p>
                            <p className="text-orange-500 text-3xl font-bold">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Deals
