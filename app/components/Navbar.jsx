import React, {useRef} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {

    const sideMenuRef = useRef(null);
    const isOpenMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const isCloseMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 translate-y-[-80%] -z-10'>
                <Image src={assets.header_bg_color} alt='header background' className='w-full' />
            </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-transparent z-50'>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo'></Image>
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 backdrop-blur-sm'>
                    <li>
                        <a className='font-Ovo' href="#top">Home</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#about">About Me</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#services">Services</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#work">My work</a>
                    </li>
                    <li>
                        <a className='font-Ovo' href="#contact">Contact</a>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='cursor-pointer'>
                        <Image src={assets.moon_icon} alt="theme" className='w-6' />
                    </button>
                    <a href="#contact" className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 '> Contact <Image src={assets.arrow_icon} alt="Contact" className='w-3' />
                    </a>
                    <button className='block md:hidden ml-3 cursor-pointer' onClick={isOpenMenu}>
                        <Image src={assets.menu_black} alt="menu" className='w-6' />
                    </button>
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={isCloseMenu}>
                        <Image src={assets.close_black} alt="close" className='w-6 cursor-pointer' />
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
                        <a className='font-Ovo' onClick={isCloseMenu} href="#work">My work</a>
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