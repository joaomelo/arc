<template>
  <v-autocomplete
    v-bind="$attrs"
    :value="value"
    :label="label"
    :multiple="isMultiple"
    :chips="isMultiple"
    :deletable-chips="true"
    :hide-selected="true"
    :rules="rules"
    @input="input"
  />
</template>

<script>
import { controlMixin } from './control-mixin';

export default {
  name: 'ControlSelect',
  mixins: [controlMixin],
  props: {
    isMultiple: {
      type: Boolean,
      default: false
    }
  }
};
</script>
