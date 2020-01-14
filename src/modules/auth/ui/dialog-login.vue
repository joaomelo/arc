<template>
  <div>
    <h1 class="text-center display-1">
      Arc
    </h1>
    <FormDialog
      v-if="authStatus===AUTH_STATUSES.LOGGEDOUT"
      ref="loginForm"
      :alt-submit-text="$t('modules.auth.login')"
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
import { subscribe } from '@/core/bus';
import { startLoading } from '@/core/load';
import { FormDialog, ControlEmail, ControlPassword } from '@/core/components';
import { AUTH_EVENTS, AUTH_STATUSES } from '../common';
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
      AUTH_STATUSES,
      authStatus: AUTH_STATUSES.UNSOLVED,
      email: null,
      password: null
    };
  },
  created () {
    const stop = startLoading('SOLVING_USER');
    const updateAuthStatus = ({ status }) => {
      this.authStatus = status;
      stop();
    };

    subscribe(AUTH_EVENTS.AUTH_STATUS_CHANGED, updateAuthStatus, true);
  },
  methods: {
    dispatchLogin () {
      const stop = startLoading('LOGGING_IN');
      login(this.email, this.password).then(error => {
        stop();
        if (error) {
          this.$refs.loginForm.throwOperationalError(this.$t('modules.auth.loginError'));
        }
      });
    }
  }
};
</script>
