import HomeComponent from '@/components/Main/home'
import ListProductComponent from '@/components/Main/list_product'
import Navbar from '@/components/Navbar/page'
import CarComponent from '@/components/Shop/page'
import React from 'react'

const Car = () => {
  return (
    <div className='bg-color-secondary'>
        <Navbar/>
       <CarComponent/>
    </div>
  )
}

export default Car