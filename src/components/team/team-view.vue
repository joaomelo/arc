<template>
  <ItemView
    :item="item"
    :title="item.title"
    :details="details"
  />
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/item-view.vue';

export default {
  name: 'TeamView',
  components: {
    ItemView
  },
  props: {
    item: p(Object)
  },
  computed: {
    details () {
      return [
        {
          label: this.$t('fields.teams.parent'),
          display: this.item.parent && this.item.parent.title
        },
        {
          label: this.$t('fields.teams.owner'),
          display: this.item.owner.title
        },
        {
          label: this.$t('fields.teams.managers'),
          display: this.item.managers
        }
      ];
    }
  }
};
</script>
