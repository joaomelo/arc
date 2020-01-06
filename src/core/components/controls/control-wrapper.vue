<template>
  <div class="form-group">
    <label
      v-if="label !== ''"
      :for="controlId"
    >
      {{ label }}
    </label>
    <slot :controlId="controlId" />
    <div class="invalid-feedback">
      {{ $t('errors.required') }}
    </div>
  </div>
</template>

<script>
import { kebabCase } from 'lodash-es';
import { p } from '@/common';

export default {
  name: 'ControlWrapper',
  props: {
    label: p(String, '')
  },
  data () {
    return {
      controlId: this.label === '' ? this._uid : kebabCase(`input-${this.label}`)
    };
  }
};
</script>
