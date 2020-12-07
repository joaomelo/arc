<template>
  <span id="MonitorAuth" />
</template>

<script>
import { mapGetters } from 'vuex';
import { AUTH_STATUSES } from '@/domain/users';

export default {
  name: 'MonitorAuth',
  computed: {
    ...mapGetters(['status'])
  },
  watch: {
    status: {
      handler: 'handleStateChange',
      immediate: true
    },
    $route: {
      handler: 'handleStateChange',
      immediate: true
    }
  },
  methods: {
    handleStateChange () {
      const status = this.status;
      const routeName = this.$route.name;

      if (status === AUTH_STATUSES.UNSOLVED && routeName !== 'unsolved') {
        return this.$router.push({ name: 'unsolved' });
      };

      const isSignOutAllowedRoute = ['signUp', 'signIn', '404'].includes(routeName);
      if (status === AUTH_STATUSES.SIGNED_OUT && !isSignOutAllowedRoute) {
        return this.$router.push({ name: 'signUp' });
      };

      const isSignInBlockedRoute = ['signUp', 'signIn', 'unsolved'].includes(routeName);
      if (status === AUTH_STATUSES.SIGNED_IN && isSignInBlockedRoute) {
        return this.$router.push({ name: 'home' });
      };
    }
  }
};
</script>
