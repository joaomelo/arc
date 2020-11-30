<template>
  <div>
    <ControlPassword
      :value="password"
      @input="handleInput"
    />
    <ControlPassword
      v-model="confirmationPassword"
    />
  </div>
</template>

<script>
export default {
  name: 'ControlPasswordWithConfirmation',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      password: this.value,
      confirmationPassword: ''
    };
  },
  methods: {
    handleInput (newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style>

</style>
