<template>
  <ItemView
    item-type="asset"
    :item-id="item.id"
  >
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
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/Item-view.vue';
import ItemViewDetail from '@/components/item/Item-view-detail.vue';

export default {
  name: 'AssetView',
  components: {
    ItemView,
    ItemViewDetail
  },
  props: {
    item: p(Object)
  }
};
</script>
