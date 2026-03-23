import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.rishi_name_white : assets.rishi_name_dark} alt='logo' className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6' />
                Rishibalanp@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
                <li>
                    <a href="https://github.com/rishibalanp" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rishibalan-panneerselvam-18b476302/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer