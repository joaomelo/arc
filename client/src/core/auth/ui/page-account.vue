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
    <BaseDialog
      :title="$t('auth.email-update')"
    >
      <template>
        <v-form ref="emailForm">
          <ControlEmail
            v-model="newEmail"
            class="mt-3"
            :label="$t('auth.email-new')"
          />
          <ControlPassword
            v-model="password"
            class="mt-3"
            :label="$t('auth.password-confirm')"
          />
        </v-form>
      </template>
      <template v-slot:actions>
        <BackButton @back="cancel" />
        <BaseButton
          color="success"
          icon="mdi-content-save"
          :text="$t('auth.email-update')"
          @click="updateEmailAccount"
        />
      </template>
    </BaseDialog>
    <BaseDialog
      :title="$t('auth.password-update')"
      class="mt-8"
    >
      <template>
        <v-form ref="passwordForm">
          <ControlPassword
            v-model="newPassword"
            class="mt-3"
            :should-match="true"
          />
          <v-divider class="my-5" />
          <ControlPassword
            v-model="password"
            class="mt-3"
            :label="$t('auth.password-confirm')"
          />
        </v-form>
      </template>
      <template v-slot:actions>
        <BackButton @back="cancel" />
        <BaseButton
          color="success"
          icon="mdi-content-save"
          :text="$t('auth.password-update')"
          @click="updatePasswordAccount"
        />
      </template>
    </BaseDialog>
  </div>
</template>
<script>
import { startLoading } from '__cli/core/loader';
import { showMessage } from '__cli/core/messages';
import { BaseDialog, BaseButton, BackButton } from '__cli/core/components';
import { authState, updateEmail, updatePassword } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAccount',
  components: {
    BaseDialog,
    ControlEmail,
    ControlPassword,
    BaseButton,
    BackButton
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
      if (this.$refs.emailForm.validate()) {
        const stop = startLoading('email update');
        updateEmail(this.newEmail, this.password)
          .then(() => {
            showMessage({
              text: this.$t('auth.email-sent'),
              type: 'success'
            });
            this.$router.go(-1);
          })
          .catch(error => {
            showMessage({
              text: error.message,
              type: 'error'
            });
          })
          .finally(() => stop());
      }
    },
    updatePasswordAccount () {
      if (this.$refs.passwordForm.validate()) {
        const stop = startLoading('password update');
        updatePassword(this.newPassword, this.password)
          .then(() => {
            showMessage({
              text: this.$t('auth.password-updated'),
              type: 'success'
            });
            this.$router.go(-1);
          })
          .catch(error => {
            showMessage({
              text: error.message,
              type: 'error'
            });
          })
          .finally(() => stop());
      }
    },
    cancel () {
      this.$router.go(-1);
    }
  }
};
</script>
