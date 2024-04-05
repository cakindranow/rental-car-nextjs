'use client'
import { CloudCheck, DotsNine, ListBullets } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { CardCarShop } from '../Card/card_product_shop'
import { getListProductResponse } from '@/lib/product'
import { getListCar } from '@/lib/car'
import { getListOrder, getReturnCar } from '@/lib/order'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, button } from "@nextui-org/react";
import { OrderResponseInterface } from '@/interface/order'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { ToRupiah } from '@/util/rupiah'



type Props = {
    token: string | undefined
}

const ListOrderComponent = ({ token }: Props) => {
    const [data, setData] = useState([])
    const [plat, setPlat] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [orderID, setOrderID] = useState("")
    const [isError, setIsError] = useState(false)
    const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

    const handleReturnCar = async () => {
        const response = await getReturnCar(orderID, plat, token)
        if(response.header.error) {
            setIsError(true)
            setError(response.header.message)
            return
        }
        onClose()
        fetchData()
    }

    const fetchData = async () => {
        const response = await getListOrder(token)
        // const response = await getReturnCar("defb3a7e-b44d-4a3c-9f0f-46bc4fcbf76f", "DD 1231 CX", token)
        console.log("response :", response)
        setData(response?.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div className='bg-color-secondary w-[65%] bg-color'>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Return Car</ModalHeader>
                            <ModalBody>
                                {isError ?
                                    <div className="flex items-center p-4 mt-5 text-sm text-color-red border border-color-red rounded-lg bg-color-red-bg-alert" role="alert">
                                        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <div>
                                           {error}
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                                <div className="flex w-full flex-wrap md:flex-nowrap mt-5 gap-4">
                                    <input required onChange={(e) => setPlat(e.target.value)} type="email" placeholder="Enter Plat Number" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleReturnCar}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <p className='text-4xl mt-10 font-bold'>List Order</p>
            <Table className='mt-10' aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ORDER ID</TableColumn>
                    <TableColumn>MODEL</TableColumn>
                    <TableColumn>PLAT</TableColumn>
                    <TableColumn>START DATE</TableColumn>
                    <TableColumn>END DATE</TableColumn>
                    <TableColumn>TOTAL DAY</TableColumn>
                    <TableColumn>COST</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>ACTION</TableColumn>

                </TableHeader>
                <TableBody className=''>
                    {data?.map((order: OrderResponseInterface, idx) => (
                        <TableRow className='' key={idx}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.model}</TableCell>
                            <TableCell>{order.plat}</TableCell>
                            <TableCell>{order.start_date}</TableCell>
                            <TableCell>{order.end_date}</TableCell>
                            <TableCell>{order.total_day}</TableCell>
                            <TableCell>{ToRupiah(order.cost)}</TableCell>
                            <TableCell>
                                {order.status_name == "On Process" ? <p className=' bg-color-orange bg-opacity-15 font-semibold   text-color-orange rounded-full py-2 px-2 flex justify-center items-center'>{order.status_name}</p> : <></>}
                                {order.status_name == "Canceled" ? <p className='bg-color-red bg-opacity-15 font-semibold  text-color-red rounded-full py-2 px-2 flex justify-center items-center'>{order.status_name}</p> : <></>}
                                {order.status_name == "Approved" ? <p className='bg-color-green bg-opacity-15 font-semibold  text-color-green rounded-full py-2 px-2 flex justify-center items-center'>{order.status_name}</p> : <></>}
                                {order.status_name == "Rejected" ? <p className='bg-color-red bg-opacity-15 font-semibold  text-color-red  rounded-full py-2 px-2 flex justify-center items-center'>{order.status_name}</p> : <></>}
                                {order.status_name == "Returned" ? <p className='bg-color-primary  bg-opacity-15 font-semibold  text-color-primary rounded-full py-2 px-2 flex justify-center items-center'>{order.status_name}</p> : <></>}
                            </TableCell>
                            <TableCell>
                                {order.status_name == "Approved" ? <Button onPress={
                                    ()=> {
                                        onOpen()
                                        setOrderID(order.id)
                                    }
                                } className='bg-color-primary bg-opacity-15 font-semibold border-2 text-color-primary rounded-full py-2 px-2 p-2'>RETURN CAR</Button> : <></>}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ListOrderComponent