'use client'
import { ArrowRight, DotsNine, ListBullets, Plus } from '@phosphor-icons/react'
import React, { useEffect, FormEvent, useState } from 'react'
import { CardCarShop } from '../Card/card_product_shop'
import { getListProductResponse } from '@/lib/product'
import { getListCar } from '@/lib/car'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import dateFormat, { masks } from "dateformat";
import { differentDay } from '@/util/count_different_day'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';


type Props = {
    token: string | undefined
}
const CarAddComponent = ({ token }: Props) => {
    const router = useRouter();
    const [data, setData] = useState([])
    const [cars, setCars] = useState({ brand: "", model: "", plat: "", daily_rental_rate: "", desc: "" });
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        /* If file is not selected, then show alert message */
        if (!inputFileRef.current?.files?.length) {
            alert('Please, select file you want to upload');
            return;
        }
        /* Add files to FormData */
        const formData = new FormData();
        Object.values(inputFileRef.current.files).forEach(file => {
            formData.append('image', file);
        })

        formData.append('brand', cars.brand)
        formData.append('model', cars.model)
        formData.append('plat', cars.plat)
        formData.append('daily_rental_rate', cars.daily_rental_rate)
        formData.append('desc', cars.desc)

        const responseLogin = await postLogin(formData)
        if (responseLogin.header.error == false) {
            Cookies.set('token', responseLogin.data.token)
            localStorage.setItem('user', JSON.stringify({ name: responseLogin.name, email: responseLogin.email }));
            setTimeout(() => {
                router.push('/home');
            });
        }
        else {
            // setError(responseLogin.header.message)
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='bg-color-white w-1/2 mt-10 p-10 rounded-2xl'>
                <p className='text-4xl flex justify-center font-bold mt-10'>Add Car</p>
                <form className="max-w-lg mx-auto mt-10">
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        <input type="text" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plat</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Daily Rental Rate</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className="mb-5">

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                        <input type="file" className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                    </div>


                    <button type="submit" className="text-white bg-color-primary text-color-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>


    )
}

export default CarAddComponent