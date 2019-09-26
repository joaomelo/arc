<template>
  <Desktop><AssetsList /></Desktop>
</template>

<script>
import Desktop from '@/components/desktop/desktop.vue';
import AssetsList from '@/components/assets/assets-list.vue';
export default {
  name: 'PageAssets',
  components: {
    Desktop,
    AssetsList
  }
};
</script>
