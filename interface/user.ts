export interface UserCreateOrUpdateInterface {
    name : string
    email : string
    password : string
}

export interface LoginRequestInterface {
    email : string
    password : string
}