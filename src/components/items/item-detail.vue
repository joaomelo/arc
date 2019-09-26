<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'ItemDetail',
  props: {
    isTitle: Boolean
  },
  computed: {
    classes () {
      return {
        h5: this.isTitle,
        'card-title': this.isTitle,
        'card-text': !this.isTitle
      };
    }
  }
};
</script>
