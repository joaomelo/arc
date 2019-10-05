<template>
  <ItemView>
    <ItemViewDetail :is-title="true">
      {{ item.title }}
    </ItemViewDetail>
    <ItemViewDetail v-if="item.status">
      status: {{ item.status }}
    </ItemViewDetail>
    <ItemViewDetail v-if="item.done">
      done when: {{ item.done }}
    </ItemViewDetail>
  </ItemView>
</template>

<script>
import itemViewMixin from '@/components/item/item-view-mixin.js';

export default {
  name: 'ResultView',
  mixins: [itemViewMixin]
};
</script>
