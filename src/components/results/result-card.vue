<template>
  <ItemCard>
    <ItemDetail :is-title="true">
      {{ item.title }}
    </ItemDetail>
    <ItemDetail v-if="item.status">
      status: {{ item.status }}
    </ItemDetail>
    <ItemDetail v-if="item.done">
      done when: {{ item.done }}
    </ItemDetail>
  </ItemCard>
</template>

<script>
import ItemCard from '@/components/items/item-card.vue';
import ItemDetail from '@/components/items/item-detail.vue';

export default {
  name: 'ResultCard',
  components: {
    ItemCard,
    ItemDetail
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
