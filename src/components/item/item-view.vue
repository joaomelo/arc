<template>
  <BaseView
    :title="title"
    :details="details"
    @edit="edit"
    @del="del"
  />
</template>

<script>
import { p } from '@/helpers/props.js';
import { mapStoreFunction } from '@/store/helpers.js';
import BaseView from '@/components/base/base-view.vue';

export default {
  name: 'ItemView',
  components: { BaseView },
  props: {
    itemType: p(String),
    itemId: p(String),
    title: p(String),
    details: p(Array, () => [])
  },
  methods: {
    edit () {
      this.$router.push({ name: `${this.itemType}Edit`, params: { itemId: this.itemId } });
    },
    del () {
      this.$store.dispatch(mapStoreFunction(this.itemType, 'delAction'), this.itemId);
    }
  }
};
</script>
