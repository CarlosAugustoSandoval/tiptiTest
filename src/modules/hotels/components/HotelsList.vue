<script setup lang="ts">
import { HotelsStore } from "@/modules/hotels/store";
import {ref} from "vue";
import type {IHotel} from "@/modules/hotels/models/IHotel";
import {IColumnCTable} from "@/components/table/models";
import InputDateRange from "@/components/InputDateRange.vue";
import InputSwitch from "@/components/InputSwitch.vue";
import CTable from "@/components/table/CTable.vue";
import CIcon from "@/components/icons/CIcon.vue";
import type {IResponseSearchHotel} from "@/modules/hotels/models/IResponseSearchHotel";
import {HotelSelected} from "@/modules/hotels/utilities/HotelSelected";
import HotelCard from "@/modules/hotels/components/HotelCard.vue";

const hotelsStore = HotelsStore()
const items = ref<IHotel[]>(hotelsStore.hotels)
const dates = ref<string[]>([])
const rewardCustomer = ref<boolean>(false)
const isSearch = ref<boolean>(false)
const viewCards = ref<boolean>(true)
const messageSearch = ref<string>('')
const searchHotel = () => {
  isSearch.value = true
  const response: IResponseSearchHotel = HotelSelected(dates.value, rewardCustomer.value)
  messageSearch.value = response.message || ''
  items.value = response?.hotel ? [response.hotel] : []
}

const clearSearch = () => {
  isSearch.value = false
  messageSearch.value = ''
  dates.value = []
  items.value = hotelsStore.hotels
}
const columns:IColumnCTable[] = [
  {
    name: 'logo',
    label: 'Logo',
    field: 'logo',
    align: 'center',
    slot: true
  },
  {
    label: 'Name',
    field: 'name'
  },
  {
    name: 'rate',
    label: 'Rate',
    field: 'rate',
    align: 'center',
    slot: true
  },
  {
    name: 'weekPrices',
    label: 'Week Prices',
    field: 'weekPrices',
    slot: true
  },
  {
    name: 'weekendPrices',
    label: 'Weekend Prices',
    field: 'weekendPrices',
    slot: true
  }
]
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p>Find the hotel that meets your needs in terms of time and money.</p>
        <button color="success" class="button" style="height: 26px" @click="viewCards = !viewCards">
          <CIcon :name="viewCards ? 'MdiTable' : 'MdiCardBulleted'" />
          View {{ viewCards ? 'Table' : 'Cards' }}
        </button>
      </div>
      <div class="col-12">
        <div class="search-container">
          <InputSwitch v-model="rewardCustomer" label="Rewards customer" class="search-item" />
          <InputDateRange v-model="dates" class="search-item" />
          <button id="button-search-hotels" color="primary" class="button search-item" style="height: 50px" @click="searchHotel()">Search Hotel</button>
          <button v-if="isSearch" color="grey" class="button search-item" style="height: 50px" @click="clearSearch()">Clear Search</button>
        </div>
        <p
            v-if="isSearch"
            :style="`color:${items?.length ? 'green' : 'red'}`"
            style="font-weight: bold;"
        >
          {{ messageSearch }}
        </p>
      </div>
      <Transition>
        <div v-if="isSearch || viewCards" class="row">
          <div v-for="(hotel, hotelIndex) in items" :key="`hotelCard${hotelIndex}`" class="col-sm-12 col-md-6 col-xl-4">
            <HotelCard :hotel="hotel" :date-from="dates[0]" :date-to="dates[1]" />
          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="!isSearch && !viewCards" class="col-12">
          <CTable :columns="columns" :items="items">
            <template v-slot:body-column-logo="{item}">
              <div class="logo">
                <img :src="item.logo" :alt="item.name">
              </div>
            </template>
            <template v-slot:body-column-rate="{item}">
              <CIcon v-for="(star, starIndex) in 5" :key="`star${starIndex}`" name="MdiStar" :color="star <= item.rate ? 'orange' : ''"/>
            </template>
            <template v-slot:body-column-weekPrices="{item}">
              <CTable :columns="[{label: 'Regular', field:'regular'}, {label: 'Reward', field:'reward'}]" :items="[item.weekPrices]" />
            </template>
            <template v-slot:body-column-weekendPrices="{item}">
              <CTable :columns="[{label: 'Regular', field:'regular'}, {label: 'Reward', field:'reward'}]" :items="[item.weekendPrices]" />
            </template>
          </CTable>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .search-item {
    margin: 0 12px;
  }
}
</style>
