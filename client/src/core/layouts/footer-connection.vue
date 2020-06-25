<template>
  <v-footer
    v-if="!isConnected"
    app
    padless
    color="info"
    class="justify-center white--text font-weight-bold"
  >
    Not Connect to The Internet
  </v-footer>
</template>

<script>
export default {
  name: 'FooterConnection',
  data () {
    return {
      isConnected: true
    };
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
