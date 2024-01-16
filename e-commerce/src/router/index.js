import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      children: [
        {
          path: '',
          component: () => import('../views/NewProduct.vue')
        },
      ] 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Shop.vue')
    },
    
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
  
      component: () => import('../views/ProductDetail.vue')
    },
    { 
      path: '/login', 
      name : 'Login',
      component: () => import('../components/pages/LoginPage.vue') 
    },
    { 
      path: '/register',
      name : 'Register', 
      component: () => import('../components/pages/RegisterPage.vue') 
    },
    { 
      path: '/dashboard', 
      name : 'dashboard',
      component: () => import('../components/pages/DashboardPage.vue') 
     }
  ]
})

export default router
