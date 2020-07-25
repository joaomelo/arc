<template>
  <v-text-field
    v-bind="$attrs"
    :value="value"
    :label="label"
    :rules="rules"
    @input="input"
  />
</template>

<script>
export default {
  name: 'ControlText',
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    validationRules: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    rules () {
      const rules = this.validationRules;
      if (this.isRequired) {
        const text = this.label || this.$t('components.field');
        const requiredRule = v => !!v || this.$t('components.required', { text });
        rules.unshift(requiredRule);
      }

      return rules;
    }
  },
  methods: {
    input (text) {
      this.$emit('input', text);
    }
  }
};
</script>
