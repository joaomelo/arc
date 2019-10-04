<template>
  <ItemCard>
    <ItemCardDetail :is-title="true">
      {{ item.title }}
    </ItemCardDetail>
    <ItemCardDetail v-if="item.status">
      status: {{ item.status }}
    </ItemCardDetail>
    <ItemCardDetail v-if="item.done">
      done when: {{ item.done }}
    </ItemCardDetail>
  </ItemCard>
</template>

<script>
import itemViewMixin from '@/components/item/item-view-mixin.js';

export default {
  name: 'ResultView',
  mixins: [itemViewMixin]
};
</script>
