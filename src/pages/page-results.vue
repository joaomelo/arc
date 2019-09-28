<template>
  <Desktop><ResultsList /></Desktop>
</template>

<script>
import Desktop from '@/components/desktop/desktop.vue';
import ResultsList from '@/components/results/results-list.vue';
export default {
  name: 'PageResults',
  components: {
    Desktop,
    ResultsList
  }
};
</script>
