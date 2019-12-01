<template>
  <div
    id="login-ui-container"
    class="text-center"
  />
</template>

<script>
import { startFireUi } from '@/services/fireauth';

export default {
  name: 'PageLogin',
  mounted () {
    startFireUi('login-ui-container');
  }
};
</script>

<style src="firebaseui/dist/firebaseui.css" />
