<template>
  <ItemView
    :item="item"
    :title="item.title"
  />
</template>

<script>
import { p } from '@src/common/components-helpers';
import ItemView from '@src/components/item/item-view.vue';

export default {
  name: 'ChallengeView',
  components: { ItemView },
  props: {
    item: p(Object)
  }
};
</script>
