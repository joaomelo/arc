<template>
  <ItemView
    item-type="team"
    :item-id="item.id"
  >
    <ItemViewDetail :is-title="true">
      {{ item.title }}
    </ItemViewDetail>

    <ItemViewDetail label="owner">
      {{ owner.email }}
    </ItemViewDetail>
  </ItemView>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/Item-view.vue';
import ItemViewDetail from '@/components/item/Item-view-detail.vue';

export default {
  name: 'TeamView',
  components: {
    ItemView,
    ItemViewDetail
  },
  props: {
    item: p(Object)
  },
  data () {
    return {
      owner: this.$store.getters.getProfile(this.item.owner)
    };
  }
};
</script>
