import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef(null);
    const isOpenMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const isCloseMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, [])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 translate-y-[-80%] -z-10 dark:hidden'>
                <Image src={assets.header_bg_color} alt='header background' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 1g:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? `bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ${isDarkMode ? "dark:bg-darkTheme dark:shadow-white/20" : ""}` : ""}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.rishi_name_white : assets.rishi_name_dark} className='w-28 cursor-pointer mr-14' alt='logo'></Image>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "":"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li>
                        <a className='font-Ovo' href="#top">Home</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#about">About Me</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#services">Experience</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#work">My projects</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#contact">Contact</a>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='cursor-pointer' onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className='w-6' />
                    </button>
                    <a href="#contact" className={`font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ${isDarkMode ? "dark:border-white/50 dark:bg-transparent" : ""}`}> Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Contact" className='w-3' />
                    </a>
                    <button className='block md:hidden ml-3 cursor-pointer' onClick={isOpenMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className='w-6' />
                    </button>
                </div>

                <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${isDarkMode ? "dark:bg-darkHover dark:text-white" : ""}`}>
                    <div className='absolute right-6 top-6' onClick={isCloseMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className='w-6 cursor-pointer' />
                    </div>
                    <li>
                        <a className='font-Ovo' onClick={isCloseMenu} href="#top">Home</a>
                    </li>
                    <li>
                        <a className='font-Ovo' onClick={isCloseMenu} href="#about">About Me</a>
                    </li>
                    <li>
                        <a className='font-Ovo' onClick={isCloseMenu} href="#services">Services</a>
                    </li>
                    <li>
                        <a className='font-Ovo' onClick={isCloseMenu} href="#work">My Projects</a>
                    </li>
                    <li>
                        <a className='font-Ovo' onClick={isCloseMenu} href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar