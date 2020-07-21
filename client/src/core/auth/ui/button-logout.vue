<template>
  <v-btn
    v-bind="$attrs"
    @click="signOut"
  >
    <v-icon left>
      mdi-logout
    </v-icon>
    {{ $t("auth.sign-out") }}
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
