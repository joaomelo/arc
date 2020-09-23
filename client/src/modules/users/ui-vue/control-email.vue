<template>
  <ControlText
    :value="value"
    prepend-icon="mdi-account-circle"
    :label="label"
    :validation-rules="emailRules"
    is-required
    @input="input"
  />
</template>

<script>
import { i18n } from '__cli/core/i18n';
import { ControlText } from '__cli/core/components';

export default {
  name: 'ControlEmail',
  components: { ControlText },
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: i18n.t('users.email')
    }
  },
  data () {
    return {
      emailRules: [
        v => /.+@.+\..+/.test(v) || this.$t('users.email-valid')
      ]
    };
  },
  methods: {
    input (text) {
      this.$emit('input', text);
    }
  }
};
</script>
