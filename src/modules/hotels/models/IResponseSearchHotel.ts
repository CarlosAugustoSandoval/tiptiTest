import type {IHotel} from "@/modules/hotels/models/IHotel";

export interface IResponseSearchHotel {
    message: string,
    hotel: IHotel | null
}
