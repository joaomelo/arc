<template>
  <ItemsList
    :view-component="viewComponent"
    type="result"
    getter="getResults"
    setter="setResults"
  />
</template>

<script>
import ItemsList from '@/components/item/items-list.vue';
import ResultView from './result-view.vue';

export default {
  name: 'ResultsList',
  components: { ItemsList },
  data () {
    return {
      viewComponent: ResultView
    };
  }
};
</script>
