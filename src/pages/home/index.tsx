import SearchBar from '@/components/SearchBar'
import Sidebar from '@/components/sidebar'
import React from 'react'
import styles from '../../components/SearchBar.module.css';
import AvatarComponent from '@/components/AvatarComponent';
import { SheetDemo } from '@/components/formsheet';
import { ModeToggle } from '@/components/dark';
import Chart from '@/components/chart';
import { CardWithForm } from '@/components/dashcard';
import ListCard from '@/components/listCard';
import { BoxRevealDemo } from '@/components/magicCard';
import SparklesText from '@/components/magicui/sparkles-text';
import { IconCloudDemo } from '@/components/slug';
import { ScrollBasedVelocityDemo } from '@/components/scroll';

const index = () => {
  return (
    <div >
      <Sidebar />

      <main className={styles.main}>
        
        <SearchBar />
        <AvatarComponent />
        <div className='w-3/4 ml-72 mb-3'>
          <ScrollBasedVelocityDemo/>
        </div>
        <div className='flex gap-32 ml-56'>
          <Chart />
          <CardWithForm />
        </div>
        <div className='ml-64 '>
          <ListCard />
          </div>
          <div className='ml-64 flex'>
          <BoxRevealDemo/>
          <IconCloudDemo/>
          </div>
          
        
        
        <SheetDemo children={undefined} />
      </main>

    </div>
  )
}

export default index