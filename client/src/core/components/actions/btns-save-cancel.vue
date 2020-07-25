<template>
  <div>
    <BaseButton
      color="secondary"
      icon="mdi-backspace"
      :text="$t('actions.cancel')"
      @click="$emit('cancel')"
    />
    <BaseButton
      color="success"
      icon="mdi-content-save"
      :text="$t('actions.save')"
      @click="$emit('save')"
    />
  </div>
</template>

<script>
import BaseButton from './base-button';
export default {
  name: 'SaveCancel',
  components: { BaseButton }
};
</script>
