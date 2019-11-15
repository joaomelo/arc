<template>
  <ItemView
    item-type="asset"
    :item-id="item.id"
    :title="prettyTitle"
    :details="details"
  />
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemView from '@/components/item/item-view.vue';
import { prettyStatus } from './assets-statuses.js';

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
    prettyStatus () {
      return prettyStatus(this.item.status);
    },
    details () {
      return [
        {
          label: this.$tc('collections.team', 1),
          display: this.item.team.title
        },
        {
          label: this.$t('fields.assets.status.status'),
          display: this.prettyStatus
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
