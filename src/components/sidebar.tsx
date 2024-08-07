// components/Sidebar.tsx

import React from 'react';
import { FiHome, FiUser, FiSettings, } from 'react-icons/fi';
import styles from './Sidebar.module.css';
import { SheetDemo } from './formsheet';
import { AiOutlineStock } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import SparklesText from './magicui/sparkles-text';
import Loguser from './user';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo} >
      <img src='foxx.png' className='bg-transparent w-25 h-16 drop-shadow-2xl ' alt='Logo'/>
      <SparklesText text={'Fox Trade'} className=' text-xl'/>



       
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">
              <FiHome className={styles.icon} />
              Home
            </a>
          </li>
          <li>
            <SheetDemo>
              <FiUser className={styles.icon} />
              Profile
            </SheetDemo>
            </li>
          <li>
            <a href="/settings">
              <FiSettings className={styles.icon} />
              Settings
            </a>
          </li>
          <li>
            <a href="/settings">
              <AiOutlineStock className={styles.icon} />
              Stocks
            </a>
          </li>
          
           
          <li className='mt-80'>
          <div className='ml-5 mb-2'>
          <Loguser/> 
          </div>
          <hr className='w-3/4 border-cyan-50 mx-auto'></hr>
          
            <a href="/settings">
              <RiLogoutBoxLine className={styles.icon} />
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
