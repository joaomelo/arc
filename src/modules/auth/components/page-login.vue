<template>
  <div>
    <div
      v-if="pageState='unsolved'"
      class="text-center"
    >
      Loading...
    </div>
    <div
      v-if="pageState='loggedout'"
      :id="{widgetId}"
      class="text-center"
    />
  </div>
</template>

<script>
import { bus } from '@/core/bus';
import { AUTH_STATUS, AUTH_EVENTS, loadLoginUi } from '../services';

export default {
  name: 'PageLogin',
  data () {
    return {
      pageState: null,
      widgetId: 'login-ui-container'
    };
  },
  mounted () {
    bus.subscribe(AUTH_EVENTS.AUTH_STATUS_CHANGED, this.updateUi, true);
  },
  methods: {
    updateUi (payload) {
      if (payload.status === AUTH_STATUS.LOGGEDOUT && this.pageState !== AUTH_STATUS.LOGGEDOUT) {
        loadLoginUi(this.widgetId);
      };
      this.pageState = payload.status;
    }
  }
};
</script>

<style src="firebaseui/dist/firebaseui.css" />
