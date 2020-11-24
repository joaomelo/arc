import { PageHome, Page404 } from '@/core/pages';
import { PageAuth } from '@/modules/users';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: PageHome
  },
  {
    name: 'auth',
    path: '/auth',
    component: PageAuth,
    meta: { isPublic: true }
  },
  {
    name: '404',
    path: '/404',
    component: Page404,
    meta: { isPublic: true }
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
];
