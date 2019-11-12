<template>
  <span class="watch-i18n" />
</template>

<script>
import { i18n } from '@/i18n';
export default {
  name: 'WatchI18n',
  computed: {
    currentProfile () {
      return this.$store.getters.getCurrentProfile;
    }
  },
  watch: {
    currentProfile: {
      handler (newProfile, oldProfile) {
        if (newProfile && newProfile.lang && i18n.locale !== newProfile.lang) {
          i18n.locale = newProfile.lang;
        };
      },
      immediate: true
    }
  }
};
</script>
