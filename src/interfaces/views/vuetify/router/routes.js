import { PageHome, Page404 } from '../pages';
import { PageUnsolved, PageSignUp, PageSignIn } from '../users';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: PageHome
  },
  {
    name: 'unsolved',
    path: '/unsolved',
    component: PageUnsolved
  },
  {
    name: 'signUp',
    path: '/sign-up',
    component: PageSignUp
  },
  {
    name: 'signIn',
    path: '/sign-in',
    component: PageSignIn
  },
  {
    name: '404',
    path: '/404',
    component: Page404
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
];
