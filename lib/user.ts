import { LoginRequestInterface, UserCreateOrUpdateInterface } from "@/interface/user"

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,  { 
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
