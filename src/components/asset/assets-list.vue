<template>
  <ItemsList
    :view-component="viewComponent"
    type="asset"
    getter="getAssets"
    setter="setAssets"
  />
</template>

<script>
import itemsListMixin from '@/components/item/items-list-mixin';
import AssetView from './asset-view.vue';

export default {
  name: 'AssetsList',
  mixins: [itemsListMixin],
  data () {
    return {
      viewComponent: AssetView
    };
  }
};
</script>
