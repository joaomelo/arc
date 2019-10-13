import 'firebase/auth';

import { fireApp } from './fire-app.js';

class Auth {
  constructor () {
    this.isUserSolved = false;
    this.callbacks = [];
    this.fireAuth = fireApp.auth();

    this.fireAuth.onAuthStateChanged(user => {
      this.isUserSolved = true;
      this.callbacks.forEach(callback => callback(user, this.loginStatus));
    });
  }

  addCallback (callback, imediate = false) {
    imediate && callback(this.currentUser, this.loginStatus);
    this.callbacks.push(callback);
  }

  get loginStatus () {
    if (!this.isUserSolved) {
      return 'unsolved';
    } else if (this.currentUser !== null) {
      return 'loggedin';
    } else {
      return 'loggedout';
    }
  }

  get currentUser () {
    return this.fireAuth.currentUser;
  }

  async logout () {
    await this.fireAuth.signOut();
  }
};

export default new Auth();
