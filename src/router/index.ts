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
      path: '/:cms',
      name: 'cms',
      component: () => import('../views/CmsView.vue'),
      children: [
        {
          path: ':store',
          name: 'cms.store',
          component: () => import('../views/StoreView.vue'),
        },
        {
          path: ':store/product/:slug',
          name: 'cms.store.product',
          component: () => import('../views/ProductView.vue'),
        },
        {
          path: ':store/blog/:slug',
          name: 'cms.store.blog',
          component: () => import('../views/BlogView.vue'),
        }
      ]
    }
  ]
})

export default router
