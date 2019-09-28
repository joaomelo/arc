<template>
  <ItemsList
    :component-type="componentType"
    :items="results"
  />
</template>

<script>
import ItemsList from '@/components/items/items-list.vue';
import ResultCard from './result-card.vue';

export default {
  name: 'ResultsList',
  components: {
    ItemsList
  },
  data () {
    return {
      unsubscribe: undefined,
      componentType: ResultCard
    };
  },
  computed: {
    results () {
      return this.$store.getters.getResults;
    }
  },
  created () {
    this.unsubscribe = this.$store.dispatch('setResults');
  },
  beforeDestroy () {
    this.unsubscribe.then();
  }
};
</script>
