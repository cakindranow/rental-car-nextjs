import HomeComponent from '@/components/Main/home'
import Navbar from '@/components/Navbar/page'
import CarComponent from '@/components/Shop/page'
import React from 'react'
import NextNProgress from 'nextjs-progressbar';
import CarAdminComponent from '@/components/Shop/car_admin';
import { cookies } from 'next/headers';

const Car = () => {
  const isAdmin = cookies().get('is_admin')?.value
  return (

    <div className='bg-color-secondary'>
        <Navbar is_admin={isAdmin}/>
       <CarAdminComponent/>
    </div>
  )
}

export default Car