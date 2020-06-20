<template>
  <ItemView
    :item="item"
    :title="item.title"
    :details="details"
  />
</template>

<script>
import { p } from '__cli/common/components-helpers';
import { ItemView } from '__cli/components';

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
