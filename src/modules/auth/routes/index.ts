import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/auth',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: '/auth/login',
                name: 'Login',
                component: () => import('@/modules/auth/views/LoginView.vue'),
                meta: {
                    requireAuth: false,
                    pageTitle: 'Login'
                }
            }
        ]
    }
]

export default routes
