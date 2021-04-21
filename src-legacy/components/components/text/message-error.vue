<template>
  <MessageBase
    type="error"
    :data-error="code"
    v-bind="$attrs"
  />
</template>

<script>
import MessageBase from './message-base';

export default {
  name: 'MessageError',
  components: { MessageBase },
  props: {
    code: {
      type: String,
      default: null
    }
  }
};
</script>
