<template>
  <a
    href="#"
    @click="logout"
  >
    {{ $t('nav.logout', {user: username}) }}
  </a>
</template>

<script>
import { extractUsernameFromEmail } from '@/helpers/string.js';

export default {
  name: 'Logout',
  data () {
    return {
      username: extractUsernameFromEmail(this.$store.getters.getCurrentProfile.title)
    };
  },
  methods: {
    logout () {
      this.$store.dispatch('logout');
    }
  }
};
</script>
