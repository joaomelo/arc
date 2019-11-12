<template>
  <span id="watch-auth" />
</template>
<script>
export default {
  name: 'WatchAuth',
  computed: {
    status () {
      return this.$store.getters.getLoginStatus;
    },
    route () {
      return this.$router.currentRoute.name;
    }
  },
  watch: {
    status: {
      handler (newStatus) {
        const statusRoutes = {
          unsolved: 'unsolved',
          loggedin: 'start',
          loggedout: 'login'
        };
        this.$router.push({ name: statusRoutes[newStatus] });
      },
      imediate: true
    },
    route: {
      handler (newRoute) {
        if (this.status === 'unsolved' && newRoute !== 'unsolved') {
          this.$router.push({ name: 'unsolved' });
        }
        if (this.status === 'loggedout' && newRoute !== 'login') {
          this.$router.push({ name: 'login' });
        }
      },
      imediate: true
    }
  },
  created () {
    this.$store.dispatch('setAuth');
  }
};
</script>
