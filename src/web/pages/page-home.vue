<template>
  <div>
    <h1>Home</h1>
    <p>Welcome {{ currentUserEmail }}</p>
    <a
      id="actionSignOut"
      href="#"
      @click="signOutAction"
    >
      Sign Out
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PageHome',
  computed: {
    ...mapGetters(['currentUserEmail'])
  },
  methods: {
    ...mapActions(['signOutAction'])
  }
};
</script>
