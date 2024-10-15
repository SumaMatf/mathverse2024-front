import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/agenda',
    component: () => import ('../views/Agenda.vue'),
    name: 'agenda'
  },
  {
    path: '/news',
    component: () => import ('../views/News.vue'),
    name: 'news'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    name: 'login'
  }
  /*{
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }*/
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('jwt-token') && to.name != 'login')
      return next({name: 'login'})
    
    if (from.name == 'login') return next(false);

    next();
})

export default router
