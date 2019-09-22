<template>
  <div id="login-ui-container" />
</template>

<script>
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

import { fireApp } from '@/src/firebase';
import router from '@/src/router.js';

const uiConfig = {
  signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult (authResult) {
      router.push('/');
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

export default {
  name: 'PageLogin',
  mounted () {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (ui) {
      ui.reset();
    } else {
      ui = new firebaseui.auth.AuthUI(fireApp.auth());
    }
    ui.start('#login-ui-container', uiConfig);
  }
};
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
