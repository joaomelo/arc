<template>
  <div>
    <ValidationObserver>
      <ControlPassword
        :value="password"
        :label="labels[0]"
        :rules="rules"
        v-bind="$attrs"
        @input="$emit('input', $event)"
      />
      <ControlPassword
        v-model="confirmationPassword"
        :label="labels[1]"
        :rules="passwordConfirmationRules"
      />
    </ValidationObserver>
  </div>
</template>

<script>
import ControlPassword from './control-password';

export default {
  name: 'ControlPasswordWithConfirmation',
  components: { ControlPassword },
  props: {
    value: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      password: this.value,
      confirmationPassword: ''
    };
  },
  computed: {
    passwordConfirmationRules () {
      const confirmedRule = `confirmed:${this.labels[0]}`;
      const outerRules = this.rules ? `|${this.rules}` : '';
      return `${confirmedRule}${outerRules}`;
    }
  }
};
</script>

<style>

</style>
