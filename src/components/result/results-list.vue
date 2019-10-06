<template>
  <ItemsList
    :view-component="viewComponent"
    item-type="result"
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
