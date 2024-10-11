import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Agenda'
  },
  {
    path: '/folder/Agenda',
    component: () => import ('../views/Agenda.vue')
  },
  {
    path: '/folder/News',
    component: () => import ('../views/News.vue')
  },
  /*{
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
