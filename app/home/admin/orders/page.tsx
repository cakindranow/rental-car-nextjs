import HomeComponent from '@/components/Main/home'
import ListProductComponent from '@/components/Main/list_product'
import Navbar from '@/components/Navbar/page'
import ListOrderComponent from '@/components/Shop/list_order'
import OrderAdminComponent from '@/components/Shop/list_order_admin'
import CarComponent from '@/components/Shop/page'
import React from 'react'

const Car = () => {
  return (
    <div className='bg-color-secondary'>
        <Navbar/>
       <OrderAdminComponent/>
    </div>
  )
}

export default Car