<template>
  <div>
    <BaseButton
      color="secondary"
      icon="mdi-backspace"
      :text="$t('components.cancel')"
      @click="$emit('cancel')"
    />
    <BaseButton
      color="success"
      icon="mdi-content-save"
      :text="$t('components.save')"
      @click="$emit('save')"
    />
  </div>
</template>

<script>
import BaseButton from './base-button';
export default {
  name: 'BtnsSaveCancel',
  components: { BaseButton }
};
</script>
