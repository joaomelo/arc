<template>
  <div>
    <p>Sing Up</p>
    <router-link :to="{name: 'signIn'}">
      Has a account? Go to SignIn
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageSignUp',
  computed: {
    ...mapGetters('usersStore', ['isSignedIn'])
  }
};
</script>
