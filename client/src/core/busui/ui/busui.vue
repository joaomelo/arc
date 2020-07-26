<template>
  <span>
    <OverlayLoading />
    <MessagePanel />
    <ConnectionMonitor />
  </span>
</template>

<script>
import OverlayLoading from './overlay-loading';
import MessagePanel from './message-panel';
import ConnectionMonitor from './connection-monitor';

export default {
  name: 'Busui',
  components: { OverlayLoading, MessagePanel, ConnectionMonitor }
};
</script>
