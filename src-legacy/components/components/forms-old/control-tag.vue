<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <select
      :id="controlId"
      ref="tag"
      class="form-control"
      :readonly="isReadonly"
      :required="isRequired"
      :multiple="true"
    />
  </ControlWrapper>
</template>

<script>

import ControlWrapper from './control-wrapper.vue';
import { p } from '@/common/components-helpers';
import { initSelect2, extractSelect2Value } from './select2-adapter.js';

export default {
  name: 'ControlSelect',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p(Array, null),
    isReadonly: p(Boolean, false),
    isRequired: p(Boolean, false)
  },
  mounted () {
    initSelect2(this.$refs.tag, true, true, this.value, this.value, this.update);
  },
  methods: {
    update (event) {
      const value = extractSelect2Value(this.$refs.tag, this.value, true, false);
      this.$emit('input', value);
    }
  }
};
</script>

<style src="select2/dist/css/select2.min.css"/>
<style src="@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css"/>
