<template>
  <div>
    <h1 class="text-center display-1">
      Arc
    </h1>
    <div
      v-if="authStatus!==AUTH_STATUS.LOGGEDOUT"
      class="text-center"
    >
      Loading...
    </div>
    <FormDialog
      v-else
      ref="loginForm"
      :alt-submit-text="$t('forms.login')"
      hide-cancel-button
      @save="dispatchLogin"
    >
      <ControlEmail
        v-model="email"
        is-required
      />
      <ControlPassword
        v-model="password"
        is-required
      />
    </FormDialog>
  </div>
</template>

<script>
import { startLoadTask, stopLoadTask } from '@/core/load';
import { FormDialog, ControlEmail, ControlPassword } from '@/core/components';
import { AUTH_STATUS } from '../common';
import { login } from '../domain';

export default {
  name: 'DialogLogin',
  components: {
    FormDialog,
    ControlEmail,
    ControlPassword
  },
  data () {
    return {
      AUTH_STATUS,
      email: null,
      password: null
    };
  },
  computed: {
    authStatus () {
      return this.$store.state.auth.authStatus;
    }
  },
  methods: {
    dispatchLogin () {
      startLoadTask('login');
      login(this.email, this.password).then(error => {
        stopLoadTask('login');
        if (error) {
          this.$refs.loginForm.throwOperationalError(this.$t('errors.login'));
        }
      });
    }
  }
};
</script>
