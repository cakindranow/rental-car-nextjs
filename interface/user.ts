export interface UserCreateOrUpdateInterface {
    name : string
    email : string
    password : string
}

export interface LoginRequestInterface {
    email : string
    password : string
}

export interface UserInterface {
    id : string
    name : string
    email : string
    phone : string
    address : string
    sim : string
    is_admin : boolean
}
