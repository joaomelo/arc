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
    <ControlPasswordWithConfirmation
      v-model="password"
      :ids="['password','repeat-password']"
      :labels="[$t('auth.password'),$t('auth.password-repeat')]"
      rules="required"
    />
  </PageSignWrapper>
</template>

<script>
import { mapActions } from 'vuex';
import {
  ControlEmail,
  ControlPasswordWithConfirmation
} from '../components';
import PageSignWrapper from './page-sign-wrapper';

export default {
  name: 'PageSignUp',
  components: {
    ControlEmail,
    ControlPasswordWithConfirmation,
    PageSignWrapper
  },
  data () {
    const config = {
      headerText: 'auth.sign-up-to-arc',
      link: {
        route: 'signIn',
        text: 'auth.go-sign-in'
      },
      button: {
        id: 'sign-up',
        label: 'auth.sign-up'
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
    ...mapActions(['signUpAction']),
    async handleSubmit () {
      try {
        const method = 'email';
        const credentials = { email: this.email, password: this.password };
        await this.signUpAction({ method, credentials });
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
