<template>
  <BaseDialog
    title="Email Confirmation"
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
import { showMessage } from '__cli/core/messages';
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
        .then(() => showMessage({ text: 'email successfully sent', type: 'success' }))
        .catch(error => showMessage({ text: error.message, type: 'error' }))
        .finally(() => stop());
    }
  }
};
</script>
