<template>
  <BaseLayout id="app-canvas">
    <SmartSpinner />
    <router-view />
  </BaseLayout>
</template>

<script>
import { BaseLayout } from '@/core/components';
import { SmartSpinner } from '@/core/load';
export default {
  name: 'App',
  components: {
    BaseLayout,
    SmartSpinner
  }
};
</script>
