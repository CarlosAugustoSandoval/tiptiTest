<script setup lang="ts">
import {api} from "@/plugins/axios";
import type {AxiosResponse} from "axios";
import type IUser from "@/modules/users/models/IUser";
import {ref} from "vue";
import type {IColumnCTable} from "@/components/table/models";

const users = ref<IUser[]>([])
const columns:IColumnCTable[] = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    slot: true
  },
]
const getUsers = () => {
  api.get('users.json').then((response: AxiosResponse<IUser[]>) => {
    users.value = response.data
  })
}

getUsers()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Users</h1>
      </div>
      <div class="col-12">
        <CTable :columns="columns" :items="users">
          <template v-slot:body-column-email="{item}">
            <a :href="`mailto:${item.email}`">{{ item.email }}</a>
          </template>
        </CTable>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
