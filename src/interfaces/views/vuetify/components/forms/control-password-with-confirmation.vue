<template>
  <div>
    <ControlPassword
      :value="password"
      :label="labels[0]"
      v-bind="$attrs"
      @input="$emit('input', $event)"
    />
    <ControlPassword
      v-model="confirmationPassword"
      :label="labels[1]"
    />
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
    }
  },
  data () {
    return {
      password: this.value,
      confirmationPassword: ''
    };
  }
};
</script>

<style>

</style>
