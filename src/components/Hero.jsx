import React from 'react';
import { useState } from 'react';
import styles from '../styles';
import { backgroundimg } from '../assets'
const Hero = () => {
  return (
    <section id='home' className={`bg-cover bg-bottom flex bg-fixed mt-20 lg:flex-row sm:bg-left flex-col w-full`} style={{ backgroundImage: `url(${backgroundimg})`}}
    
  
    >
        <div className='bg-black bg-opacity-70 w-full h-[400px]'>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 p-20`}>
            <div className={`${styles.flexCenter} mt-20 flex-col w-[800px] h-[100%] mb-5 rounded-xl`}>

            <div className={`${styles.flexCenter} rounded-full`}
            >
                <h1 className='flex-1 justify-center  font-poppins font-bold sm:text-[52px] text-[22px] text-gray-400 sm:leading-[80.8px] leadig-[75px]'>
                My<span className='text-amber-400'> Blog</span>
                </h1>
            </div>
            <div className='text-white font-poppins font-bold sm:text-[17px] text-[8px]'>
            <p className='text-white'>You're not alone. Learn from other leaders that are serving in the trenches.</p>
            </div>
        
                <div className='text-white font-poppins font-bold sm:text-[17px] text-[8px]'>

                   <div className={`${styles.flexCenter} w-[100%] h-[3px] bg-gray-400 rounded-full`}>
                    <div className='w-[50%] h-[3px] bg-amber-400'></div>
                   </div>
                </div>

            </div>
           
        </div>

        </div>
    </section>
  )
}

export default Hero