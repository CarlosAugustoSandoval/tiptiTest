import type {IPropsCTable} from "@/components/table/CTable.vue";
const PropsCTable: IPropsCTable = {
    columns: [],
    rowKey: 'id',
    items: []
}

export interface IColumnCTable {
    name?: string
    label?: string
    field?: string
    align?: 'left' | 'center' | 'right'
    slot?: boolean
}

export { PropsCTable }
