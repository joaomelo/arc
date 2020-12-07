<template>
  <BaseDialog
    title="Just a moment 🙏"
  >
    <template>
      <p>We are loading the app's features. It will take just a moment.</p>
    </template>
  </BaseDialog>
</template>

<script>
import { BaseDialog } from '@/shared/components';

export default {
  name: 'PageSplash',
  components: { BaseDialog },
  data () {
    return {
      alertMessage: '',
      alertType: ''
    };
  }
};
</script>
