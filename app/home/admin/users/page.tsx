import HomeComponent from '@/components/Main/home'
import ListProductComponent from '@/components/Main/list_product'
import Navbar from '@/components/Navbar/page'
import ListOrderComponent from '@/components/Shop/list_order'
import OrderAdminComponent from '@/components/Shop/list_order_admin'
import UserAdminComponent from '@/components/Shop/list_user_admin'
import CarComponent from '@/components/Shop/page'
import React from 'react'

const User = () => {
  return (
    <div className='bg-color-secondary'>
        <Navbar/>
       <UserAdminComponent/>
    </div>
  )
}

export default User