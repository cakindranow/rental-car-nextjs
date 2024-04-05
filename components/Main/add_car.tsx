'use client'

import React, { useEffect, FormEvent, useState } from 'react'
import { getListCar, postCar } from '@/lib/car'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from 'next/navigation'



type Props = {
    token: string | undefined
}
const CarAddComponent = ({ token }: Props) => {
    const router = useRouter();
    const [data, setData] = useState([])
    const [cars, setCars] = useState({ brand: "", model: "", plat: "", daily_rental_rate: "", desc: "" });
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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

        await postCar(formData, token)
        router.push('/home/admin/cars');

    }
    return (
        <div className='flex justify-center'>
            <div className='bg-color-white w-1/2 mt-10 p-10 rounded-2xl pb-10'>
                <p className='text-4xl flex justify-center font-bold mt-10'>Add Car</p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        <input required onChange={(e) => setCars({ ...cars, brand: e.target.value })} type="text" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
                        <input required onChange={(e) => setCars({ ...cars, model: e.target.value })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plat</label>
                        <input required onChange={(e) => setCars({ ...cars, plat: e.target.value })} type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Daily Rental Rate</label>
                        <input required onChange={(e) => setCars({ ...cars, daily_rental_rate: e.target.value })} type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea required onChange={(e) => setCars({ ...cars, desc: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-5">

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                        <input type="file" ref={inputFileRef} className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input"/>

                    </div>


                    <button type="submit" className="text-white bg-color-primary text-color-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>


    )
}

export default CarAddComponent