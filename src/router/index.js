import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import DestinationView from '../views/DestinationView.vue'
import GallryView from '../views/GallryView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'


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
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/Destination',
      name: 'Destination',
      component: DestinationView
    },
    {
      path: '/Gallry',
      name: 'Gallry',
      component: GallryView
    },
    {
      path: '/User',
      name: 'User',
      component: UserView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },

   
  ]
})

export default router
