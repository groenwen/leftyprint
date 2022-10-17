import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/IndexView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'days',
        component: () => import('../views/DaysView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'carts',
        component: () => import('../views/CartsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/OrdersView.vue')
      },
      {
        path: 'upload',
        component: () => import('../views/Dashboard/UploadFile.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/CouponsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
