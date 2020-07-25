<template>
  <div>
    <v-text-field
      v-model="primaryPassword"
      :label="label"
      prepend-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
      :type="showPassword ? 'text': 'password'"
      required
      :rules="primaryRules"
      @click:append="showPassword = !showPassword"
      @input="input"
    />
    <v-text-field
      v-if="shouldMatch"
      v-model="shadowPassword"
      :label="$t('auth.password-repeat')"
      prepend-icon="mdi-lock"
      :type="showPassword ? 'text': 'password'"
      required
      :rules="shadowRules"
    />
  </div>
</template>

<script>
export default {
  name: 'ControlPassword',
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
    const requireRule = v => !!v || this.$t('auth.password-required');
    const matchRule = v => this.primaryPassword === this.shadowPassword || this.$t('auth.password-match');

    return {
      showPassword: false,
      primaryPassword: null,
      shadowPassword: null,
      primaryRules: [requireRule],
      shadowRules: [requireRule, matchRule]
    };
  },
  methods: {
    input (text) {
      this.$emit('input', text);
    }
  }
};
</script>
