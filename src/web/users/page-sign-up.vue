<template>
  <div>
    <FormBase
      title="Sing Up"
      @submit="handleSubmit"
    >
      <template #default>
        <ControlEmail
          v-model="email"
          rules="required"
        />
        <ControlPassword
          v-model="password"
          rules="required"
        />
      </template>
      <template #footer>
        <ButtonPrimary label="Sign Up" />
      </template>
    </FormBase>
    <router-link :to="{name: 'signIn'}">
      Has a account? Go to SignIn
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { FormBase, ControlEmail, ControlPassword, ButtonPrimary } from '@/web/components';

export default {
  name: 'PageSignUp',
  components: { FormBase, ControlEmail, ControlPassword, ButtonPrimary },
  data () {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters(['isSignedIn'])
  },
  watch: {
    isSignedIn: {
      handler (value) {
        if (value) this.$router.push({ name: 'home' });
      }
    }
  },
  methods: {
    ...mapActions(['signUpAction']),
    handleSubmit () {
      this.signUpAction({ email: this.email, password: this.password });
    }
  }
};
</script>
