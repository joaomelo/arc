import 'firebase/auth';

import { fireApp } from '@/services/fireapp';
import { bus } from '@/core/bus';
import { AUTH_STATUS, AUTH_EVENTS } from './types.js';

class Auth {
  constructor () {
    this.state = AUTH_STATUS.UNSOLVED;
    this.authService = fireApp.auth();

    this.authService.onAuthStateChanged(user => {
      this.state = user ? AUTH_STATUS.LOGGEDIN : AUTH_STATUS.LOGGEDOUT;
      const payload = {
        status: this.state,
        user
      };
      bus.publish(AUTH_EVENTS.AUTH_STATUS_CHANGED, payload);
    });
  }

  get currentUser () {
    return this.authService.currentUser;
  }

  async logout () {
    await this.authService.signOut();
  }
};

const auth = new Auth();
export { auth };
