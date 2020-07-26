<template>
  <div>
    <v-alert
      type="info"
      text
      class="mt-2 text-center"
    >
      {{ $t('auth.email-current', { email: authState.userData && authState.userData.email }) }}<br>
      {{ $t('auth.account-update-below') }}
    </v-alert>
    <FormDialog
      :title="$t('auth.email-update')"
      @save="updateEmailAccount"
      @cancel="cancel"
    >
      <ControlEmail
        v-model="newEmail"
        class="mt-3"
        :label="$t('auth.email-new')"
      />
      <ControlPassword
        v-model="password"
        class="mt-3"
        :label="$t('auth.password-current')"
      />
    </FormDialog>
    <FormDialog
      class="mt-8"
      :title="$t('auth.password-update')"
      @save="updatePasswordAccount"
      @cancel="cancel"
    >
      <ControlPassword
        v-model="newPassword"
        class="mt-3"
        :label="$t('auth.password-new')"
        :should-match="true"
      />
      <v-divider class="my-5" />
      <ControlPassword
        v-model="password"
        class="mt-3"
        :label="$t('auth.password-current')"
      />
    </FormDialog>
  </div>
</template>
<script>
import { startLoading } from '__cli/core/loader';
import { showSuccess, showError } from '__cli/core/messages';
import { FormDialog } from '__cli/core/components';
import { authState, updateEmail, updatePassword } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAccount',
  components: {
    FormDialog,
    ControlEmail,
    ControlPassword
  },
  data () {
    return {
      authState,
      newEmail: null,
      newPassword: null,
      password: null
    };
  },
  methods: {
    updateEmailAccount () {
      const stop = startLoading('email update');
      updateEmail(this.newEmail, this.password)
        .then(() => {
          showSuccess(this.$t('auth.email-sent'));
          this.$router.go(-1);
        })
        .catch(error => showError(error.message))
        .finally(() => stop());
    },
    updatePasswordAccount () {
      const stop = startLoading('password update');
      updatePassword(this.newPassword, this.password)
        .then(() => {
          showSuccess(this.$t('auth.password-updated'));
          this.$router.go(-1);
        })
        .catch(error => showError(error.message))
        .finally(() => stop());
    },
    cancel () {
      this.$router.go(-1);
    }
  }
};
</script>
