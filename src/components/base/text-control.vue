<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <input
      :id="controlId"
      type="text"
      class="form-control"
      :value="value"
      @input="update"
    >
  </ControlWrapper>
</template>

<script>
import controlMixin from './control-mixin.js';

export default {
  name: 'TextControl',
  mixins: [controlMixin]
};
</script>
