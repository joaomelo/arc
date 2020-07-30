<template>
  <p
    v-if="display"
    class="my-1 mx-0"
  >
    <strong v-if="label">{{ label }}: </strong> {{ displayValue }}
  </p>
</template>

<script>
export default {
  name: 'LookupText',
  props: {
    value: {
      type: [String, Number, Boolean, Array, Date],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    text: {
      type: String,
      required: true
    },
    key: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
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
