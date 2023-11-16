import React from 'react'
import styles from '../styles'
import { book3, books, laptop, reading, book2, book4 } from '../assets'

export const Business = () => {
  return (
    <section id='blogs' className={`mt-10 px-10 ${styles.flexCenter}`}>
         
    <div className='flex lg:flex-row flex-col'> 
        
    <div className=''>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
       
        <div className={`w-[100%] h-[100%] mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900'>
            <img src={book3} alt="icon1" className='w-[100%] h-[100%]' />
        </div>
          <h1 className='mt-4 text-black font-poppins font-bold sm:text-[20px] text-[22px] sm:leading-[40.8px] leadig-[65px]'>Motion Graphics</h1>
          <p className={`${styles.paragraph} text-center text-black`}>
          Motion graphics designers aim to engage viewers, convey information clearly, and leave a lasting impression.
          </p>
        </div>
      
    </div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
    
        <div className={`w-[100%] h-[100%] mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900'>
            <img src={books} alt="icon1" className='w-[100%] h-[100%]' />
        </div>
          <h1 className='mt-4 text-black font-poppins font-bold sm:text-[20px] text-[22px] sm:leading-[40.8px] leadig-[65px]'>Responsive Design</h1>
          <p className={`${styles.paragraph} text-center text-black`}>
            Responsive design is an approach to web design and development that aims to make websites and web applications 
          </p>
      </div>
 
    </div>

    </div>
    <div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
       
        <div className={`w-[100%] h-[100%] mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900'>
            <img src={reading} alt="icon1" className='w-[100%] h-[100%]' />
        </div>
          <h1 className='mt-4 text-black font-poppins font-bold sm:text-[20px] text-[22px] sm:leading-[40.8px] leadig-[65px]'>Motion Graphics</h1>
          <p className={`${styles.paragraph} text-center text-black`}>
          Motion graphics designers aim to engage viewers, convey information clearly, and leave a lasting impression.
          </p>
        </div>
      
    </div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
    
        <div className={`w-[100%] h-[100%] mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900'>
            <img src={laptop} alt="icon1" className='w-[100%] h-[100%]' />
        </div>
          <h1 className='mt-4 text-black font-poppins font-bold sm:text-[20px] text-[22px] sm:leading-[40.8px] leadig-[65px]'>Responsive Design</h1>
          <p className={`${styles.paragraph} text-center text-black`}>
            Responsive design is an approach to web design and development that aims to make websites and web applications 
          </p>
      </div>
 
    </div>

    </div>
    <div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
       
        <div className={`w-[100%] h-[100%] mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900'>
            <img src={book2} alt="icon1" className='w-[100%] h-[100%]' />
        </div>
          <h1 className='mt-4 text-black font-poppins font-bold sm:text-[20px] text-[22px] sm:leading-[40.8px] leadig-[65px]'>Motion Graphics</h1>
          <p className={`${styles.paragraph} text-center text-black`}>
          Motion graphics designers aim to engage viewers, convey information clearly, and leave a lasting impression.
          
          </p>
        </div>
      
    </div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
    
        <div className={`w-[100%] h-[100%] mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900'>
            <img src={book4} alt="icon1" className='w-[100%] h-[100%]' />
        </div>
          <h1 className='mt-4 text-black font-poppins font-bold sm:text-[20px] text-[22px] sm:leading-[40.8px] leadig-[65px]'>Responsive Design</h1>
          <p className={`${styles.paragraph} text-center text-black`}>
            Responsive design is an approach to web design and development that aims to make websites and web applications 
         
          </p>
      </div>
 
    </div>

    </div>
    </div>
    {/* </div> */}
</section>
  )
}
