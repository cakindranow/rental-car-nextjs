import axios from "axios"


export const getListCar = async (token : string | undefined) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars`,
            headers : {
                Authorization : `Bearer ${token}`,
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
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
