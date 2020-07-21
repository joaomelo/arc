<template>
  <BaseDialog
    :title="$t('auth.email-confirmation')"
  >
    <template>
      <p>{{ $t('auth.email-confirmation-pledge', { email: authState.userData && authState.userData.email }) }}</p>
      <p>{{ $t('auth.email-check-spam') }}</p>
    </template>
    <template v-slot:actions>
      <ButtonLogout />
      <BaseButton
        color="info"
        icon="mdi-email"
        :text="$t('auth.email-resend')"
        @click="sendEmailVerificationToUser"
      />
    </template>
  </BaseDialog>
</template>

<script>
import { startLoading } from '__cli/core/loader';
import { BaseButton, BaseDialog } from '__cli/core/components';
import { showMessage } from '__cli/core/messages';
import { authState, sendEmailVerification } from '../domain';
import ButtonLogout from './button-logout';

export default {
  name: 'PageUnverified',
  components: { BaseButton, BaseDialog, ButtonLogout },
  data () {
    return {
      authState
    };
  },
  methods: {
    sendEmailVerificationToUser () {
      const stop = startLoading('sending email verification');
      sendEmailVerification()
        .then(() => showMessage({ text: this.$t('auth.email-sent'), type: 'success' }))
        .catch(error => showMessage({ text: error.message, type: 'error' }))
        .finally(() => stop());
    }
  }
};
</script>
