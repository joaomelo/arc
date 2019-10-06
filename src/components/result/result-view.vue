<template>
  <ItemView
    item-type="result"
    :item-id="item.id"
  >
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
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/Item-view.vue';
import ItemViewDetail from '@/components/item/Item-view-detail.vue';

export default {
  name: 'ResultView',
  components: {
    ItemView,
    ItemViewDetail
  },
  props: {
    item: p(Object)
  }
};
</script>
