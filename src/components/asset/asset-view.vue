<template>
  <ItemCard>
    <ItemCardDetail :is-title="true">
      ({{ item.alias }}) {{ item.title }}
    </ItemCardDetail>
    <ItemCardDetail v-if="item.alignment">
      aligment: {{ item.alignment }}
    </ItemCardDetail>
    <ItemCardDetail v-if="item.description">
      {{ item.description }}
    </ItemCardDetail>
  </ItemCard>
</template>

<script>
import itemViewMixin from '@/components/item/item-view-mixin.js';

export default {
  name: 'AssetView',
  mixins: [itemViewMixin]
};
</script>
