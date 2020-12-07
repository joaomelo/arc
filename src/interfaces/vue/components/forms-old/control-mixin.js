const controlMixin = {
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
    validationRules: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    rules () {
      const rules = this.validationRules;
      if (this.isRequired) {
        const subject = this.label || this.$t('components.field');
        const msg = this.$t('components.required', { text: subject });
        const requiredRule = this.isMultiple
          ? v => (Array.isArray(v) && v.length > 0) || msg
          : v => !!v || msg;
        rules.unshift(requiredRule);
      }
      return rules;
    }
  },
  methods: {
    input (value) {
      this.$emit('input', value);
    }
  }
};

export { controlMixin };
