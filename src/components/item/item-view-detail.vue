<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script>
import { p } from '@/components/helpers/props.js';

export default {
  name: 'ItemViewDetail',
  props: {
    isTitle: p(Boolean, false)
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
