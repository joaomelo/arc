<template>
  <ItemView
    :item="item"
    :title="prettyTitle"
    :details="details"
  />
</template>

<script>
import { p } from '@src/common/components-helpers';
import ItemView from '@src/components/item/item-view.vue';
import { prettyStatus } from '@src/components/common/status.js';

export default {
  name: 'AssetView',
  components: { ItemView },
  props: {
    item: p(Object)
  },
  computed: {
    prettyTitle () {
      return `(${this.item.alias}) ${this.item.title}`;
    },
    details () {
      return [
        {
          label: this.$tc('collections.team', 1),
          display: this.item.team.title
        },
        {
          label: this.$t('fields.status.status'),
          display: prettyStatus(this.item.status)
        },
        {
          label: this.$t('fields.common.tags'),
          display: this.item.tags
        },
        {
          label: this.$t('fields.common.description'),
          display: this.item.description
        }
      ];
    }
  }
};
</script>
