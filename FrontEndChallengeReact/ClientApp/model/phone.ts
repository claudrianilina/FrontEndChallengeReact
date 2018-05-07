export interface Phone {
    id: number,
    title: string,
    image: string
}

export interface PhoneDetail extends Phone {
    memory: string,
    description: string,
    color: string,
    price: string
}

export interface PhoneCollection {
    list: Phone[]
}