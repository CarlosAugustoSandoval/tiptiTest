import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import HotelsList from "@/modules/hotels/components/HotelsList.vue";
import InputSwitch from "@/components/InputSwitch.vue";
import InputDateRange from "@/components/InputDateRange.vue";
import {HotelSelected} from "@/modules/hotels/utilities/HotelSelected";

describe('HotelList component', () => {
  // necessary to activate the import of Pinia that is in the component
  setActivePinia(createPinia())
  it('render component', () => {
    const wrapper = mount(HotelsList)
    expect(wrapper.exists()).toBe(true)
  })
  it('render Search Hotel button', () => {
    const wrapper = mount(HotelsList)
    if (expect(wrapper.find('button').exists())) {
      expect(wrapper.find('#button-search-hotels').exists()).toBe(true)
    }
  })
  it('render switch component', () => {
    const wrapper = mount(HotelsList)
    const switchComponent = wrapper.findComponent(InputSwitch)
    expect(switchComponent.exists()).toBe(true)
  })
  it('render input date range component', () => {
    const wrapper = mount(HotelsList)
    const inputDate = wrapper.findComponent(InputDateRange)
    expect(inputDate.exists()).toBe(true)
  })
  it('Hotel search function, non data', () => {
    const dates:string[] = []
    const rewardCustomer: boolean = false
    const responseHotel = HotelSelected(dates, rewardCustomer)
    expect(responseHotel.message).toBe('The dates are required or the ones provided are not valid')
  })
  it('Hotel search function, whit one data', () => {
    // const dates:string[] = ['2005-02-25']
    const dates:string[] = ['']
    const rewardCustomer: boolean = false
    const responseHotel = HotelSelected(dates, rewardCustomer)
    expect(responseHotel.message).toBe('a date data is needed to perform the search')
  })
  it('Hotel search function, when any of the dates is not valid', () => {
    const dates:string[] = ['2022-02-30', '2020-15-01']
    // const dates:string[] = ['', '']

    const rewardCustomer: boolean = false
    const responseHotel = HotelSelected(dates, rewardCustomer)
    expect(responseHotel.message).toBe('the data does not belong to valid dates')
  })
  it('Hotel search function, when one of the dates is missing or invalid', () => {
    // const dates:string[] = ['2022-02-30', '2020-02-01']
    const dates:string[] = ['2022-05-03', '']

    const rewardCustomer: boolean = false
    const responseHotel = HotelSelected(dates, rewardCustomer)
    expect(responseHotel.message).toBe('one of the dates was not provided or is invalid')
  })
  it('hotel search function, when the dates are valid', () => {
    // const dates:string[] = ['2023-07-01', '2023-07-17']

    // case 1
    // const dates:string[] = ['2009-03-16', '2009-03-18']
    // const rewardCustomer: boolean = false

    // case 2
    const dates:string[] = ['2009-03-26', '2009-03-28']
    const rewardCustomer: boolean = true
    const responseHotel = HotelSelected(dates, rewardCustomer)
    expect(responseHotel.message).toBe('Very good!, we have your result')
  })
})
