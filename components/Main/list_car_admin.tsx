'use client'
import { DotsNine, ListBullets } from '@phosphor-icons/react'
import React, { useEffect, FormEvent, useState } from 'react'
import { CardCarShop } from '../Card/card_product_shop'
import { getListProductResponse } from '@/lib/product'
import { getListCar } from '@/lib/car'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import dateFormat, { masks } from "dateformat";
import { differentDay } from '@/util/count_different_day'
import { useRouter } from 'next/navigation'
type Props = {
    token: string | undefined
}
const ListCarAdminComponent = ({ token }: Props) => {
    const router = useRouter();
    const [data, setData] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startDateString, setStartDateString] = useState("");
    const [endDateString, setEndDateString] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleAddCar = () => {
        router.push('/home/admin/cars/add')
    }
    const handleClickFilterByDate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const totalDay = differentDay(startDate, endDate)
        if (startDate > endDate) {
            setError("start date harus lebih awal daripada end date")
            return
        }
        if (totalDay < 1) {
            setError("hari harus lebih dari satu")
            return
        }
        const response = await getListCar(token, name, dateFormat(startDate, 'isoDate'), dateFormat(endDate, 'isoDate'))
        setData(response?.data)
    }
    const handleSubmit = async () => {
        const response = await getListCar(token, name, startDateString, endDateString)
        setData(response?.data)
    }
    const fetchData = async () => {
        const response = await getListCar(token, name, startDateString, endDateString)
        setData(response?.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='bg-color-secondary'>
                {/* <div className='h-[50px] w-[66rem] bg-color-white rounded-xl mt-16 flex items-center justify-between'>
                    <form onSubmit={handleSubmit} className="w-full mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" onChange={(e) => setName(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Brand, Model ...." required />
                        </div>
                    </form>
                </div> */}
                <div className='h-[60px] w-[66rem] rounded-xl mt-4 flex items-center justify-between'>
                    <div className='w-[220px] ml-2'>
                        <p className='font-semibold cols-4'>Showing Cars</p>
                    </div>
                    <button type='button' onClick={handleAddCar} className='px-10 py-2 rounded bg-color-blue-dark text-color-white'>Add Car</button>
                </div>
                <div className='grid grid-cols-12 gap-7 w-[66rem] mt-10 '>
                    {data?.map((car, idx) => (
                        <CardCarShop car={car} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListCarAdminComponent