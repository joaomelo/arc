<template>
  <v-app>
    <OverlayLoading />
    <MessagePanel />
    <ConnectionMonitor />
    <router-view />
  </v-app>
</template>

<script>
import { OverlayLoading } from '__cli/core/loader';
import { MessagePanel } from '__cli/core/messages';
import { ConnectionMonitor } from '__cli/core/connection';
export default {
  name: 'VueRoot',
  components: { OverlayLoading, MessagePanel, ConnectionMonitor }
};
</script>
