<template>
  <div>
    <BaseDialog>
      <template>
        <v-tabs
          v-model="tab"
          grow
        >
          <v-tab>{{ $t('auth.sign-in') }}</v-tab>
          <v-tab>{{ $t('auth.sign-up') }}</v-tab>
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
            :label="$t('auth.password')"
          />
        </v-form>
      </template>
      <template v-slot:actions>
        <BaseButton
          color="success"
          :text="outfit.button"
          @click="runAuthAction"
        />
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
import { showError } from '__cli/core/messages';
import { BaseDialog, BaseButton } from '__cli/core/components';
import { signUp, signIn } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAuth',
  components: {
    BaseButton,
    BaseDialog,
    ControlEmail,
    ControlPassword
  },
  data () {
    return {
      tab: 0,
      email: null,
      password: null,
      disclaimer: `
        ${appDescription()}

        This is a personal instance and you are welcome to freely sign up for an 
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
          button: this.$t('auth.sign-in'),
          action: signIn,
          shouldMatch: false
        },
        1: {
          mode: 'SIGNUP',
          button: this.$t('auth.sign-up'),
          action: signUp,
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
        const action = this.outfit.action;
        action({ email: this.email, password: this.password })
          .catch(error => showError(error.message))
          .finally(() => stop());
      }
    }
  }
};
</script>
