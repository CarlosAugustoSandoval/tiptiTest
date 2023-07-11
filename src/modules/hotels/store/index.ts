import { defineStore } from 'pinia'
import type IHotelsState from "@/modules/hotels/models/IHotelsState";
import Hotels from "@/modules/hotels/data/Hotels";

export const HotelsStore = defineStore('HotelsStore', {
    state: (): IHotelsState => ({
        hotels: Hotels
    })
})
