<template>
  <div>
    <div v-if="items.length > 0">
      <component
        :is="viewComponent"
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="mt-2"
      />
    </div>
    <p v-else>
      No items found
    </p>
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    items: {
      type: Array,
      required: true
    },
    viewComponent: {
      type: Object,
      required: true
    }
  }
};
</script>
