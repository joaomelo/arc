<template>
  <ItemsList
    :view-component="viewComponent"
    type="asset"
    getter="getAssets"
    setter="setAssets"
  />
</template>

<script>
import ItemsList from '@/components/item/items-list.vue';
import AssetView from './asset-view.vue';

export default {
  name: 'AssetsList',
  components: { ItemsList },
  data () {
    return {
      viewComponent: AssetView
    };
  }
};
</script>
