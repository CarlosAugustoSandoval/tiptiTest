<script setup lang="ts">
import {IColumnCTable, PropsCTable} from "@/components/table/models";

export interface IProps {
  columns?: IColumnCTable[]
  rowKey?: string
  items?: any[]
}

const props = withDefaults(defineProps<IProps>(),{ ...PropsCTable })
</script>

<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <th v-for="(column, indexColumn) in props.columns" :key="`column${indexColumn}`" :style="`text-align:${column.align || 'left'}`">
          {{ column.label }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in props.items" :key="item[props.rowKey]">
        <td v-for="(column, indexColumn) in props.columns" :key="`columnData${indexColumn}`" :style="`text-align:${column.align || 'left'}`">
          <slot v-if="column.slot"  :name="`body-column-${column.name}`" :item="item"/>
          <div v-else>
            {{ item[column.field] }}
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 6px;
      border: 1px solid #c2c2c2;
      color: black;
    }
    th {
      background-color: #f0f0f0;
      font-weight: bold;
      color: black;
    }
    tbody {
      tr {
        &:nth-child(even) {
          background-color: #f1f1f1;
        }
        &:nth-child(odd) {
          background-color: #f9f9f9;
        }
        &:hover {
          background-color: rgba(155, 164, 232, 0.2);
          td {
            color: #837b7b;
          }
        }
      }
    }
  }
}
</style>
