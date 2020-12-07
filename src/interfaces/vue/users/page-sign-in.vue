<template>
  <div>
    <p>Sing In</p>
    <router-link :to="{name: 'signUp'}">
      Don't have a account? Go to SignUp
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageSignIn',
  computed: {
    ...mapGetters(['isSignedIn'])
  }
};
</script>
