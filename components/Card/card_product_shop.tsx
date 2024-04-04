'use client'
import React from 'react'
import StrowberryImage from '@/public/assets/images/strowberry.jpg'
import MieImage from '@/public/assets/images/mie.png'

import Image from 'next/image'
import { CurrencyDollar } from '@phosphor-icons/react'
import { ProductInterface } from '@/interface/product'
import { useRouter } from 'next/navigation'
import { ToRupiah } from '@/util/rupiah'
import { CarResponseInterface } from '@/interface/car'

type Props =  {
    car : CarResponseInterface
}

export function CardCarShop({car} : Props) {
  const router = useRouter()
  const handleClickProdutDetail = () => {
    router.push(`/home/cars/item/${car.id}`)
  }
  return (
    <div className='col-span-4 h-[411px] bg-color-white rounded-xl'>
        <div className='flex justify-center'>
          <button type='button' onClick={handleClickProdutDetail}>
          <Image className='rounded-t-2xl h-56' width='400' height='100' src={car.image_url} alt=''/>
          </button>
        </div>
    <div className='bg-color-white h-[153px] mt-5 rounded-xl w-[331px] mx-auto'>
       <div className='p-3 flex-row'>
        <button type='button' onClick={handleClickProdutDetail}>
        <p className='text-m my-2 font-bold'>Brand :  {car.brand}</p>
        </button>
        <div className='h-16'>
        <p className='font-light text-m'>Model : {car.model}</p>
        </div>
        <div className='flex '>
        {/* <CurrencyDollar size={20} className='mt-[4px] mr-1' /> */}
        <p className='font-light text-m'>Rate : {ToRupiah(car.daily_rental_rate)} / Daily</p>
        </div>
       </div>
    </div>
</div>

  )
}
