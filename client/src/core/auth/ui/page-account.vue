<template>
  <div>
    <v-alert
      type="info"
      text
      class="mt-2 text-center"
    >
      Your current email is {{ authState.userData && authState.userData.email }}.<br>
      Below you can update both email and password.
    </v-alert>
    <BaseDialog
      title="Update Email"
    >
      <template>
        <v-form ref="emailForm">
          <ControlEmail
            v-model="newEmail"
            class="mt-3"
            label="Type the New Email"
          />
          <ControlPassword
            v-model="password"
            class="mt-3"
            label="Confirm with Current Password"
          />
        </v-form>
      </template>
      <template v-slot:actions>
        <BaseButton
          color="secondary"
          icon="mdi-backspace"
          text="Back"
          @click="cancel"
        />
        <BaseButton
          color="success"
          icon="mdi-content-save"
          text="Update Email"
          @click="updateEmailAccount"
        />
      </template>
    </BaseDialog>
    <BaseDialog
      title="Update Password"
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
            label="Confirm with Current Password"
          />
        </v-form>
      </template>
      <template v-slot:actions>
        <BaseButton
          color="secondary"
          icon="mdi-backspace"
          text="Back"
          @click="cancel"
        />
        <BaseButton
          color="success"
          icon="mdi-content-save"
          text="Update Password"
          @click="updatePasswordAccount"
        />
      </template>
    </BaseDialog>
  </div>
</template>
<script>
import { startLoading } from '__cli/core/loader';
import { showMessage } from '__cli/core/messages';
import { BaseDialog, BaseButton } from '__cli/core/components';
import { authState, updateEmail, updatePassword } from '../domain';
import ControlEmail from './control-email';
import ControlPassword from './control-password';

export default {
  name: 'PageAccount',
  components: {
    BaseDialog,
    ControlEmail,
    ControlPassword,
    BaseButton
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
              text: 'A e-mail verification message was sent',
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
              text: 'Password updated',
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
