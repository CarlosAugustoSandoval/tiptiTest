import './assets/main.scss'

import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import {globalComponents} from "@/plugins/globalComponents";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
globalComponents(app)
app.use(pinia)
app.use(router)

app.mount('#app')
