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
import { i18n } from '__cli/core/i18n';

import BaseButton from './base-button';
export default {
  name: 'SaveCancel',
  components: { BaseButton },
  props: {
    cancelLabel: {
      type: String,
      default: i18n.t('actions.cancel')
    },
    saveLabel: {
      type: String,
      default: i18n.t('actions.save')
    }
  }
};
</script>
