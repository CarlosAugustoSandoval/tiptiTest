import type {IHotel} from "@/modules/hotels/models/IHotel";
import {createPinia, setActivePinia} from "pinia";
import { HotelsStore } from "@/modules/hotels/store";
import type {IResponseSearchHotel} from "@/modules/hotels/models/IResponseSearchHotel";
import {ValidDate, GenerateDates, GetDaysCount} from "@/modules/hotels/utilities/MomentFunctions";
setActivePinia(createPinia())
const hotelsStore = HotelsStore()
const items: IHotel[] = JSON.parse(JSON.stringify(hotelsStore.hotels))
const HotelSelected = (dates: string[], reward: boolean = false): IResponseSearchHotel => {
    if(dates.length === 0) return { message: 'The dates are required or the ones provided are not valid', hotel: null }
    if(dates.length === 1) return { message: 'a date data is needed to perform the search', hotel: null }
    const fromDate = dates[0]
    const totDate = dates[1]
    if(!(ValidDate(fromDate)) && !(ValidDate(totDate))) return { message: 'the data does not belong to valid dates', hotel: null }
    if(!(ValidDate(fromDate)) || !(ValidDate(totDate))) return { message: 'one of the dates was not provided or is invalid', hotel: null }
    const newDates = GenerateDates(fromDate, totDate)
    const countDaysWeek: number = GetDaysCount(newDates, 'week')
    const countDaysWeekend: number = GetDaysCount(newDates, 'weekend')
    return { message: 'Very good!, we have your result', hotel: filerHotel(countDaysWeek, countDaysWeekend, reward) }
}

const filerHotel = (countWeek: number, countWeekend:number, reward:boolean):IHotel | null => {
    const totalPrice: number[] = []
    items.forEach((item) => {
        let price = 0
        if(reward) price = (Number(item.weekPrices?.reward || 0) * countWeek) + (Number(item.weekendPrices?.reward || 0) * countWeekend)
        else price = (Number(item.weekPrices?.regular || 0) * countWeek) + (Number(item.weekendPrices?.regular || 0) * countWeekend)
        totalPrice.push(price)
    })
    const minAmount = Math.min(...totalPrice)
    const priceItemsIndexes: number[] = []
    totalPrice.forEach((price, index) => {
        if(price === minAmount) priceItemsIndexes.push(index)
    })
    const selectedHotels: IHotel[] = []
    priceItemsIndexes.forEach((i) => {
        items[i].totalPrice = minAmount
        selectedHotels.push(items[i])
    })
    if(selectedHotels.length) {
        if(selectedHotels.length === 1) return selectedHotels[0]
        else {
            const rateSelectedHotels: number[] = selectedHotels.map((selected) => selected.rate)
            const maxRate = Math.max(...rateSelectedHotels)
            return selectedHotels.find((hot) => hot.rate === maxRate) || null
        }
    }
    return null
}
export { HotelSelected }
