<template>
  <BaseButton
    icon="mdi-plus-box"
    @click="$emit('add')"
  />
</template>

<script>
import BaseButton from './base-button.vue';

export default {
  name: 'BtnAdd',
  components: { BaseButton }
};
</script>
