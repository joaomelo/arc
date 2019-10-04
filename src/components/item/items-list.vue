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
    <ItemAdd :item-type="type" />
  </div>
</template>

<script>
import { p } from '@/components/helpers/props.js';
import ItemAdd from './item-add.vue';

export default {
  name: 'ItemsList',
  components: { ItemAdd },
  props: {
    viewComponent: p(Object),
    type: p(String),
    getter: p(String),
    setter: p(String)
  },
  data () {
    return {
      unsubscribe: undefined
    };
  },
  computed: {
    items () {
      return this.$store.getters[this.getter];
    }
  },
  created () {
    this.unsubscribe = this.$store.dispatch(this.setter);
  },
  beforeDestroy () {
    this.unsubscribe.then();
  }
};
</script>
