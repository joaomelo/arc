<template>
  <v-app>
    <OverlayLoading />
    <MessagePanel />
    <router-view />
  </v-app>
</template>

<script>
import { OverlayLoading } from '__cli/core/loader';
import { MessagePanel } from '__cli/core/messages';
export default {
  name: 'VueRoot',
  components: { OverlayLoading, MessagePanel }
};
</script>
