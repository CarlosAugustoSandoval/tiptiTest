import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { AuthStore } from "@/modules/auth/store";

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

router.beforeEach(async (to, from, next) => {
  const authStore = AuthStore()
  document.title = `MiamiHotels | ${to.meta.pageTitle}`
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!authStore.user) {
      next({name: 'Login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
