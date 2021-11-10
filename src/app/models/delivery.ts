import { Place } from "./place";
import { TimeDelivery } from "./timeDelivery";

export interface Delivery {
    location: Place,
    time: TimeDelivery,
    phone?:number,
    cost?: number,
    type?: string,
}