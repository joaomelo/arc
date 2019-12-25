import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

import { fireApp } from '@/services/fireapp';

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

function loadLoginUi (elementId) {
  let ui = firebaseui.auth.AuthUI.getInstance();
  if (ui) {
    ui.reset();
  } else {
    ui = new firebaseui.auth.AuthUI(fireApp.auth());
  }
  ui.start(`#${elementId}`, uiConfig);
}

export { loadLoginUi };
