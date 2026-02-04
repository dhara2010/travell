import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import { Link } from 'react-router-dom';

const menus = [
    {
        key: "destinations",
        label: "Destinations",
        items: [{ name: "Destinations", path: "/destination" },
        { name: "Destination Details", path: "/destinationdetails" },
        ],
    },
    {
        key: "tours",
        label: "Tours",
        items: [{ name: "Tours List", path: "/tours" },
        { name: "Tours Details", path: "/tours-details" },],
    },
    {
        key: "pages",
        label: "Pages",
        items: [{ name: "About", path: "/about" },
        { name: "Tour Deals", path: "/tourdeals" },
        { name: "Tour Guide", path: "/tourguide" },
        { name: "FAQ", path: "/faq" },
        { name: "Gallery", path: "/gallery" },
        { name: "404", path: "/error" },],
    }
];


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <nav className='fixed top-0 left-0 z-50 w-full flex justify-between items-center bg-blue-950 text-white px-7 py-3 lg:px-20'>
            <img src="/images/logo.png" alt="" />
            <ul className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-8 font-semibold absolute lg:static top-full left-0 w-full lg:w-auto bg-blue-950 lg:bg-transparent transition-all duration-300`}>
                <li className='px-6 py-2 lg:p-0'><Link to="/">Home</Link></li>
                {menus.map((menu) => (
                    <li key={menu.key} className="relative group" onClick={() => toggleMenu(menu.key)} >
                        <div className="flex justify-between items-center px-6 py-2 lg:py-6 lg:p-0 cursor-pointer">
                            {menu.label}
                            <i className={`fa-solid fa-angle-down transition-transform duration-300 lg:group-hover:rotate-180 ${activeMenu === menu.key ? "rotate-180 lg:rotate-0" : ""}`} />
                        </div>
                        <ul className={`overflow-hidden scroll-auto bg-blue-900 lg:bg-white lg:text-gray-800 lg:absolute lg:top-full lg:w-56 lg:rounded-xl lg:shadow-xl transition-all duration-300 ease-in-out ${activeMenu === menu.key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} lg:max-h-none lg:opacity-0 lg:scale-95 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:pointer-events-auto`}>
                            {menu.items.map((item, i) => (
                                <li key={i} className="px-10 py-3 lg:px-6 hover:text-orange-400 transition border-b lg:border-none cursor-pointer" onClick={() => setMenuOpen(false)}><Link to={item.path} className="block w-full">{item.name}</Link></li>
                            ))}
                        </ul>
                    </li>
                ))}

                <li className='px-6 py-2 lg:p-0'><Link to='/contact'>Contact</Link></li>
            </ul>

            <ul className='hidden lg:flex gap-6 py-2'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user"></i>
            </ul>
            {
                menuOpen ? (
                    <RiCloseLine size={30} className='lg:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => setMenuOpen(false)} />
                ) :
                    <RiMenu2Line size={30} className='lg:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => setMenuOpen(true)} />
            }
        </nav >
    )
}

export default Navbar
