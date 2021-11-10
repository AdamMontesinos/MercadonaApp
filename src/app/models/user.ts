import { CreditCard } from "./creditCard";

export interface User {
    name: string,
    surname?: string,
    email: string,
    direction?: string,
    telephone?: number,
    urlImage?: string,
    credit?: CreditCard
}