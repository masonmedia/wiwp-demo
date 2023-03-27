import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AboutView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/alternate',
      name: 'Alternate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AlternateView.vue')
    },
    {
      path: '/:slug',
      name: 'Detail',
      component: () => import('../views/Detail.vue')
    }
  //   {
  //     path: "/breweries",
  //     name: "Breweries",
  //     component: () => import('../views/Breweries.vue')
  // },
  //   {
  //     path: "/brewery/:id",
  //     name: "BreweryDetail",
  //     component: () => import('../views/BreweryDetail.vue')
  // }
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})

export default router
