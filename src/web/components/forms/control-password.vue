<template>
  <ControlText
    :label="label"
    type="password"
  />
</template>

<script>
import ControlText from './control-text';

export default {
  name: 'ControlEmail',
  components: { ControlText },
  props: {
    label: {
      type: String,
      default: 'Password'
    }
  }
};
</script>
