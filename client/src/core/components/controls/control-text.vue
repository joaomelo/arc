<template>
  <v-text-field
    type="text"
    :label="label"
    :value="value"
    :rules="rules"
    :readonly="isReadonly"
    @input="input"
  />
</template>

<script>
export default {
  name: 'ControlText',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    isReadonly: {
      type: Boolean,
      default: false
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
  data () {
    const rules = this.validationRules;
    if (this.isRequired) {
      const requiredRule = v => !!v || this.$t('required', { label: this.label });
      rules.push(requiredRule);
    }

    return {
      rules
    };
  },
  methods: {
    input (text) {
      this.$emit('input', text);
    }
  }
};
</script>
