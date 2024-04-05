import React from 'react'
import { cookies } from 'next/headers'
import SidebarListCar from '../Sidebar/sidebar_shop'
import ListCarComponent from '../Main/list_product'
import CarAddComponent from '../Main/add_car'

const CarAddAdminComponent = () => {
  const token = cookies().get('token')?.value
  return (
    <div className='bg-color-secondary h-screen w-full'>
    <div className=' bg-color-secondary'>
    <CarAddComponent token={token}/>
    </div>
    </div>
  )
}

export default CarAddAdminComponent