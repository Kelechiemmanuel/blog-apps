import { useState } from 'react';
import React from 'react';
import styles from './styles';
import { navLinks } from './constant';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Business } from './components/Business';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`bg-gray-300 ${styles.flexCenter}`}>
          <Navbar />
      </div>

      <div className={`${styles.flexStart}`}>
          <Hero />
      </div>
      <div className={`${styles.flexStart}`}>
          <Business />
      </div>
    </div>
  )
}

export default App