<template>
  <MessageBase
    v-bind="$attrs"
  />
</template>

<script>
import MessageBase from './message-base';

export default {
  name: 'MessageInfo',
  components: { MessageBase }
};
</script>
