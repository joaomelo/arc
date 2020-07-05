<template>
  <div>
    <BaseDialog
      :message="alertMessage"
    >
      <template>
        <v-tabs
          v-if="enableSignup"
          v-model="tab"
          grow
        >
          <v-tab>Login</v-tab>
          <v-tab>Sign Up</v-tab>
        </v-tabs>
        <v-form
          ref="form"
          data-test="auth-form"
        >
          <ControlEmail
            v-model="email"
          />
          <ControlPassword
            v-model="password"
            :should-match="outfit.shouldMatch"
          />
        </v-form>
      </template>
      <template v-slot:actions>
        <v-btn
          data-test="auth-btn"
          color="success"
          @click="runAuthAction"
        >
          {{ outfit.button }}
        </v-btn>
      </template>
    </BaseDialog>
    <v-alert
      text
      type="warning"
      class="mt-8"
      :style="{ 'text-align': 'justify' }"
    >
      {{ disclaimer }}
    </v-alert>
  </div>
</template>
<script>
import { appDescription } from '__cli/core/meta';
import { startLoading } from '__cli/core/loader';
import { BaseDialog } from '__cli/core/components';
import { authMech } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAuth',
  components: {
    BaseDialog,
    ControlEmail,
    ControlPassword
  },
  data () {
    return {
      enableSignup: true,
      tab: 0,
      email: null,
      password: null,
      alertMessage: '',
      disclaimer: `
        ${appDescription()}

        This is personal instance and you are welcome to freely sign up for an 
        account. But since this is a hobby project, i can't guarantee any service 
        level. 

        The most reliable way to use the app is first check the open sourced code in 
        GitHub and when confortable raise your own instance.`
    };
  },
  computed: {
    outfit () {
      const options = {
        0: {
          mode: 'LOGIN',
          button: 'Log In',
          action: 'signIn',
          shouldMatch: false
        },
        1: {
          mode: 'SIGNUP',
          button: 'Create user',
          action: 'signUp',
          shouldMatch: true
        }
      };

      return options[this.tab];
    }
  },
  methods: {
    runAuthAction () {
      if (this.$refs.form.validate()) {
        const stop = startLoading('authenticate');
        const method = this.outfit.action;
        authMech[method](this.email, this.password)
          .catch(e => {
            console.error(e);
            this.alertMessage = e.message;
          })
          .finally(() => stop());
      }
    }
  }
};
</script>
