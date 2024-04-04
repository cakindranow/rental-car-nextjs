'use client'
import React from 'react'
import StrowberryImage from '@/public/assets/images/strowberry.jpg'
import MieImage from '@/public/assets/images/mie.png'

import Image from 'next/image'
import { CurrencyDollar } from '@phosphor-icons/react'

type Props =  {
    name : string
    imageURL : string
    price : number
    desc : string
}

export function CardProduct({name, imageURL, price, desc} : Props) {
  return (
    <div className='col-span-3 h-[446px] bg-color-white rounded-xl'>
        <div className='flex justify-center'>
        <Image className='rounded-t-2xl h-64' width='1000' height='4000' src={imageURL} alt=''/>
        </div>
    <div className='bg-color-white h-[164px] mt-2 rounded-xl w-[320px] mx-auto'>
       <div className='p-3 flex-row'>
        <p className='text-[15px] my-2 font-bold'>{name}</p>
        <div className='h-16'>
        <p className='font-light text-sm'>{desc}</p>
        </div>
        <div className='flex mt-2'>
        {/* <CurrencyDollar size={20} className='mt-[4px] mr-1' /> */}
        <p className='font-light text-m'>Rp {price}</p>
        </div>
       </div>
    </div>
</div>
  )
}
