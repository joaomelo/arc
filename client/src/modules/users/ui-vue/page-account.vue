<template>
  <div>
    <v-alert
      type="info"
      text
      class="mt-2 text-center"
    >
      {{ $t('users.email-current', { email: authState.userData && authState.userData.email }) }}<br>
      {{ $t('users.account-update-below') }}
    </v-alert>
    <LoaderDialog
      :title="$t('users.email-update')"
      :action="() => handleUpdateEmail()"
      :message="$t('users.email-updated')"
    >
      <ControlEmail
        v-model="newEmail"
        class="mt-3"
        :label="$t('users.email-new')"
      />
      <ControlPassword
        v-model="password"
        class="mt-3"
        :label="$t('users.password-current')"
      />
    </LoaderDialog>
    <LoaderDialog
      class="mt-8"
      :title="$t('users.password-update')"
      :action="() => handleUpdatePassword()"
      :message="$t('users.password-updated')"
    >
      <ControlPassword
        v-model="newPassword"
        class="mt-3"
        :label="$t('users.password-new')"
        :should-match="true"
      />
      <v-divider class="my-5" />
      <ControlPassword
        v-model="password"
        class="mt-3"
        :label="$t('users.password-current')"
      />
    </LoaderDialog>
  </div>
</template>
<script>
import { LoaderDialog } from '__cli/core/components';
import { authState, updateEmail, updatePassword } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAccount',
  components: {
    LoaderDialog,
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
    handleUpdateEmail () {
      return updateEmail(this.newEmail, this.password);
    },
    handleUpdatePassword () {
      return updatePassword(this.newPassword, this.password);
    }
  }
};
</script>
