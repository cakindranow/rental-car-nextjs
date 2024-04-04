'use client'
import React from 'react'
import GroceryImage from '@/public/assets/images/grocery.png'
import Image from 'next/image'
import StrowberryImage from '@/public/assets/images/strowberry.jpg'
import vegetableImage from '@/public/assets/images/vegetable.png'

import { CardProduct } from '../Card/card_product_home'

const listProduct = [
    {
        id: 1,
        name : 'Indomie Mac and Cheese',
        imageURL : 'https://img.freepik.com/premium-photo/traditional-italian-pasta-with-tomato-sauce-basil-cheese-black-background-top-down-view-with-copy-space_221774-9149.jpg?w=1380',
        price : 234,
        desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis'
    },
    {
        id : 2,
        name : 'Roti Bakar',
        imageURL : 'https://img.freepik.com/free-photo/bread-wooden-tray-red-white-cloth_1150-23896.jpg?t=st=1711077771~exp=1711081371~hmac=164a634f6de80490e695eb3ff5a79756e0f75a4a8c40138747ec5946a0039fab&w=1380',
        price : 234,
        desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis'
    },
    {
        id : 3,
        name : 'Ice Tea',
        imageURL : 'https://img.freepik.com/premium-photo/red-cocktail-with-ice-mint_97245-841.jpg?w=1060',
        price : 234,
        desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis'
    },
    {
        id : 4,
        name : 'Green Tea',
        imageURL : 'https://img.freepik.com/free-photo/front-view-green-smoothie-glass-with-ingredients_23-2148526573.jpg?t=st=1711077967~exp=1711081567~hmac=a4c2a4bbd04af64e10dcbe6c711c350f0636f95f5e70df25af33994a4ff91a90&w=1380',
        price : 234,
        desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis'
    }
]

const HomeComponent = () => {
    return (
        <div className='bg-color-secondary'>
            <div className='mx-64 h-[30rem] mt-10 flex gap-5 bg-color-blue-dark rounded-3xl'>
                <div className='w-1/2 ml-16'>
                    <p className='text-xl font-bold text-color-white mt-20'>Top Seller in the week</p>
                    <p className='text-5xl font-bold mt-4 text-color-white '>Kedai</p>
                    <p className='text-5xl font-bold  text-color-white'>Truly's Store</p>
                    <p className='font-light mt-4  text-color-white'>Jalan Minasa Upa Blok D 13 No 12, Kec. Rappocini, Kel. Gunung Sari, Ujung Pandang</p>
                    <button className='mt-10 bg-color-green h-12 w-40 rounded-2xl text-color-white font-bold'>Shop Now</button>
                </div>
                <div className=' w-1/2'>
                    <Image src={GroceryImage} alt='' className='h-[27rem] w-[27rem]' />
                </div>
            </div>
            <div className='my-10'>
                <p className='flex justify-center text-3xl mt-14 font-bold'>Weekly Food Offers</p>
                <p className='flex justify-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='mx-64 p-4'>
                <div className='grid grid-cols-12 gap-4'>
                   {listProduct.map((product, idx) => (
                    <CardProduct name={product.name} imageURL={product.imageURL} desc={product.desc} price={product.price}/>
                   ))}   
                </div>
            </div>

            <div className='my-10 flex flex-row justify-between mx-64'>
                <div className='bg-color-green h-[220px] w-[450px] flex justify-between rounded-xl'>
                    <div className=' ml-5 mt-8'>
                        <p className='text-sm font-bold text-color-yellow'>TOP OFFERS</p>
                        <p className='text-2xl font-bold mt-2 text-color-white'>Eat Green </p>
                        <p className='text-2xl font-bold text-color-white'>Best For Family</p>
                        <p className='mt-8 text-color-white'>Free Shipping 05km</p>
                    </div>
                    <div className=''>
                        <Image src={vegetableImage} className='w-[240px] mt-[34px] rounded-br-xl' alt='' />
                    </div>
                </div>
                <div className='bg-color-orange h-[220px] w-[450px] flex justify-between rounded-xl'>
                    <div className=' ml-5 mt-8'>
                        <p className='text-sm font-bold text-color-white'>WEEKEND DEALS</p>
                        <p className='text-2xl font-bold mt-2 text-color-white'>Fresh Food </p>
                        <p className='text-2xl font-bold text-color-white'>Bestore Health</p>
                        <p className='mt-8 text-color-white'>Top Quality Products</p>
                    </div>
                    <div className=''>
                        <Image src={vegetableImage} className='w-[240px] mt-[34px] rounded-br-xl' alt='' />
                    </div>
                </div>
                <div className='bg-color-red h-[220px] w-[450px] flex justify-between rounded-xl'>
                    <div className=' ml-5 mt-8'>
                        <p className='text-sm font-bold text-color-white'>TOP SELLERS</p>
                        <p className='text-2xl font-bold mt-2 text-color-white'>Healthy</p>
                        <p className='text-2xl font-bold text-color-white'>Fresh Free Bread</p>
                        <p className='mt-8 text-color-white'>Limited Time : Online Only!</p>
                    </div>
                    <div className=''>
                        <Image src={vegetableImage} className='w-[240px] mt-[34px] rounded-br-xl' alt='' />
                    </div>
                </div>
            </div>

            <div className='my-10'>
                <p className='flex justify-center text-3xl mt-14 font-bold'>Weekly Food Offers</p>
                <p className='flex justify-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='mx-64 p-4'>
                <div className='grid grid-cols-12 gap-4'>
                   {listProduct.map((product, idx) => (
                    <CardProduct key={product.id} name={product.name} desc={product.desc} imageURL={product.imageURL} price={product.price}/>
                   ))}   
                </div>
            </div>
        </div>
    )
}

export default HomeComponent