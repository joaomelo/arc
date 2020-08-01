<template>
  <p
    v-if="displayValue"
    class="ma-0"
  >
    <strong v-if="label">{{ label }}: </strong> {{ displayValue }}
  </p>
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    value: {
      type: [String, Number, Boolean, Array, Date],
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    displayValue () {
      if (!this.value || (Array.isArray(this.value) && this.value.length <= 0)) return;

      const displayValue = Array.isArray(this.value)
        ? this.value.join(', ')
        : this.value;

      return displayValue;
    }
  }
};
</script>
