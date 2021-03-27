<template>
  <span id="MonitorAuth" />
</template>

<script>
import { mapGetters } from 'vuex';
import { AUTH_STATUSES } from '@/domain/auth';

export default {
  name: 'MonitorAuth',
  data () {
    return {
      userAttemptedRoute: ''
    };
  },
  computed: {
    ...mapGetters(['status'])
  },
  watch: {
    status: {
      handler: 'handleStateChange',
      immediate: true
    },
    '$route.name': {
      handler: 'handleStateChange',
      immediate: true
    }
  },
  methods: {
    handleStateChange (newValue, oldValue) {
      const status = this.status;
      const routeName = this.$route.name;

      const isUnsolvedAllowed = name => name === 'unsolved';
      if (status === AUTH_STATUSES.UNSOLVED && !isUnsolvedAllowed(routeName)) {
        this.userAttemptedRoute = routeName;
        return this.$router.push({ name: 'unsolved' });
      };

      const isSignOutAllowed = name => ['signUp', 'signIn', '404'].includes(name);
      if (status === AUTH_STATUSES.SIGNED_OUT && !isSignOutAllowed(routeName)) {
        const name = isSignOutAllowed(this.userAttemptedRoute) ? this.userAttemptedRoute : 'signUp';
        return this.$router.push({ name });
      };

      const isSignInAllowed = name => name && !['signUp', 'signIn', 'unsolved'].includes(name);
      if (status === AUTH_STATUSES.SIGNED_IN && !isSignInAllowed(routeName)) {
        const name = isSignInAllowed(this.userAttemptedRoute) ? this.userAttemptedRoute : 'home';
        return this.$router.push({ name });
      };
    }
  }
};
</script>
