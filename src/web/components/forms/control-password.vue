<template>
  <ControlText
    type="password"
    :label="label"
    :rules="passwordRules"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import ControlText from './control-text';

export default {
  name: 'ControlPassword',
  components: { ControlText },
  props: {
    label: {
      type: String,
      default: 'Password'
    },
    rules: {
      type: String,
      default: ''
    }
  },
  computed: {
    passwordRules () {
      const outerRules = this.rules ? `|${this.rules}` : '';
      return `min:8${outerRules}`;
    }
  }
};
</script>
