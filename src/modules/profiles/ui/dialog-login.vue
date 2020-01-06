<template>
  <div>
    <div
      v-if="pageState=AUTH_STATUS.UNSOLVED"
      class="text-center"
    >
      Loading...
    </div>
    <form
      v-if="pageState=AUTH_STATUS.LOGGEDOUT"
      class="text-center"
    >
      <ControlEmail />
      <ControlPassword />
      <BaseButton @click="login" />
    </form>
  </div>
</template>

<script>
import { bus } from '@/core/bus';
import { AUTH_STATUS, AUTH_EVENTS } from '../services';
import { login } from '../domain';

export default {
  name: 'PageLogin',
  data () {
    return {
      AUTH_STATUS,
      pageState: null,
      widgetId: 'login-ui-container'
    };
  },
  mounted () {
    bus.subscribe(AUTH_EVENTS.AUTH_STATUS_CHANGED, this.updatePageState, true);
  },
  methods: {
    updatePageState (payload) {
      this.pageState = payload.status;
    },
    login () {
      login();
    }
  }
};
</script>

<style src="firebaseui/dist/firebaseui.css" />
