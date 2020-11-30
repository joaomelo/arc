<template>
  <div>
    <p>Sing Up</p>
    <FormBase>
      <ControlEmail />
      <ControlPassword />
      <ControlPassword />
      <ButtonPrimary label="Sign Up" />
    </FormBase>
    <router-link :to="{name: 'signIn'}">
      Has a account? Go to SignIn
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FormBase, ControlEmail, ControlPassword, ButtonPrimary } from '@/web/components';

export default {
  name: 'PageSignUp',
  components: { FormBase, ControlEmail, ControlPassword, ButtonPrimary },
  computed: {
    ...mapGetters(['isSignedIn'])
  }
};
</script>
