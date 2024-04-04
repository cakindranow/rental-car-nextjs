'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { profileEnd } from 'console'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ProductType, getListProductResponse } from '@/lib/product'
import { TickOptions } from 'chart.js'
import { ToRupiah } from '@/util/rupiah'
import { addProductToCart, deleteProductToCart, getListProductInCart } from '@/lib/cart'
import { CartProductInterface, CartProductResponseInterface } from '@/interface/cart'

type Props = {
    token : string | undefined
}
const CartComponent = ({token} : Props) => {
    const [data, setData] = useState<CartProductResponseInterface[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    
    const fetchData = async () => {
        const response = await getListProductInCart(token)
        let price = 0

        const listProduct : CartProductResponseInterface[] = response.data
        if (listProduct?.length > 0) {
            for (const product of listProduct) {
                price += (product.price * product.total)
            }
            setTotalPrice(price)
            setData(listProduct)
        }
    }
      


    const handleClickUpdateTotalProduct = async(id : string, total : number) => {
        try {
            if (total > 0) {
                const cart : CartProductInterface = {
                    product_id : id,
                    total : total,
                }
                await addProductToCart(token,cart)
                await fetchData()
            } 
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickDeleteTotalProduct = async(id : string) => {
        try {
           await deleteProductToCart(token, id)
           await fetchData()
        
        } catch (error) {
            console.log(error)
        }
       
    }
    useEffect(() => {
        fetchData()
    }, [])

    if (data.length > 1) {
           return (
        <div className='mx-64 mt-16 bg-color-white pb-20 rounded-2xl'>
            <p className='text-4xl font-bold ml-40 mt-10'>Cart Products</p>
            <div className="relative overflow-x-auto mt-10 flex justify-center">
                <table className="w-[80%] text-sm text-left rtl:text-right  rounded-3xl">
                    <thead className="text-lg">
                        <tr>
                            <th scope="col" className="px-6 py-10  border-b border-color-gray-border">
                                <p className='flex justify-center text-base font-medium'>Images</p>
                            </th>
                            <th scope="col" className="px-6 py-3 border-b border-color-gray-border">
                                <p className='flex justify-center text-base font-medium'>Product Name</p>
                            </th>
                            <th scope="col" className="px-6 py-3 border-b border-color-gray-border">
                                <p className='flex justify-center text-base font-medium'>Unit Price</p>
                            </th>
                            <th scope="col" className="px-6 py-3 border-b border-color-gray-border">
                                <p className='flex justify-center  text-base font-medium'>Quantity</p>
                            </th>
                            <th scope="col" className="px-6 py-3 border-b border-color-gray-border">
                                <p className='flex justify-center text-base font-medium'>Total</p>
                            </th>
                            <th scope="col" className="px-6 py-3 border-b border-color-gray-border">
                                <p className='flex justify-center  marker:text-base font-medium'>Remove</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                 
                        {data?.map((cartProduct : CartProductResponseInterface, idx: number) => (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                                <th scope="row" className=" py-4 font-medium text-gray-900  whitespace-nowrap">
                                    <div className=' flex justify-center'>
                                        <Image className='rounded-3xl' src={cartProduct.image_url} alt='' width='200' height='250' />
                                    </div>
                                </th>
                                <th scope="row" className="px-6 font-medium text-gray-900  whitespace-nowrap">
                                    <p className='flex justify-center text-base'>{cartProduct.product_name}</p>
                                </th>
                                <td className="px-6 py-4">
                                    <p className='flex justify-center text-base'>{ToRupiah(cartProduct.price)}</p>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='flex justify-center items-center gap-1'>
                                        <button onClick={(e : any) => handleClickUpdateTotalProduct(cartProduct.product_id, cartProduct.total+1)} className='h-7 w-5 border border-color-gray-border  flex justify-center items-center '>
                                            <Plus size={10} />
                                        </button>
                                        <p className=' h-7 flex border border-color-gray-border items-center justify-center w-20 text-base'>{cartProduct.total}</p>
                                        <button onClick={(e : any) => handleClickUpdateTotalProduct(cartProduct.product_id, cartProduct.total-1)} className='h-7 w-5  border border-color-gray-border flex justify-center items-center '>
                                            <Minus size={10} />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <p className='flex justify-center text-base'>
                                        {ToRupiah(cartProduct.total * cartProduct.price)}
                                    </p>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='flex justify-center'>
                                        <button onClick={(e : any) => handleClickDeleteTotalProduct(cartProduct.product_id)}>
                                            <Trash size={20} className='font-light opacity-60 hover:opacity-40' />
                                        </button>
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end '>
                <div className='h-[150px] w-[400px] mt-10  p-10 pb-5'>
                    <div className='flex justify-between items-center mt-3'>
                        <p className='text-xl font-light flex'>Total</p>
                        <p className='text-xl font-light'><span>{ToRupiah(totalPrice)}</span></p>
                    </div>
                    <button className='mt-16 px-10 py-4 bg-color-green hover:bg-color-green-brown text-color-white font-bold rounded-2xl'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
    } else {
    return (
        <div className='mx-64 h-[500px] mt-10 flex items-center justify-center bg-color-white pb-20 rounded-2xl'>
            <p className='text-lg'>Cart is not found</p>
        </div>
    )}
}

export default CartComponent