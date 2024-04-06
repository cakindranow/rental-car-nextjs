import HomeComponent from '@/components/Main/home'
import ListProductComponent from '@/components/Main/list_product'
import Navbar from '@/components/Navbar/page'
import ListOrderComponent from '@/components/Shop/list_order'
import OrderAdminComponent from '@/components/Shop/list_order_admin'
import CarComponent from '@/components/Shop/page'
import { cookies } from 'next/headers'
import React from 'react'

const Car = () => {
  const isAdmin = cookies().get('is_admin')?.value
  return (
    <div className='bg-color-secondary'>
        <Navbar is_admin={isAdmin}/>
       <OrderAdminComponent/>
    </div>
  )
}

export default Car