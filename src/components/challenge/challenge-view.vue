<template>
  <ItemView
    item-type="challenge"
    :item-id="item.id"
  >
    <ItemViewDetail :is-title="true">
      {{ item.title }}
    </ItemViewDetail>
  </ItemView>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/Item-view.vue';
import ItemViewDetail from '@/components/item/Item-view-detail.vue';

export default {
  name: 'ChallengeView',
  components: {
    ItemView,
    ItemViewDetail
  },
  props: {
    item: p(Object)
  }
};
</script>
