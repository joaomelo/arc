<template>
  <ItemsList
    :length="assets.length"
  >
    <AssetCard
      v-for="asset in assets"
      :key="asset.id"
      :asset="asset"
    />
  </ItemsList>
</template>

<script>
import ItemsList from '@/components/items/items-list.vue';
import AssetCard from './asset-card.vue';

export default {
  name: 'AssetsList',
  components: {
    ItemsList,
    AssetCard
  },
  data () {
    return {
      unsubscribe: undefined
    };
  },
  computed: {
    assets () {
      return this.$store.getters.getAssets;
    }
  },
  created () {
    this.unsubscribe = this.$store.dispatch('setAssets');
  },
  beforeDestroy () {
    this.unsubscribe.then();
  }
};
</script>
