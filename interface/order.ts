export interface OrderResponseInterface {
    id : string
    status_id : string
    status_name : string
    requested_name : string
    cars_id : string
    start_date : string
    end_date : string
    total_day : number
    ordered_at : string
    requested_by : string
    note_admin : string
    brand : string
    model : string
    plat : string
    cost : number
}

export interface CreateOrderInterface {
    cars_id : string
    start_date : string
    end_date : string
    total_day : number
}