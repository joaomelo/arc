import { PageHome, Page404 } from '@/web/pages';
import { PageAuth, PageSignUp, PageSignIn } from '@/web/users';

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
    name: 'signUp',
    path: '/sign-up',
    component: PageSignUp,
    meta: { isPublic: true }
  },
  {
    name: 'signIn',
    path: '/sign-in',
    component: PageSignIn,
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
