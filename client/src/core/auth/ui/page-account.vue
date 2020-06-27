<template>
  <div>
    <BaseDialog
      :message="emailAlertMessage"
      :message-type="emailAlertType"
    >
      <template>
        <v-form ref="emailForm">
          <h2>Update Email</h2>
          <ControlEmail
            v-model="newEmail"
            class="mt-3"
            label="Email"
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
          @click="updateEmail"
        />
      </template>
    </BaseDialog>
    <BaseDialog
      :message="passwordAlertMessage"
      :message-type="passwordAlertType"
      class="mt-8"
    >
      <template>
        <h2>Update Password</h2>
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
          @click="updatePassword"
        />
      </template>
    </BaseDialog>
  </div>
</template>
<script>
import { startLoading } from '__cli/core/loader';
import { BaseDialog, BaseButton } from '__cli/core/components';
import { authMech } from '../domain';
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
      newEmail: authMech.state.userData.email,
      newPassword: null,
      password: null,
      emailAlertMessage: '',
      emailAlertType: 'error',
      passwordAlertMessage: '',
      passwordAlertType: 'error'
    };
  },
  methods: {
    updateEmail () {
      if (this.$refs.emailForm.validate()) {
        const stop = startLoading('email update');
        authMech.updateEmail(this.newEmail, this.password)
          .then(() => {
            authMech.updateProps({ publicEmail: this.newEmail });
            this.emailAlertMessage = 'We sent you a e-mail verification message';
            this.emailAlertType = 'info';
          })
          .catch(error => {
            this.emailAlertMessage = error.message;
            this.emailAlertType = 'error';
          })
          .finally(() => stop());
      }
    },
    updatePassword () {
      if (this.$refs.passwordForm.validate()) {
        const stop = startLoading('password update');
        authMech.updatePassword(this.newPassword, this.password)
          .then(() => {
            this.passwordAlertMessage = 'Password updated';
            this.passwordAlertType = 'info';
          })
          .catch(error => {
            this.emailAlertMessage = error.message;
            this.emailAlertType = 'error';
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
