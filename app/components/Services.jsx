import { assets,experienceData} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
            {/* <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4> */}
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My Experience</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${isDarkMode ? "dark:text-white/80" : ""}`}>
                Frontend developer based in Chennai with 5 years of experience specializing in Angular and SAP Spartacus,
                building scalable and modern web applications.</motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                {experienceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index} className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 ${isDarkMode ? "dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50" : ""}`}>
                        <Image src={icon} alt='icon' className='w-10' />
                        <h3 className={`text-lg my-4 text-gray-700 ${isDarkMode ? "dark:text-white" : ""}`}>{title}</h3>
                        <p className={`text-sm text-gray-600 leading-5 ${isDarkMode ? "dark:text-white/80" : ""}`}>{description}</p>
                        {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt='arrow' className='w-4' />
                    </a> */}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services