import { CartProductInterface } from "@/interface/cart";
import axios from "axios"


export const addProductToCart = async (token : string | undefined, cart : CartProductInterface) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`,
            headers : {
                Authorization : `Bearer ${token}`,
            },
            data : cart,
            
        });
        return response?.data
    
    } catch (error) {
        console.log(error)
    }
}

export const deleteProductToCart = async (token : string | undefined, product_id : string) => {
    try {
        const response = await axios({
            method: 'delete',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/${product_id}`,
            headers : {
                Authorization : `Bearer ${token}`,
            },
            
        });
        return response?.data
    
    } catch (error) {
        console.log(error)
    }
}


export const getListProductInCart = async (token : string | undefined ) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`,
            headers : {
                Authorization : `Bearer ${token}`,
            },
            
        });
        return response?.data
    
    } catch (error) {
        console.log(error)
    }
}