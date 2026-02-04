import React, { useState } from 'react'

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is the best time to visit?",
            answer: "The best time to visit depends on your destination. Generally, spring and fall offer pleasant weather and fewer crowds."
        },
        {
            question: "How do I book a trip?",
            answer: "You can book directly through our website or contact our travel specialists for personalized assistance."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We offer flexible cancellation policies. Most bookings can be cancelled up to 24-48 hours before departure."
        },
        {
            question: "Do you provide travel insurance?",
            answer: "Yes, we offer comprehensive travel insurance options to protect your trip investment."
        },
        {
            question: "Are group discounts available?",
            answer: "Yes, we offer special rates for groups of 10 or more people. Contact us for custom pricing."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                    >
                        <span className="font-semibold text-blue-950">{faq.question}</span>
                        <span className="text-xl font-bold text-blue-950">
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

function Que() {
    return (
        <section className='py-20 px-5 lg:px-20'>
            <div className='flex flex-col lg:flex-row max-w-7xl mx-auto px-5 lg:px-10 lg:gap-8'>
                <div className='lg:w-2/3 lg:pr-5'>
                    <div className="flex flex-col gap-3">
                        <p className='uppercase text-gray-500 font-semibold'>Choose Your Place</p>
                        <h1 className='text-2xl lg:text-6xl text-blue-950 font-bold max-w-xl font-serif'>Frequently Asked Question</h1>
                        <FAQAccordion />
                    </div>
                </div>
                <div className='lg:w-1/3 mt-10 lg:mt-0'>
                    <div className="bg-gray-100 p-3 lg:p-6 rounded-2xl">
                        <p className='text-blue-950 text-xl font-semibold max-w-sm mb-5 pt-3'>Ask Your Valuable Question</p>
                        <input type="text" placeholder='Your Name' className='bg-white rounded-2xl px-3 py-4 w-full mb-3' />
                        <input type="email" placeholder='Your Email' className='bg-white rounded-2xl px-3 py-4 w-full mb-3' />
                        <input type="number" placeholder='Your Number' className='bg-white rounded-2xl px-3 py-4 w-full mb-3' />
                        <textarea name="" id="" placeholder='Message' rows={5} className='bg-white rounded-2xl px-3 py-4 w-full mb-3'></textarea>
                        <button type="submit" className='relative w-full py-4 rounded-xl overflow-hidden bg-orange-400 text-white font-semibold group'>
                            <span className="relative z-10 transition-colors duration-300">Submit</span>
                            <span className="absolute left-0 bottom-0 w-full h-full bg-[#10103a] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Que
