<template>
  <div>
    <p>Sing Up</p>
    <ControlEmail />
    <router-link :to="{name: 'signIn'}">
      Has a account? Go to SignIn
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ControlEmail } from '@/web/components';

export default {
  name: 'PageSignUp',
  components: { ControlEmail },
  computed: {
    ...mapGetters(['isSignedIn'])
  }
};
</script>
