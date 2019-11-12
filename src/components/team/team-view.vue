<template>
  <ItemView
    item-type="team"
    :item-id="item.id"
  >
    <ItemViewDetail
      :is-title="true"
      :display="item.title"
    />
    <ItemViewDetail
      :label="$t('fields.teams.parent')"
      :display="item.parent && item.parent.title"
    />
    <ItemViewDetail
      :label="$t('fields.teams.owner')"
      :display="item.owner.title"
    />
    <ItemViewDetail
      :label="$t('fields.teams.managers')"
      :display="item.managers"
    />
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
  }
};
</script>
