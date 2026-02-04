import React from "react";

function Info() {
    return (
        <section className="py-20 px-5 lg:px-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                <div>
                    <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase">Get in Touch </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 leading-tight mt-3 mb-6 max-w-xl font-serif">Feel Free to Contact with us</h2>
                    <p className="text-gray-600 max-w-md leading-relaxed mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ultrices ipsum suspend ultrices gravida risus commodo. </p>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-google-plus-g"></i>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-8 lg:p-10 -ml-10">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="col-span-1 px-5 py-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-orange-400"/>
                        <input type="email" placeholder="Email Address" className="col-span-1 px-5 py-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-orange-400"/>
                        <input type="text" placeholder="Phone Number" className="col-span-1 px-5 py-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-orange-400"/>
                        <input type="text" placeholder="Subject" className="col-span-1 px-5 py-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-orange-400"/>
                        <textarea rows="5" placeholder="Write Message" className="col-span-1 md:col-span-2 px-5 py-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-orange-400 resize-none"></textarea>
                        <button type="submit" className="col-span-1 md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Info;
