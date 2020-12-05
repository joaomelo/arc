<template>
  <div>
    <h1>Home</h1>
    <p>Welcome {{ currentUserEmail }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageHome',
  computed: {
    ...mapGetters(['currentUserEmail'])
  }
};
</script>
