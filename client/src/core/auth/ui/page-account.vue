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
    <EnhancedDialog
      :title="$t('auth.email-update')"
      :action="() => updateEmailAccount()"
      :message="$t('auth.email-sent')"
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
    </EnhancedDialog>
    <EnhancedDialog
      class="mt-8"
      :title="$t('auth.password-update')"
      :action="() => updatePasswordAccount()"
      :message="$t('auth.password-updated')"
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
    </EnhancedDialog>
  </div>
</template>
<script>
import { EnhancedDialog } from '__cli/core/components';
import { authState, updateEmail, updatePassword } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAccount',
  components: {
    EnhancedDialog,
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
      return updateEmail(this.newEmail, this.password);
    },
    updatePasswordAccount () {
      return updatePassword(this.newPassword, this.password);
    }
  }
};
</script>
