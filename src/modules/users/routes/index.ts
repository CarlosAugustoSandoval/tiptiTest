import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/users',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: '/users/list',
                name: 'Users',
                component: () => import('@/modules/users/views/UsersPage.vue'),
                meta: {
                    requireAuth: true,
                    pageTitle: 'Users Page'
                }
            }
        ]
    }
]

export default routes
