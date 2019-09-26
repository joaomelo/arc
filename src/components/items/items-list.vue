<template>
  <div
    v-if="length > 0"
  >
    <slot />
  </div>
  <p v-else>
    No items found
  </p>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    length: {
      type: Number,
      default: 0
    }
  }
};
</script>
