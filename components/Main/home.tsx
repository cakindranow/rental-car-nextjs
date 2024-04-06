'use client'
import React from 'react'
import GroceryImage from '@/public/assets/images/grocery.png'
import Image from 'next/image'
import StrowberryImage from '@/public/assets/images/strowberry.jpg'
import vegetableImage from '@/public/assets/images/vegetable.png'
import CarHomeImage from '@/public/assets/images/car-home.png'
import { CardProduct } from '../Card/card_product_home'
import { useRouter } from 'next/navigation'

const HomeComponent = () => {
    const router = useRouter();
    const handleOrderNow = () => {
        router.push('/home/cars')
    }
    return (
        <div className='bg-color-secondary'>
            <div className='mx-64 h-[30rem] mt-10 flex gap-5 rounded-3xl'>
                <div className='w-1/2 ml-16'>
                    <p className='text-6xl font-bold  mt-20'>Sewa Mobil Online</p>
                    <p className='text-6xl font-bold mt-4  '>Untuk Perjalanan Anda</p>
                    <p className='font-light mt-4  '>Jalan Veteran Selatan Makassar, Bonto Lebang, Kec. Mamajang, Kota Makassar, Sulawesi Selatan 90135</p>
                    <button type='button' onClick={handleOrderNow} className='mt-10 bg-color-blue-dark hover:bg-opacity-70 text-color-white h-12 w-40 rounded-2xl  font-bold'>Order Now</button>
                </div>
                <div className=' w-1/2'>
                    <Image src={CarHomeImage} alt='' className='h-[35rem] w-[75rem]' />
                </div>
            </div>

            <div className='mt-32'>
                <p className='flex justify-center text-3xl mt-28 font-bold'>Mengapa sewa mobil di RentalAja ?</p>
            </div>

            <div className='mt-20 flex flex-row justify-between mx-64'>
                <div className='bg-color-blue-dark h-[220px] w-[450px] flex justify-between rounded-xl'>
                    <div className=' ml-5 mt-8'>
                        <p className='text-3xl font-bold mt-2 text-color-white'>Hemat waktu </p>
                        <p className='mt-5 text-color-white'>Sewa mobil cukup di genggaman Anda, kapan saja dan di mana saja. Bandingkan pilihan mobil dari partner tepercaya kami dengan mudah dan temukan yang sesuai dengan kebutuhan Anda.</p>
                    </div>
                   
                </div>
                <div className='bg-color-blue-dark h-[220px] w-[450px] flex justify-between rounded-xl'>
                    <div className=' ml-5 mt-8'>
                        <p className='text-3xl mt-2 font-bold text-color-white'>Servis Berkualitas</p>

                        <p className='mt-5 text-color-white'>Partner rental mobil Traveloka menyediakan servis berkualitas demi kenyamanan bepergian Anda.</p>
                    </div>
                </div>
                <div className='bg-color-blue-dark h-[220px] w-[450px] flex justify-between rounded-xl'>
                    <div className=' ml-5 mt-8'>
                        <p className='text-3xl mt-2 font-bold text-color-white'>Rating Pengguna Asli</p>
                        <p className='mt-5 text-color-white'>Ucapkan selamat tinggal pada keputusan yang tidak tepat. Rating dari user lain akan membantu Anda untuk menemukan pilihan rental mobil yang paling tepat.</p>
                    </div>
                </div>
            </div>

            <div className='mt-36 bg-color-blue-dark mx-80 px-3 pb-10 pt-1 rounded-xl'>
                <p className='flex justify-center text-color-white text-3xl mt-14 font-bold'>Rental Mobil Lepas Kunci</p>
                <p className='flex justify-center text-color-white text-medium mt-2 font-light'>Rental mobil lepas kunci adalah solusi praktis dan fleksibel bagi yang ingin menikmati kebebasan dalam perjalanan. Tanpa adanya supir, kamu bisa mengatur jadwal dan rute perjalanan sendiri. Ini cocok untuk kamu yang ingin menjelajahi berbagai destinasi di banyak tempat. Buat kamu yang dalam perjalanan bisnis pun, ini akan sangat membantu. Sewa mobil lepas kunci menawarkan fleksibilitas waktu, jadi kamu bisa menyewa mobil sesuai kebutuhan, mulai dari beberapa jam hingga berminggu-minggu</p>
            </div>

            <div className='mt-20 bg-color-blue-dark mx-80 px-3 pb-10 pt-1 rounded-xl'>
                <p className='flex justify-center text-color-white text-3xl mt-14 font-bold'>Rental Mobil dengan Sopir</p>
                <p className='flex justify-center text-color-white text-medium mt-2 font-light'>Ingin liburanmu tambah praktis dan nyaman? Rental mobil dengan sopir jawabannya! Kamu bisa menikmati perjalanan tanpa harus repot jadi sopir sendiri. Sopir yang ahli dan berpengalaman bakal membawa kamu ke destinasi dengan aman dan lancar. Nggak perlu khawatir nyasar atau bingung jalur, sopirnya sudah paham betul. Ini cocok banget buat liburan santai bersama keluarga atau teman-teman, atau bahkan buat perjalanan bisnis yang lebih efisien. Jadi, tinggal duduk manis dan nikmatin perjalanan tanpa ribet deh! Tertarik? Yuk, segera sewa mobil dengan sopir di RentalAja. Dapatkan juga harga rental mobil murah hanya di RentalAja!</p>
            </div>

            
            <div className='mt-20 bg-color-blue-dark mx-80 px-3 pb-10 pt-1 rounded-xl'>
                <p className='flex justify-center text-color-white text-3xl mt-14 font-bold'>Rental Mobil Murah Promo </p>
                <p className='flex justify-center text-color-white text-medium mt-2 font-light '>Jika kamu ingin mengeksplorasi kota tujuan tanpa batas tapi bingung mau naik transportasi apa, sewa mobil bisa menjadi opsi terbaik. Selain memberikan kesan aman dan privat, sewa mobil juga dinilai menghemat bujet. Nah, buat kamu yang lagi cari jasa rental mobil murah, jangan ragu untuk sewa mobil di RentalAja </p>
            </div>

        </div>
    )
}

export default HomeComponent