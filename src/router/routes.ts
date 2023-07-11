import type { RouteRecordRaw } from 'vue-router'
import usersRoutes from '@/modules/users/routes'
import authRoutes from '@/modules/auth/routes'

const routes: RouteRecordRaw[] = [
    ...usersRoutes,
    ...authRoutes,
    {
        path: '/',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                name: 'Home',
                path: '',
                component: () => import('@/views/HomeView.vue'),
                meta: {
                    requireAuth: false,
                    pageTitle: 'Home Page'
                }
            },
            {
                name: 'About',
                path: '/about',
                component: () => import('@/views/AboutView.vue'),
                meta: {
                    requireAuth: false,
                    pageTitle: 'About Page'
                }
            },
            {
                name:'Contact',
                path: '/contact',
                component: () => import('@/views/ContactView.vue'),
                meta: {
                    requireAuth: false,
                    pageTitle: 'Contact Page'
                }
            },
        ]
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('@/views/ErrorNotFound.vue'),
        meta: {
            requireAuth: false,
            pageTitle: 'Not Found'
        }
    }
]

export default routes
