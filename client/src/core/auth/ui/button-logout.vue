<template>
  <v-btn
    v-bind="$attrs"
    @click="signOut"
  >
    <v-icon left>
      mdi-logout
    </v-icon>
    Sign Out
  </v-btn>
</template>

<script>
import { signOut } from '../domain';

export default {
  name: 'ButtonLogout',
  methods: {
    signOut
  }
};
</script>
