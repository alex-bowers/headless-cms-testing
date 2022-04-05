import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:crm',
      name: 'crm',
      component: () => import('../views/CrmView.vue'),
      children: [
        {
          path: ':store',
          name: 'crm.store',
          component: () => import('../views/StoreView.vue'),
        },
        {
          path: ':store/product/:slug',
          name: 'crm.store.product',
          component: () => import('../views/ProductView.vue'),
        },
        {
          path: ':store/blog/:slug',
          name: 'crm.store.blog',
          component: () => import('../views/BlogView.vue'),
        }
      ]
    }
  ]
})

export default router
