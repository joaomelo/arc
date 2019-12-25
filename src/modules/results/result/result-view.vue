<template>
  <ItemView
    :item="item"
    :title="item.title"
    :details="details"
  />
</template>

<script>
import { p } from '@/components/common/props.js';
import ItemView from '@/components/item/item-view.vue';
import { prettyStatus } from '@/components/common/status.js';
import { daterangeToString } from '@/components/common/conversions.js';

export default {
  name: 'ResultView',
  components: { ItemView },
  props: {
    item: p(Object)
  },
  computed: {
    details () {
      return [
        {
          label: this.$tc('collections.asset', 1),
          display: this.item.asset.title
        },
        {
          label: this.$t('fields.status.status'),
          display: prettyStatus(this.item.status)
        },
        {
          label: this.$t('fields.results.period'),
          display: this.item.recurrent ? this.$t('fields.results.recurrent') : daterangeToString(this.item.period)
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
