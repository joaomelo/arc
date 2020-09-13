<template>
  <BaseButton
    color="secondary"
    icon="mdi-backspace"
    :text="$t('components.back')"
    @click="$emit('back')"
  />
</template>

<script>
import BaseButton from './base-button';

export default {
  name: 'BtnBack',
  components: { BaseButton }
};
</script>
