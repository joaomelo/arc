<template>
  <div id="app-canvas">
    <SmartSpinner />
    <router-view />
  </div>
</template>

<script>
import { SmartSpinner } from '@/core/load';
export default {
  name: 'App',
  components: {
    SmartSpinner
  }
};
</script>
