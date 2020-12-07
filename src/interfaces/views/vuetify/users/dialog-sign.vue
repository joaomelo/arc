<template>
  <div>
    <button
      @click="signInAction({ email: 'joao@email.com' })"
    >
      Sign In
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FirebaseUi',
  methods: {
    ...mapActions('usersStore', ['signInAction'])
  }
};
</script>
