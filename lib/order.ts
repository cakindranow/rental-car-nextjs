import { CreateOrderInterface } from "@/interface/order";
import axios from "axios"


export const getListOrder = async (token : string | undefined) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
            headers : {
                Authorization : `Bearer ${token}`,
            },
            
        });
        return response?.data
    
    } catch (error) {
        console.log(error)
    }
}
export const getCarById = async (id: string, token : string | undefined) => {
    try {
        const product = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars/${id}`,
            headers : {
                Authorization : `Bearer ${token}`
            },
        });
        return product.data.data
    } catch (error) {
        // console.log(error)
    }
}

export const postOrderCar = async (order : CreateOrderInterface, token : string | undefined) => {
    try {
        const product = await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
            headers : {
                Authorization : `Bearer ${token}`
            },
            data : order,
            validateStatus: () => false,
        });
        return product.data.data
    } catch (error : any) {
            return error?.response?.data
    }
}

export const getReturnCar = async (order_id : string, plat : string, token : string | undefined) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/return/${order_id}?plat=${plat}`,
            headers : {
                Authorization : `Bearer ${token}`
            },
            validateStatus: () => true,
        });
        return response?.data
    } catch (error) {
        console.log(error)
    }   
}

export const getAcceptOrder = async (order_id : string,token : string | undefined) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/approve/${order_id}`,
            headers : {
                Authorization : `Bearer ${token}`
            },
            validateStatus: () => true,
        });
        return response?.data
    } catch (error) {
        console.log(error)
    }   
}

export const getRejectOrder = async (order_id : string,token : string | undefined) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/reject/${order_id}`,
            headers : {
                Authorization : `Bearer ${token}`
            },
            validateStatus: () => true,
        });
        return response?.data
    } catch (error : any) {
        return error?.response?.data
    }   
}