<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <input
      :id="controlId"
      type="password"
      class="form-control"
      :value="value"
      :readonly="isReadonly"
      :required="isRequired"
      :placeholder="placeholder"
      @input="update"
    >
  </ControlWrapper>
</template>

<script>
import ControlWrapper from './control-wrapper.vue';
import { p } from '@/common/components-helpers';

export default {
  name: 'ControlPassword',
  components: {
    ControlWrapper
  },
  props: {
    value: p(String, null),
    isReadonly: p(Boolean, false),
    isRequired: p(Boolean, false)
  },
  data () {
    return {
      label: this.$t('components.controls.password.password'),
      placeholder: this.$t('components.controls.password.placeholder')
    };
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
