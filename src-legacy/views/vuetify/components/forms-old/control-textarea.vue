<template>
  <v-textarea
    v-bind="$attrs"
    :value="value"
    :label="label"
    :rules="rules"
    rows="3"
    @input="input"
  />
</template>

<script>
import { controlMixin } from './control-mixin';

export default {
  name: 'ControlTextarea',
  mixins: [controlMixin]
};
</script>
