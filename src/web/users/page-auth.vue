<template>
  <p>{{ $t("users.loading") }}...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageAuth',
  computed: {
    ...mapGetters(['isUndefined', 'isSignedIn'])
  },
  watch: {
    isUndefined: {
      handler (value) {
        // still solving auth status
        if (value) return;

        if (this.isSignedIn) {
          this.$router.push({ name: 'home' });
        } else {
          this.$router.push({ name: 'signUp' });
        }
      },
      immediate: true
    }
  }
};
</script>
