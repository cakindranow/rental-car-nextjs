import axios from "axios"


export const getListCar = async (token : string | undefined, name : string, start_date : string, end_date : string) => {
    try {
        let isDateAvailable = false
        let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars?`
        if (start_date != "" || end_date != "") {
            url += `start_date=${start_date}&end_date=${end_date}`
            isDateAvailable = true
        }

        if (name != "") {
            if (isDateAvailable) {
                url += `&name=${name}`
            } else {
                url += `name=${name}`
            }
        }

        const response = await axios({
            method: 'get',
            url: url,
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

export const postCar = async (formData: FormData, token : string | undefined) => {
    try {
        const product = await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars`,
            headers : {
                Authorization : `Bearer ${token}`
            },
            data : formData
        });
        return product.data.data
    } catch (error) {
        // console.log(error)
    }
}