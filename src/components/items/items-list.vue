<template>
  <div v-if="items.length > 0">
    <component
      :is="componentType"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
  <p v-else>
    No items found
  </p>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    componentType: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
