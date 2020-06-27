<template>
  <div>
    <BaseButton
      color="secondary"
      icon="mdi-backspace"
      :text="cancelLabel"
      @click="$emit('cancel')"
    />
    <BaseButton
      color="success"
      icon="mdi-content-save"
      :text="saveLabel"
      @click="$emit('save')"
    />
  </div>
</template>

<script>
import BaseButton from './base-button';
export default {
  name: 'SaveCancel',
  components: { BaseButton },
  props: {
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    saveLabel: {
      type: String,
      default: 'Save'
    }
  }
};
</script>
