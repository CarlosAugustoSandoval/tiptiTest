import type {IPriceType} from "@/modules/hotels/models/IPriceType";

export interface IHotel {
    logo?: string
    name: string
    rate: number
    weekPrices?: IPriceType | null
    weekendPrices?: IPriceType | null
    totalPrice?: number | null
}
