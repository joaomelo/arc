import 'firebase/auth';

import { fireApp } from './fire-app.js';
import router from '@/src/router.js';
import store from '@/src/store';

const auth = fireApp.auth();

const authPlugin = {
  install (Vue) {
    Vue.prototype.$auth = {
      async logout () {
        await auth.signOut();
      }
    };

    auth.onAuthStateChanged(user => {
      store.commit('setUser', { user });
      if (!user && router.currentRoute.name !== 'login') {
        router.push({ name: 'login' });
      }
    });
  }
};

export { authPlugin };
