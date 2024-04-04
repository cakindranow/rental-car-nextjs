'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { profileEnd } from 'console'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ProductType, getListProductResponse } from '@/lib/product'
import { ProductInterface } from '@/interface/product'
import WeekendPromoImage from '@/public/assets/images/weekend-promo.png'
import { ToRupiah } from '@/util/rupiah'
import { addProductToCart } from '@/lib/cart'
import { CartProductInterface } from '@/interface/cart'
import { useRouter } from 'next/navigation'
import { CarResponseInterface } from '@/interface/car'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type carDetailProps = {
  car: CarResponseInterface
  token: string | undefined
}
const OrderCarComponent = ({ car, token }: carDetailProps) => {
  const router = useRouter();
  const handleClickOrderCar = () => {
    router.push(`/home/cars/order/${car.id}`)
  }
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className='mt-16'>
      <div className=' h-screen grid grid-cols-10 mx-64 gap-6'>
        <div className='bg-color-white col-span-8 rounded-xl'>
          <div className='ml-16'>
            <p className='mt-10 text-4xl font-semibold'>{car.brand} {car.model}</p>
          </div>
          <hr className='mt-7 opacity-15' />
          <div className='flex gap-2'>
            <Image className='ml-16 mt-10 rounded-xl' src={car.image_url} alt='' width='500' height='500' />
            <div className='ml-16 mt-10'>

              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="startdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                  <DatePicker className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' selected={startDate} onChange={(date:any) => setStartDate(date)} />
                </div>
                <div className="mb-5">
                  <label htmlFor="enddate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                  <DatePicker className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' selected={startDate} onChange={(date:any) => setStartDate(date)} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</button>
              </form>

            </div>
          </div>
          <hr className='mt-10 opacity-25' />
        </div>

        <div className=' col-span-2 rounded-xl'>

          <div className='w-full h-[400px] bg-color-blue-dark rounded-xl'>
            <div className='flex flex-col'>
              <p className='mt-14 ml-10 text-color-yellow font-semibold'>HOT DEALS</p>
              <p className='mt-2 ml-10 text-xl font-semibold text-color-white'>WEEKEND PROMO</p>
              <p className='mt-2 ml-10 text-lg font-light text-color-white'>Everything you need</p>
              <Image src={WeekendPromoImage} alt='' width='800' height='800' className='mt-8' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OrderCarComponent