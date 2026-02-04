import React from 'react'
import Hero from './Hero'
import Review from '../About/Review'

const guide = [
    {id: 1, name: "Merrie Lewis", designation: "Tour Guide", image: "./images/Pages/team-1.jpg" },
    {id: 2, name: "Parks Missie", designation: "Tour Guide", image: "./images/Pages/team-2.jpg" },
    {id: 3, name: "Mariana Buenos", designation: "Tour Guide", image: "./images/Pages/team-3.jpg" },
    {id: 4, name: "Stephen Fowler", designation: "Tour Guide", image: "./images/Pages/team-4.jpg" },
    {id: 5, name: "Daisy Phillips", designation: "Tour Guide", image: "./images/Pages/team-5.jpg" },
    {id: 6, name: "Gregory Bowman", designation: "Tour Guide", image: "./images/Pages/team-6.jpg" }
]
function TourGuide() {
  return (
    <div>
      <Hero/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-5 lg:px-20">
                {guide.map((item) => (
                    <div key={item.id} className="relative group overflow-hidden shadow-lg rounded-2xl">
                    <img src={item.image} alt="" className='w-full h-120 object-cover' />
                    <div className="absolute bottom-0 left-0 w-full bg-white rounded-b-2xl p-5 text-center translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <h3 className="text-xl font-bold text-blue-950">{item.name}</h3>
                        <p className='mb-8'>{item.designation}</p>
                        <div className="flex justify-center gap-3">
                            <div className="bg-gray-200 rounded-full px-1.5 py-1"><i className="fa-brands fa-facebook-f text-gray-500"></i></div>
                            <div className="bg-gray-200 rounded-full px-1.5 py-1"><i className="fa-brands fa-twitter text-gray-500"></i></div>
                            <div className="bg-gray-200 rounded-full px-1.5 py-1"><i className="fa-brands fa-instagram text-gray-500"></i></div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <Review/>
    </div>
  )
}

export default TourGuide
