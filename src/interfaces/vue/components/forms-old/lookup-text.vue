<template>
  <BaseText
    v-bind="$attrs"
    :value="lookedupValue"
  />
</template>

<script>
import BaseText from './base-text';

export default {
  name: 'LookupText',
  components: { BaseText },
  props: {
    value: {
      type: [String, Number, Boolean, Array, Date],
      default: null
    },
    textField: {
      type: String,
      required: true
    },
    keyField: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    lookedupValue () {
      if (!this.value || (Array.isArray(this.value) && this.value.length <= 0)) return;

      const getText = key => {
        const item = this.items.find(i => i[this.keyField] === key);
        const text = item[this.textField];
        return text;
      };

      const lookedupValue = Array.isArray(this.value)
        ? this.value.map(getText)
        : getText(this.value);

      return lookedupValue;
    }
  }
};
</script>
