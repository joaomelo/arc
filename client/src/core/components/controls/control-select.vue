<template>
  <v-autocomplete
    v-bind="$attrs"
    :value="value"
    :label="label"
    :multiple="isMultiple"
    :chips="true"
    :deletable-chips="true"
    :hide-selected="true"
    :rules="rules"
    @input="input"
  />
</template>

<script>
export default {
  name: 'ControlSelect',
  props: {
    value: {
      type: [String, Array],
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
    isMultiple: {
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
        const msg = this.$t('components.required', { text });
        const requiredRule = this.isMultiple
          ? v => (Array.isArray(v) && v.length > 0) || msg
          : v => !!v || msg;

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
