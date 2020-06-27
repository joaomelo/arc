<template>
  <BaseDialog
    title="email confirmation"
    :message="alertMessage"
    :message-type="alertType"
  >
    <template>
      <p>Please confirm the {{ email }} e-mail address by clicking in the message link we sent to you.</p>
      <p>If you don't the see the email in your inbox, make sure to check the spam folder.</p>
    </template>
    <template v-slot:actions>
      <ButtonLogout />
      <v-btn
        color="info"
        @click="sendEmailVerification"
      >
        Resend e-mail
      </v-btn>
    </template>
  </BaseDialog>
</template>

<script>
import { startLoading } from '__cli/core/loader';
import { BaseDialog } from '__cli/core/components';
import { authMech } from '../domain';
import ButtonLogout from './button-logout';

export default {
  name: 'PageUnverified',
  components: { BaseDialog, ButtonLogout },
  data () {
    return {
      alertMessage: '',
      alertType: '',
      email: authMech.state.userData.email
    };
  },
  methods: {
    sendEmailVerification () {
      const stop = startLoading('sending email verification');
      authMech.sendEmailVerification()
        .then(() => {
          this.alertType = 'info';
          this.alertMessage = 'email successfully sent';
        })
        .catch(error => {
          this.alertType = 'error';
          this.alertMessage = error.message;
          console.error(error);
        })
        .finally(() => stop());
    }
  }
};
</script>
