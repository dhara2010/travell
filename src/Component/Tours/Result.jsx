import React, { useState } from 'react'

function Result() {
  const [view, setView] = useState("list");
  const [month, setMonth] = useState("");
  const [tour, setTour] = useState("");
  const [time, setTime] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2500);
  const itemsPerPage = 5;

  const content = [
    {
      id: 1,
      name: "Miami Red City Land",
      price: "$190",
      image: "/images/tour/tour-3.jpg",
      rating: 0,
      reviews: 0
    },
    {
      id: 2,
      name: "Miami Red City Land",
      price: "$185",
      image: "/images/tour/tour-2.jpg"
    },
    {
      id: 3,
      name: "Vancouver Red City Land",
      price: "$150",
      image: "/images/tour/tour-1.jpg",
      rating: 3,
      reviews: 1,
    },
    {
      id: 4,
      name: "Vancouver Red City Land",
      price: "$175",
      image: "/images/tour/tour-3.jpg",
      rating: 4,
      reviews: 1,
    },
    {
      id: 5,
      name: "Moscow Red City Land",
      price: "$170",
      image: "/images/tour/tour-2.jpg",
      rating: 4,
      reviews: 1,
    },
    {
      id: 6,
      name: "Miami Red City Land",
      price: "$190",
      image: "/images/tour/tour-3.jpg",
      rating: 0,
      reviews: 0
    },
    {
      id: 7,
      name: "Miami Red City Land",
      price: "$185",
      image: "/images/tour/tour-2.jpg"
    },
    {
      id: 8,
      name: "Vancouver Red City Land",
      price: "$150",
      image: "/images/tour/tour-1.jpg",
      rating: 3,
      reviews: 1,
    },
    {
      id: 9,
      name: "Vancouver Red City Land",
      price: "$175",
      image: "/images/tour/tour-3.jpg",
      rating: 4,
      reviews: 1,
    },
    {
      id: 10,
      name: "Moscow Red City Land",
      price: "$170",
      image: "/images/tour/tour-2.jpg",
      rating: 4,
      reviews: 1,
    },
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(content.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedContent = content.slice(startIndex, endIndex);
  return (
    <section className='my-20'>
      <div className='flex flex-col lg:flex-row max-w-7xl mx-auto px-5 lg:px-10 lg:gap-8'>
        <div className='lg:w-2/3 lg:pr-5 lg:border-r lg:border-gray-200'>
          <div className="flex justify-between items-center">
            <h2 className='text-2xl font-bold text-[#10103a]'>Showing 1-6 Out of 6 Results.</h2>
            <div className="flex gap-3">
              <button onClick={() => setView("list")} className={`w-12 h-12 rounded-lg flex items-center justify-center ${view === "list" ? "bg-orange-500 text-white" : "border border-gray-300 text-gray-600"}`}>
                <i className="fa-solid fa-list"></i>
              </button>
              <button onClick={() => setView("grid")} className={`w-12 h-12 rounded-lg flex items-center justify-center ${view === "grid" ? "bg-orange-500 text-white" : "border border-gray-300 text-gray-600"}`}>
                <i className="fa-solid fa-grip"></i>
              </button>
            </div>
          </div>
          <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-8 mt-10" : "flex flex-col gap-10 mt-10"} >
            {paginatedContent.map((item) => (
              <div className="bg-white p-6 rounded-2xl shadow-2xl mt-10">
                <div className={view === "grid" ? "flex flex-col gap-4" : "flex flex-col md:flex-row gap-8"}>
                  <img src={item.image} alt="" className={view === "grid" ? "w-full h-56 object-cover rounded-2xl" : "w-full md:w-1/3 h-58 object-cover rounded-2xl"} />
                  <div className='space-y-3 text-gray-400'>
                    {item.reviews > 0 && (
                      <div className="flex items-center gap-1 text-xs">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className={`fa-solid fa-star ${star <= item.rating ? "text-amber-400" : "text-gray-300"}`}></i>
                        ))}
                        <span className="ml-2 text-gray-500">
                          {item.reviews} Review
                        </span>
                      </div>
                    )}
                    <h3 className='text-2xl font-bold text-[#10103a]'>{item.name}</h3>
                    <p><span className='text-orange-400 font-bold text-xl'>{item.price}</span> / Per Person</p>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                    <button className='border border-gray-400 text-gray-600 rounded-md p-4 transition-colors hover:bg-orange-400 hover:text-white'>See Details</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="flex items-center gap-4 mt-16">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className={`w-12 h-12 rounded-full flex items-center justify-center ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#10103a] text-white hover:bg-black"}`}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button key={page} onClick={() => setCurrentPage(page)} className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition ${currentPage === page ? "bg-orange-400 text-white" : "bg-white text-[#10103a] shadow"}`} >
                  {page}
                </button>
              );
            })}
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className={`w-12 h-12 rounded-full flex items-center justify-center ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#10103a] text-white hover:bg-black"}`}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className='lg:w-1/3 mt-10 lg:mt-0'>
          <div className='bg-white p-2 md:p-6 lg:p-10 shadow-2xl mb-10 rounded-2xl'>
            <h1 className='text-2xl text-[#10103a] font-bold mb-3'>Search Tours</h1>
            <input type="search" className='border-2 border-gray-300 rounded-2xl p-2 py-3 px-1 md:p-4 w-full' placeholder='Search' />
          </div>
          <div className='bg-white p-2 md:p-6 lg:p-10 shadow-2xl mb-10 rounded-2xl'>
            <h1 className='text-2xl text-[#10103a] font-bold mb-3'>Month</h1>
            <div className="flex flex-col space-y-3 text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={month === "April"} onChange={() => setMonth("April")} className="accent-orange-400" />
                April
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={month === "June"} onChange={() => setMonth("June")} className="accent-orange-400" />
                June
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={month === "May"} onChange={() => setMonth("May")} className="accent-orange-400" />
                May
              </label>
            </div>
          </div>
          <div className='bg-white p-2 md:p-6 lg:p-10 shadow-2xl mb-10 rounded-2xl'>
            <h1 className='text-2xl text-[#10103a] font-bold mb-3'>Categories</h1>
            <div className="flex flex-col space-y-3 text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tour === "Adventure Tours"} onChange={() => setTour("Adventure Tours")} className="accent-orange-400" />
                Adventure Tours
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tour === "City Tours"} onChange={() => setTour("City Tours")} className="accent-orange-400" />
                City Tours
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tour === "Couple Tours"} onChange={() => setTour("Couple Tours")} className="accent-orange-400" />
                Couple Tours
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tour === "Group Tours"} onChange={() => setTour("Group Tours")} className="accent-orange-400" />
                Group Tours
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tour === "Hosted Tours"} onChange={() => setTour("Hosted Tours")} className="accent-orange-400" />
                Hosted Tours
              </label>
            </div>

          </div>
          <div className='bg-white p-2 md:p-6 lg:p-10 shadow-2xl mb-10 rounded-2xl'>
            <h1 className='text-2xl text-[#10103a] font-bold mb-3'>Price Range</h1>
            <div className="flex justify-between text-gray-400 mb-4">
              <span>{min.toFixed(2)}</span>
              <span>{max.toFixed(2)}</span>
            </div>
            <div className="relative h-2">
              <div className="absolute w-full h-1 bg-gray-300 rounded"></div>
              <div className="absolute h-1 bg-orange-400 rounded" style={{ left: `${(min / 5000) * 100}%`, right: `${100 - (max / 5000) * 100}%`, }} ></div>
              <input type="range" min="0" max="5000" step="10" value={min} onChange={(e) => setMin(Math.min(Number(e.target.value), max - 10))} className="range-thumb" />
              <input type="range" min="0" max="5000" step="10" value={max} onChange={(e) => setMax(Math.max(Number(e.target.value), min + 10))} className="range-thumb" />
            </div>
          </div>
          <div className='bg-white p-2 md:p-6 lg:p-10 shadow-2xl mb-10 rounded-2xl'>
            <h1 className='text-2xl text-[#10103a] font-bold mb-3'>Durations</h1>
            <div className="flex flex-col space-y-3 text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={time === "0 - 24 hours"} onChange={() => setTime("0 - 24 hours")} className="accent-orange-400" />
                0 - 24 hours
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={time === "1 - 2 days"} onChange={() => setTime("1 - 2 days")} className="accent-orange-400" />
                1 - 2 days
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={time === "2 - 3 days"} onChange={() => setTime("2 - 3 days")} className="accent-orange-400" />
                2 - 3 days
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={time === "3 - 4 days"} onChange={() => setTime("3 - 4 days")} className="accent-orange-400" />
                3 - 4 days
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={time === "4 - 5 days"} onChange={() => setTime("4 - 5 days")} className="accent-orange-400" />
                4 - 5 days
              </label>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Result
