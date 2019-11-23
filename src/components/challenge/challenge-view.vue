<template>
  <ItemView
    :item="item"
    :title="item.title"
  />
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/item-view.vue';

export default {
  name: 'ChallengeView',
  components: { ItemView },
  props: {
    item: p(Object)
  }
};
</script>
