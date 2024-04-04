import React from 'react'
import Image from 'next/image'
import SectionImage from '@/public/section.png'
import WorkImage from '@/public/work.svg'
import PlayCircleImage from '@/public/play-circle.svg'
import AdvisorImage from '@/public/advisor.svg'
import ExpediaImage from '@/public/expedia.svg'
import BookingImage from '@/public/booking.svg'
import AirBnbImage from '@/public/airbnb.svg'
import RbitzImage from '@/public/rbitz.svg'

const Section = () => {
  return (
    <section>
      <div className="container mx-auto py-28">
        <div className="grid grid-cols-12">
          <div className='col-span-12 lg:col-span-6 order-1 lg:order-2 '>
            <div>
              <Image
                src={SectionImage}
                alt="section image"
                className='lg:w-full mx-auto'
              />
            </div>
          </div>
          <div className='col-span-12 my-5 lg:col-span-6 order-2 lg:order-1'>
            <div className=''>
              <div>
                <button className='flex mx-auto gap-2 lg:gap-0 text-pink-500 my-5'>
                  Explore the world!
                  <Image src={WorkImage} alt='work image' />
                </button>
              <h1 className='text-5xl font-bold sm:mx-auto lg:w-[70%] lg:text-center lg:text-6xl leading-tight'>Travel <span className='text-pink-500'>top destination</span> of the world</h1>
            </div>
            <p className='text-center my-8 text-gray-400 text-lg w-2/3 mx-auto'>We always make our customer happy by providing as many choices as possible </p>
            <div className='flex sm:flex-row sm:w-1/2 sm:text-center sm:mx-auto flex-col gap-6'>
              <button className='bg-purple-700 w-full h-14 rounded-full font-bold text-white text-sm'>Get Started</button>
              <button className=' flex justify-center items-center gap-1 bg-gray-100 w-full h-14 rounded-full font-bold text-sm'>
                <Image src={PlayCircleImage} alt="play circle image" />
                Watch Demo
              </button>
            </div>
            </div>
          </div>
          <div className='col-span-12 mt-28 order-3'>
            <div className='lg:hidden'>
              <div className='flex sm:w-[60%] justify-center gap-4 mx-auto'>
                <Image src={AdvisorImage} alt="Advisor image" className='mx-auto text-sm' />
                <Image src={ExpediaImage} alt="Expedia image" className='mx-auto' />
                <Image src={BookingImage} alt="Booking image" className='mx-auto' />
              </div>
              <div className='flex w-[45%] mx-auto sm:gap-0 gap-3 justify-center mt-8'>
                <Image src={AirBnbImage} alt="Airbnb image" className='mx-auto' />
                <Image src={RbitzImage} alt="Rbitz image" className='mx-auto' />
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className='flex mx-auto w-[70%]'>
                <Image src={AdvisorImage} alt="Advisor image" className='mx-auto text-sm' />
                <Image src={ExpediaImage} alt="Expedia image" className='mx-auto' />
                <Image src={BookingImage} alt="Booking image" className='mx-auto' />
                <Image src={AirBnbImage} alt="Airbnb image" className='mx-auto' />
                <Image src={RbitzImage} alt="Rbitz image" className='mx-auto' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section