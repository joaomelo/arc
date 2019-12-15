import 'firebase/auth';

import { appMode } from '@/helpers/enviroment.js';
import { firebase, fireApp } from '@/services/fireapp';

class Auth {
  constructor () {
    this.isUserSolved = false;
    this.callbacks = [];
    this.fireAuth = fireApp.auth();

    // disabling persistence in dev makes tests more reliable
    const authPersistence = (appMode() !== 'prod') ? 'NONE' : 'LOCAL';
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence[authPersistence]);

    this.fireAuth.onAuthStateChanged(user => {
      this.isUserSolved = true;
      this.callbacks.forEach(callback => callback(user, this.loginStatus));
    });
  }

  addCallback (callback) {
    this.isUserSolved && callback(this.currentUser, this.loginStatus);
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
