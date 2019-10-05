<template>
  <ItemView>
    <ItemViewDetail :is-title="true">
      ({{ item.alias }}) {{ item.title }}
    </ItemViewDetail>
    <ItemViewDetail v-if="item.alignment">
      aligment: {{ item.alignment }}
    </ItemViewDetail>
    <ItemViewDetail v-if="item.description">
      {{ item.description }}
    </ItemViewDetail>
  </ItemView>
</template>

<script>
import itemViewMixin from '@/components/item/item-view-mixin.js';

export default {
  name: 'AssetView',
  mixins: [itemViewMixin]
};
</script>
