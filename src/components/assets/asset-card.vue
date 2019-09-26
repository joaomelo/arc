<template>
  <ItemCard>
    <ItemDetail :is-title="true">
      {{ asset.title }}
    </ItemDetail>
  </ItemCard>
</template>

<script>
import ItemCard from '@/components/items/item-card.vue';
import ItemDetail from '@/components/items/item-detail.vue';

export default {
  name: 'AssetCard',
  components: {
    ItemCard,
    ItemDetail
  },
  props: {
    asset: {
      type: Object,
      required: true
    }
  }
};
</script>
