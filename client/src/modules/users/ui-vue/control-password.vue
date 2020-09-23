<template>
  <div>
    <ControlText
      :value="value"
      :label="label"
      prepend-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
      :type="showPassword ? 'text': 'password'"
      is-required
      @click:append="showPassword = !showPassword"
      @input="input"
    />
    <ControlText
      v-if="shouldMatch"
      v-model="shadowPassword"
      :label="$t('users.password-repeat')"
      prepend-icon="mdi-lock"
      :type="showPassword ? 'text': 'password'"
      is-required
      :validation-rules="shadowRules"
    />
  </div>
</template>

<script>
import { ControlText } from '__cli/core/components';

export default {
  name: 'ControlPassword',
  components: { ControlText },
  props: {
    shouldMatch: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showPassword: false,
      shadowPassword: null,
      shadowRules: [v => this.value === this.shadowPassword || this.$t('users.password-match')]
    };
  },
  methods: {
    input (text) {
      this.$emit('input', text);
    }
  }
};
</script>
