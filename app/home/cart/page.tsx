import product from '@/app/products/page'
import CartComponent from '@/components/Cart/page'
import FooterComponent from '@/components/Footer/page'
import HomeComponent from '@/components/Main/home'
import Navbar from '@/components/Navbar/page'
import { cookies } from 'next/headers'
import React from 'react'

const Cart = () => {
    const token = cookies().get('token')?.value
    return (
        <div className='flex flex-col h-full bg-color-gray'>
            <Navbar/>
            <CartComponent token={token}/>
            <FooterComponent/>
        </div>
    )
}

export default Cart