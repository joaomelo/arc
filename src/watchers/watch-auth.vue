<template>
  <span id="watch-auth" />
</template>
<script>
import { mapAllBinders } from '@/store/helpers.js';

export default {
  name: 'WatchAuth',
  computed: {
    status () {
      return this.$store.getters.getLoginStatus;
    }
  },
  watch: {
    status: {
      handler (newStatus) {
        const statusRoutes = {
          unsolved: 'solve',
          loggedin: 'start',
          loggedout: 'login'
        };
        (newStatus === 'loggedin') && this.bootstrap();
        this.$router.push({ name: statusRoutes[newStatus] });
      },
      imediate: true
    }
  },
  methods: {
    bootstrap () {
      const binders = mapAllBinders();
      binders.forEach(b => this.$store.dispatch(b));
    }
  }
};
</script>
