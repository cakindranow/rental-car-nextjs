import React from 'react'
import { cookies } from 'next/headers'
import SidebarListCar from '../Sidebar/sidebar_shop'
import ListCarComponent from '../Main/list_product'

const CarComponent = () => {
  const token = cookies().get('token')?.value
  return (
    <div className='bg-color-secondary h-screen w-full'>
    <div className='flex bg-color-secondary'>
    <SidebarListCar/>   
    <ListCarComponent token={token}/>
    </div>
    </div>
  )
}

export default CarComponent