<template>
  <ItemView>
    <ItemViewDetail :is-title="true">
      {{ item.title }}
    </ItemViewDetail>
  </ItemView>
</template>

<script>
import itemViewMixin from '@/components/item/item-view-mixin.js';

export default {
  name: 'ChallengeView',
  mixins: [itemViewMixin]
};
</script>
