import 'firebase/auth';

import { fireApp } from './fire-app.js';
import router from '@/router.js';

const auth = fireApp.auth();

const authPlugin = {
  install (Vue) {
    Vue.prototype.$auth = {
      isUserSolved: false,
      async logout () {
        await auth.signOut();
      },
      isLoggedIn () {
        return auth.currentUser != null;
      },
      getUser () {
        return auth.currentUser;
      },
      getUserId () {
        return auth.currentUser.uid;
      }
    };

    auth.onAuthStateChanged(user => {
      Vue.prototype.$auth.isUserSolved = true;
      if (!user && router.currentRoute.name !== 'login') {
        router.push({ name: 'login' });
      } else if (user && router.currentRoute.name !== 'home') {
        router.push({ name: 'home' });
      }
    });
  }
};

export { authPlugin };
