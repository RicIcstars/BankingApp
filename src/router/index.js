import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'deposit',
      component: HomeView
    },
    {
      path: '/transfer',
      name: 'transfer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TransferView.vue')
    },
    {

    path: '/withdrawal',
    name: 'withdrawal',
    component: () => import('../views/WithdrawalView.vue')
    },
  ]
})

export default router