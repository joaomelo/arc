<template>
  <div>
    <div
      id="login-ui-container"
      class="text-center"
    />
    <div
      v-if="status === 'unsolved'"
      class="text-center"
    >
      Loading...
    </div>
  </div>
</template>

<script>
import { startFireUi } from '@/firebase';

export default {
  name: 'PageLogin',
  computed: {
    status () {
      return this.$store.getters.getLoginStatus;
    }
  },
  watch: {
    status (status, oldStatus) {
      if (status === 'loggedin') this.$router.push({ name: 'assetsList' });
      if (status === 'loggedout') startFireUi('login-ui-container');
    }
  },
  created () {
    this.$store.dispatch('observeStatusChange');
  }
};
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
