import React from 'react'
import { cookies } from 'next/headers'
import SidebarListCar from '../Sidebar/sidebar_shop'
import ListCarComponent from '../Main/list_product'
import ListCarAdminComponent from '../Main/list_car_admin'

const CarAdminComponent = () => {
  const token = cookies().get('token')?.value
  return (
    <div className='bg-color-secondary h-screen w-full'>
    <div className=' bg-color-secondary'>
    <ListCarAdminComponent token={token}/>
    </div>
    </div>
  )
}

export default CarAdminComponent