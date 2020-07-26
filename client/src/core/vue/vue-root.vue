<template>
  <v-app>
    <Busui />
    <router-view />
  </v-app>
</template>

<script>
import { Busui } from '__cli/core/busui';
export default {
  name: 'VueRoot',
  components: { Busui }
};
</script>
