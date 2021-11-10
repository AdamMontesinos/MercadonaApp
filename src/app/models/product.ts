export interface Product {
    id?: number,
    name: string,
    description: string,
    url: string,
    price: number,
    originalprice: number;
    quantity?: number,
    type?:string,
}