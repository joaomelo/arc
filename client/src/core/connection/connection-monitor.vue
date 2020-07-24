<template>
  <span />
</template>

<script>
import { showInfo } from '__cli/core/messages';

export default {
  name: 'ConnectionMonitor',
  data () {
    return {
      isConnected: true
    };
  },
  watch: {
    isConnected (value) {
      const status = value ? 'Connected to' : 'Disconnect from';
      showInfo(`${status} the internet`);
    }
  },
  mounted () {
    window.addEventListener('offline', () => {
      this.isConnected = false;
    });
    window.addEventListener('online', () => {
      this.isConnected = true;
    });
  }
};
</script>
