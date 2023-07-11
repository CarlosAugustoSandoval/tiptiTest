import { defineStore } from 'pinia'

export const GeneralStore = defineStore('GeneralStore', {
    state: () => ({
        openDrawer: true
    }),
    actions: {
        async setOpenDrawer (open = true) {
            this.openDrawer = open
        }
    }
})
