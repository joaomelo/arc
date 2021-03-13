<template>
  <PageSignWrapper
    :config="config"
    @sign="handleSubmit"
  >
    <ControlEmail
      id="email"
      v-model="email"
      :label="$t('auth.email')"
      rules="required"
    />
    <ControlPassword
      id="password"
      v-model="password"
      :label="$t('auth.password')"
      rules="required"
    />
  </PageSignWrapper>
</template>

<script>
import { mapActions } from 'vuex';
import {
  ControlEmail,
  ControlPassword
} from '../components';
import PageSignWrapper from './page-sign-wrapper';

export default {
  name: 'PageSignIn',
  components: {
    ControlEmail,
    ControlPassword,
    PageSignWrapper
  },
  data () {
    const config = {
      headerText: 'auth.sign-in-to-arc',
      link: {
        route: 'signUp',
        text: 'auth.go-sign-up'
      },
      button: {
        id: 'sign-in',
        label: 'auth.sign-in'
      },
      error: {
        code: '',
        text: ''
      }
    };

    return {
      config,
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['signInAction']),
    async handleSubmit () {
      try {
        const method = 'email';
        const credentials = { email: this.email, password: this.password };
        await this.signInAction({ method, credentials });
      } catch (error) {
        if (error.isOperational) {
          this.config.error.code = error.code;
          this.config.error.text = error.description;
        } else {
          throw error;
        }
      }
    }
  }
};
</script>
