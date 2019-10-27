<template>
  <ItemView
    item-type="result"
    :item-id="item.id"
  >
    <ItemViewDetail
      :is-title="true"
      :display="item.title"
    />
    <ItemViewDetail
      label="status"
      :display="item.status"
    />
    <ItemViewDetail
      label="done when"
      :display="item.done"
    />
  </itemview>
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
