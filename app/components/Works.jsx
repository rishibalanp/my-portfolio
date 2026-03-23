import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Works = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
            {/* <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4> */}
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My Projects</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${isDarkMode ? "dark:text-white/80" : ""}`}>
                A collection of projects showcasing my expertise in Angular development, modern UI architecture, and full-stack web application development.
            </motion.p>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9}}
                className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 ${isDarkMode ? "dark:text-black" : ""}`}>
                {workData.map(({ title, description, bgImage }, index) => (
                    
                    <motion.div 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                    key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{title}</h2>
                                <p className='text-sm text-gray-700'>{description}</p>
                            </div>
                            {title && (
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <a href="https://furniture-webapp-front-end.vercel.app/login" target="_blank">
                                        <Image src={assets.send_icon} alt='arrow' className='w-5' />
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Works