<template>
  <ControlText
    :label="label"
    type="email"
  />
</template>

<script>
import ControlText from './control-input';

export default {
  name: 'ControlEmail',
  components: { ControlText },
  props: {
    label: {
      type: String,
      default: 'E-mail'
    }
  }
};
</script>