<template>
  <ItemView
    item-type="result"
    :item-id="item.id"
    :title="item.title"
  />
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/item-view.vue';

export default {
  name: 'ResultView',
  components: { ItemView },
  props: {
    item: p(Object)
  }
};
</script>
