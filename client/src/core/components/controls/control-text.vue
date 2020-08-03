<template>
  <v-text-field
    v-bind="$attrs"
    :value="value"
    :label="label"
    :rules="rules"
    @input="input"
    @click:append="$emit('click:append')"
  />
</template>
<script>
import { controlMixin } from './control-mixin';

export default {
  name: 'ControlText',
  mixins: [controlMixin]
};
</script>
