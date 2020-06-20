<template>
  <a
    href="#"
    @click="dispatchLogout"
  >
    {{ $t('modules.auth.logout', {user: username}) }}
  </a>
</template>

<script>
import { getCurrentUsername, logout } from '../domain';

export default {
  name: 'LinkLogout',
  data () {
    return {
      username: getCurrentUsername()
    };
  },
  methods: {
    dispatchLogout () {
      logout();
    }
  }
};
</script>
