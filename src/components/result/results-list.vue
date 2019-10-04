<template>
  <ItemsList
    :view-component="viewComponent"
    type="result"
    getter="getResults"
    setter="setResults"
  />
</template>

<script>
import itemsListMixin from '@/components/item/items-list-mixin';
import ResultView from './result-view.vue';

export default {
  name: 'ResultsList',
  mixins: [itemsListMixin],
  data () {
    return {
      viewComponent: ResultView
    };
  }
};
</script>
