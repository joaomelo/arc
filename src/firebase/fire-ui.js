import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

import { fireApp } from './fire-app.js';

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult (authResult) {
      return false;
    }
  },
  signInOptions: [
    { provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

function startFireUi (elementId) {
  let ui = firebaseui.auth.AuthUI.getInstance();
  if (ui) {
    ui.reset();
  } else {
    ui = new firebaseui.auth.AuthUI(fireApp.auth());
  }
  ui.start(`#${elementId}`, uiConfig);
}

export { startFireUi };
