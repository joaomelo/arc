<template>
  <div
    v-if="display"
    :class="classes"
  >
    <strong v-if="label !== ''">{{ label }}: </strong> {{ displayValue }}
  </div>
</template>

<script>
import { p } from '@/helpers/props.js';

export default {
  name: 'BaseViewDetail',
  props: {
    isTitle: p(Boolean, false),
    label: p(String, ''),
    display: p([String, Number, Boolean, Array, Date], null)
  },
  computed: {
    classes () {
      return {
        h5: this.isTitle,
        'card-title': this.isTitle,
        'card-text': !this.isTitle
      };
    },
    displayValue () {
      if (Array.isArray(this.display) && this.display.length > 0) {
        return this.display.map(d => d.title || d).join(', ');
      } else {
        return this.display;
      }
    }
  }
};
</script>
