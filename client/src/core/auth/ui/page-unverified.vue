<template>
  <BaseDialog
    title="email confirmation"
    :message="alertMessage"
    :message-type="alertType"
  >
    <template>
      <p>Please confirm the <b>{{ authState.userData && authState.userData.email }}</b> e-mail address by clicking in the message link we sent to you.</p>
      <p>If you don't the see the email in your inbox, make sure to check the spam folder.</p>
    </template>
    <template v-slot:actions>
      <ButtonLogout />
      <v-btn
        color="info"
        @click="sendEmailVerificationToUser"
      >
        Resend e-mail
      </v-btn>
    </template>
  </BaseDialog>
</template>

<script>
import { startLoading } from '__cli/core/loader';
import { BaseDialog } from '__cli/core/components';
import { authState, sendEmailVerification } from '../domain';
import ButtonLogout from './button-logout';

export default {
  name: 'PageUnverified',
  components: { BaseDialog, ButtonLogout },
  data () {
    return {
      alertMessage: '',
      alertType: '',
      authState
    };
  },
  methods: {
    sendEmailVerificationToUser () {
      const stop = startLoading('sending email verification');
      sendEmailVerification()
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
