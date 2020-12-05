<template>
  <div>
    <h1>Home</h1>
    <p id="textGreeting">
      Welcome {{ currentUserEmail }}
    </p>
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
