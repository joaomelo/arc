<template>
  <ItemView
    :item="item"
    :title="item.title"
  />
</template>

<script>
import { p } from '__cli/common/components-helpers';
import ItemView from '__cli/components/item/item-view.vue';

export default {
  name: 'ChallengeView',
  components: { ItemView },
  props: {
    item: p(Object)
  }
};
</script>
