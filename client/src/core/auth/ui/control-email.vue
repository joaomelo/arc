<template>
  <v-text-field
    data-test="auth-email"
    prepend-icon="mdi-account-circle"
    :label="label"
    :rules="emailRules"
    required
    :value="value"
    @input="input"
  />
</template>

<script>
import { i18n } from '__cli/core/i18n';

export default {
  name: 'ControlEmail',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: i18n.t('auth.email')
    }
  },
  data () {
    return {
      emailRules: [
        v => !!v || this.$t('auth.email-required'),
        v => /.+@.+\..+/.test(v) || this.$t('auth.email-valid')
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
