<template>
  <div>
    Trying to login...
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageAuth',
  computed: {
    ...mapGetters('usersStore', ['isUndefined'])
  },
  created () {
    setTimeout(() => this.$router.push({ name: 'signUp' }), 1000);
  }
};
</script>
