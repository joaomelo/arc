<template>
  <ItemView
    :item="item"
    :title="prettyTitle"
    :details="details"
  />
</template>

<script>
import { p } from '__cli/common/components-helpers';
import ItemView from '__cli/components/item/item-view.vue';
import { prettyStatus } from '__cli/components/common/status.js';

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
