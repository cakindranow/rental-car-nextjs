'use client'
import { CloudCheck, DotsNine, ListBullets } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { CardCarShop } from '../Card/card_product_shop'
import { getListProductResponse } from '@/lib/product'
import { getListCar } from '@/lib/car'
import { getAcceptOrder, getListOrder, getRejectOrder, getReturnCar } from '@/lib/order'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, button } from "@nextui-org/react";
import { OrderResponseInterface } from '@/interface/order'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { ToRupiah } from '@/util/rupiah'
import { getAllUser } from '@/lib/user'
import { UserInterface } from '@/interface/user'



type Props = {
    token: string | undefined
}

const ListUserAdminComponent = ({ token }: Props) => {
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

    const handleAccept = async (orderID : string) => {
        const response = await getAcceptOrder(orderID, token)
        if(response.header.error) {
            setIsError(true)
            setError(response.header.message)
            return
        }
        onClose()
        fetchData()
    }

    const handleReject = async (orderID : string) => {
        const response = await getRejectOrder(orderID, token)
        if(response.header.error) {
            setIsError(true)
            setError(response.header.message)
            return
        }
        onClose()
        fetchData()
    }

    const fetchData = async () => {
        const response = await getAllUser(token)
        console.log(response.data)
        setData(response?.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div className='bg-color-secondary w-[80%] bg-color'>
            <p className='text-4xl mt-10 font-bold'>List Order</p>
            <Table className='mt-10' aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>PHONE</TableColumn>
                    <TableColumn>ADDRESS</TableColumn>
                    <TableColumn>SIM</TableColumn>
                    <TableColumn>IS ADMIN</TableColumn>

                </TableHeader>
                <TableBody className=''>
                    {data?.map((user : UserInterface, idx) => (
                        <TableRow className='' key={idx}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.sim}</TableCell>
                            <TableCell>{String(user.is_admin)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ListUserAdminComponent