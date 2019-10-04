<template>
  <ItemCard>
    <ItemCardDetail :is-title="true">
      {{ item.title }}
    </ItemCardDetail>
  </ItemCard>
</template>

<script>
import itemViewMixin from '@/components/item/item-view-mixin.js';

export default {
  name: 'ChallengeView',
  mixins: [itemViewMixin]
};
</script>
