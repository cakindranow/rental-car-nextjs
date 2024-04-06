import { LoginRequestInterface, UserCreateOrUpdateInterface } from "@/interface/user"
import axios from "axios"

export const postSignup = async(user : UserCreateOrUpdateInterface) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,  { 
            cache: 'no-store',
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
        })
        const signupResponse = await response.json()
        return signupResponse
    } catch (error) {
        console.log(error)
    }
}

export const postLogin = async(user : LoginRequestInterface) => {
    try {
        // const response = await axios({
        //     method: 'post',
        //     url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        //     data : user
        // });

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,  { 
            cache: 'no-store',
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
        })
        const signinResponse = await response.json()
        return signinResponse
    } catch (error) {
        console.log(error)
    }
}

export const getAllUser = async ( token : string | undefined) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/all`,
            headers : {
                Authorization : `Bearer ${token}`
            },
        });
        return response.data
    } catch (error) {
        // console.log(error)
    }
}
