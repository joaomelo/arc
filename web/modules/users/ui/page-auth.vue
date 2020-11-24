<template>
  <div>
    <DialogWelcome v-if="isSignedIn" />
    <DialogSign v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DialogSign from './dialog-sign';
import DialogWelcome from './dialog-welcome';

export default {
  name: 'PageAuth',
  components: { DialogSign, DialogWelcome },
  computed: {
    ...mapGetters('usersStore', ['isSignedIn'])
  }
};
</script>
