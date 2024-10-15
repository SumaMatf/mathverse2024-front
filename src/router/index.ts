import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import ('../views/Agenda.vue'),
    name: 'agenda',
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    name: 'login'
  },
  {
    path: '/news',
    component: () => import ('../views/News.vue'),
    name: 'news'
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
  const isAuthenticated = !!localStorage.getItem('jwt-token');

  if (!isAuthenticated && to.name !== 'login') {
    return next({ name: 'login' });
  }

  if (isAuthenticated && to.name === 'login') {
    return next({ name: 'agenda' });
  }

  next();
})

export default router
