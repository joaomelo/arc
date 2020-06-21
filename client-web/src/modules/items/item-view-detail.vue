<template>
  <p v-if="display">
    <strong v-if="label">{{ label }}: </strong> {{ displayValue }}
  </p>
</template>

<script>
export default {
  name: 'ItemViewDetail',
  props: {
    label: {
      type: String,
      default: ''
    },
    display: {
      type: [String, Number, Boolean, Array, Date],
      default: null
    }
  },
  computed: {
    displayValue () {
      let result = this.display;
      if (Array.isArray(this.display)) {
        result = (this.display.length > 0)
          ? this.display.map(d => d.title || d).join(', ')
          : null;
      };
      return result;
    }
  }
};
</script>
