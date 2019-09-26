import 'firebase/auth';

import { fireApp } from './fire-app.js';
import router from '@/router.js';

const auth = fireApp.auth();

const authPlugin = {
  install (Vue) {
    Vue.prototype.$auth = {
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
      if (!user && router.currentRoute.name !== 'login') {
        router.push({ name: 'login' });
      }
    });
  }
};

export { authPlugin };
