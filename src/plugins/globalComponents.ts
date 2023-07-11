import type {App} from 'vue'
import CTable from "@/components/table/CTable.vue";
import CIcon from "@/components/icons/CIcon.vue";

const globalComponents = (app: App) => {
    app.component('CTable', CTable)
    app.component('CIcon', CIcon)
}

export { globalComponents }
