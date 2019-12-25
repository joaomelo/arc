import { PageLogin, UserEdit } from '../components';

const authRoutes = {
  login: {
    path: '/login',
    name: 'login',
    component: PageLogin
  },
  userEdit: {
    path: 'users/:itemId',
    name: 'userEdit',
    component: UserEdit,
    props: true
  }
};

export { authRoutes };
