import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import categoryView from '../views/categoryView.vue'
import DocumentView from '../views/DocumentView.vue'
import UserView from '../views/UserView.vue'
import permissionView from '../views/permissionView.vue'
import LoginView from '../views/LoginView.vue'

import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
   
   
    
    {
      path: '/category',
      name: 'category',
      component: categoryView
    },
    {
      path: '/workshop',
      name: 'document',
      component: DocumentView
    },
    {
      path: '/User',
      name: 'User',
      component: UserView
    },
    {
      path: '/permission',
      name: 'permission',
      component: permissionView
    },{
      path: '/Profile',
      name: 'Profile',
      component: ProfileView
    },

    {
      path: '/Login',
      name: 'Login',
      component: LoginView,
    },
   
  ]
})

export default router
