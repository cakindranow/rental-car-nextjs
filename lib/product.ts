import axios from "axios"
export type ProductType = {
    id: string
    name: string
    image_url: string
    price: number
}

// export const getListProductResponse = async() => {
//     try {
//         const myHeaders = new Headers();
//         myHeaders.append("Authorization", `Bearer ${Cookies.get('token')}`);
//         const response = await fetch(`http://127.0.0.1:4000/api/products`,  { 
//             cache: 'no-store',
//         })
//         const products = await response.json()
//         return products
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getListProductResponse = async (token : string | undefined) => {
    try {
        const products = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
            headers : {
                Authorization : `Bearer ${token}`,
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
            
        });
        return products?.data
    
    } catch (error) {
        console.log(error)
    }
}
export const getProductByIdResponse = async (id: string, token : string | undefined) => {
    try {
        const product = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
            headers : {
                Authorization : `Bearer ${token}`
            },
        });
        return product.data.data
    } catch (error) {
        // console.log(error)
    }
}

