<template>
  <div
    :style="{ maxWidth }"
    class="mx-auto"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageBase',
  props: {
    maxWidth: {
      type: String,
      default: '400px'
    }
  }
};
</script>
