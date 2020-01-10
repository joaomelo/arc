<template>
  <a
    href="#"
    @click="dispatchLogout"
  >
    {{ $t('modules.auth.logout', {user: username}) }}
  </a>
</template>

<script>
import { currentUsername, logout } from '../domain';

export default {
  name: 'LinkLogout',
  data () {
    return {
      username: currentUsername()
    };
  },
  methods: {
    dispatchLogout () {
      logout();
    }
  }
};
</script>
