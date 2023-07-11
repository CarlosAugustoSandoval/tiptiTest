<script setup lang="ts">
import type {IHotel} from "@/modules/hotels/models/IHotel";
import CIcon from "@/components/icons/CIcon.vue";
import CTable from "@/components/table/CTable.vue";
import {IColumnCTable} from "@/components/table/models";
import {ref} from "vue";

interface Props {
  hotel: IHotel | null
  dateFrom: string
  dateTo: string
}
const props = withDefaults(defineProps<Props>(), {
  hotel: null,
  dateFrom: '',
  dateTo: '',
})

const columns:IColumnCTable[] = [
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

const showPriceDetail = ref<boolean>(false)
</script>

<template>
  <div v-if="props.hotel" class="card">
    <div class="logo">
      <img :src="props.hotel.logo" :alt="props.hotel.name">
    </div>
    <h2 class="name">{{ props.hotel.name }}</h2>
    <div class="stars">
      <CIcon v-for="(star, starIndex) in 5" :key="`star${starIndex}`" name="MdiStar" :color="star <= props.hotel.rate ? 'orange' : ''"/>
    </div>
    <table v-if="props.hotel.totalPrice" class="data-table">
      <tr>
        <td>Reservation Date:</td>
        <td>
          <span style="margin-right: 12px">
            From: <strong style="font-weight: bold">{{ props.dateFrom }}</strong>
          </span>
          <span>
            To: <strong style="font-weight: bold">{{ props.dateTo }}</strong>
          </span>
        </td>
      </tr>
      <tr>
        <td>Total Amount:</td>
        <td>${{ props.hotel.totalPrice }}</td>
      </tr>
    </table>

    <div style="width: 100%; text-align: center; margin-top: 10px">
      <button v-if="props.hotel.totalPrice" color="secondary" class="button" style="margin-bottom: 10px" @click="showPriceDetail = !showPriceDetail">
        {{ showPriceDetail ? 'Hide price list' : 'Show price list' }}
      </button>
      <Transition>
        <div v-if="showPriceDetail || !props.hotel.totalPrice" style="background-color: white">
          <CTable :columns="columns" :items="[props.hotel]">
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
@use '@/assets/variables' as vars;
.card {
  background-color: map-get(vars.$colors, 'secondary');
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.stars {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}


.data-table {
  width: 100%;
  margin-top: 16px;

  tr {
    td {
      padding: 4px 0;
    }
  }
}

</style>
