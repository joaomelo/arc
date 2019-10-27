<template>
  <ItemView
    item-type="asset"
    :item-id="item.id"
  >
    <ItemViewDetail
      :is-title="true"
      :display="prettyTitle"
    />
    <ItemViewDetail
      label="alignment"
      :display="item.alignment"
    />
    <ItemViewDetail
      :display="item.description"
    />
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
  },
  computed: {
    prettyTitle () {
      return `(${this.item.alias}) ${this.item.title}`;
    }
  }
};
</script>
