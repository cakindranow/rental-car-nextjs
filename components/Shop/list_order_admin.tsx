import React from 'react'
import { cookies } from 'next/headers'
import SidebarListCar from '../Sidebar/sidebar_shop'
import ListCarComponent from '../Main/list_product'
import ListOrderComponent from '../Main/list_order'
import ListOrderAdminComponent from '../Main/list_order_admin'

const OrderAdminComponent = () => {
  const token = cookies().get('token')?.value
  return (
    <div className='bg-color-secondary h-screen w-full'>
      <div className='flex bg-color-secondary items-center justify-center'>
        <ListOrderAdminComponent token={token}/>
      </div>
    </div>
  )
}

export default OrderAdminComponent