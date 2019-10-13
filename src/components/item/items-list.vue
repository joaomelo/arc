<template>
  <div>
    <div v-if="items.length > 0">
      <component
        :is="viewComponent"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
    <p v-else>
      No items found
    </p>
    <ItemAdd :item-type="itemType" />
  </div>
</template>

<script>
import { p } from '@/helpers/props.js';
import { mapStoreFunction } from '@/helpers/taxonomy.js';
import ItemAdd from './item-add.vue';

export default {
  name: 'ItemsList',
  components: { ItemAdd },
  props: {
    itemType: p(String),
    viewComponent: p(Object)
  },
  data () {
    return {
      unsubscribe: undefined
    };
  },
  computed: {
    items () {
      return this.$store.getters[mapStoreFunction(this.itemType, 'getterCol')];
    }
  }
};
</script>
