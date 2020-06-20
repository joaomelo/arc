<template>
  <BaseView
    :title="title"
    :details="details"
    :can-edit="canEdit"
    @edit="edit"
    @del="del"
  />
</template>

<script>
import { p } from '__cli/common/components-helpers';
import { canEdit } from '__cli/roles';
import { mapStoreFunction } from '__cli/data/store/helpers.js';
import BaseView from '__cli/components/base/base-view.vue';

export default {
  name: 'ItemView',
  components: { BaseView },
  props: {
    item: p(Object),
    title: p(String),
    details: p(Array, [])
  },
  data () {
    const col = this.item.collection;
    return {
      itemType: col[col.length - 1] === 's' ? col.slice(0, -1) : col,
      itemId: this.item.id,
      canEdit: canEdit(this.item)
    };
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
