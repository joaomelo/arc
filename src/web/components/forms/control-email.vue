<template>
  <ControlText
    type="email"
    :rules="emailRules"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import ControlText from './control-text';

export default {
  name: 'ControlEmail',
  components: { ControlText },
  props: {
    rules: {
      type: String,
      default: ''
    }
  },
  computed: {
    emailRules () {
      const outerRules = this.rules ? `|${this.rules}` : '';
      return `email${outerRules}`;
    }
  }
};
</script>
