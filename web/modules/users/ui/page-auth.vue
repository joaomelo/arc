<template>
  <div>
    <h1>Auth</h1>
    <button
      v-if="!isSignedIn"
      @click="commandSignIn({ name: 'joão' })"
    >
      Sign In
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PageAuth',
  computed: {
    ...mapGetters('usersStore', ['isSignedIn'])
  },
  methods: {
    ...mapActions('usersStore', ['commandSignIn'])
  }
};
</script>
