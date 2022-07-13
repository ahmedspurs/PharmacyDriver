import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/HomePage.vue'
import MapPage from '../views/MapPage.vue'

const routes= [
  {
    path: '/',
    redirect: '/tabs/HomePage'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/HomePage'
      },
      {
        path: 'HomePage',
        component: HomePage
      },
      {
        path: 'MapPage',
        component: MapPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
