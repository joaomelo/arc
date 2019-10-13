<template>
  <p :class="classes">
    <strong v-if="label !== ''">{{ label }}: </strong><slot />
  </p>
</template>

<script>
import { p } from '@/helpers/props.js';

export default {
  name: 'ItemViewDetail',
  props: {
    isTitle: p(Boolean, false),
    label: p(String, '')
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
