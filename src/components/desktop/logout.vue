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
  computed: {
    username () {
      const profile = this.$store.getters.getCurrentProfile;
      const result = profile ? extractUsernameFromEmail(profile.title) : '';
      return result;
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout');
    }
  }
};
</script>
