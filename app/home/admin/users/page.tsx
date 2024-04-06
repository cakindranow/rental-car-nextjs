import HomeComponent from '@/components/Main/home'
import ListProductComponent from '@/components/Main/list_product'
import Navbar from '@/components/Navbar/page'
import ListOrderComponent from '@/components/Shop/list_order'
import OrderAdminComponent from '@/components/Shop/list_order_admin'
import UserAdminComponent from '@/components/Shop/list_user_admin'
import CarComponent from '@/components/Shop/page'
import { cookies } from 'next/headers'
import React from 'react'

const User = () => {
  const isAdmin = cookies().get('is_admin')?.value
  return (
    <div className='bg-color-secondary'>
        <Navbar is_admin={isAdmin}/>
       <UserAdminComponent/>
    </div>
  )
}

export default User