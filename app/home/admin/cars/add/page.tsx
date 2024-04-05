import HomeComponent from '@/components/Main/home'
import Navbar from '@/components/Navbar/page'
import CarComponent from '@/components/Shop/page'
import React from 'react'
import NextNProgress from 'nextjs-progressbar';
import CarAdminComponent from '@/components/Shop/car_admin';
import CarAddAdminComponent from '@/components/Shop/car_add_admin';

const Car = () => {
  return (

    <div className='bg-color-secondary'>
        <Navbar/>
       <CarAddAdminComponent/>
    </div>
  )
}

export default Car