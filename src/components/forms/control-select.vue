<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <select
      :id="controlId"
      ref="select"
      class="form-control"
      :readonly="isReadonly"
      :required="isRequired"
      :multiple="isMultiple"
    />
  </ControlWrapper>
</template>

<script>

import ControlWrapper from './control-wrapper.vue';
import { p } from '@/components/common/props.js';
import { initSelect2, extractSelect2Value } from './select2-adapter.js';

export default {
  name: 'ControlSelect',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p([String, Object, Array], null),
    options: p(Array, []),
    isReadonly: p(Boolean, false),
    isRequired: p(Boolean, false),
    isMultiple: p(Boolean, false),
    isObjectDriven: p(Boolean, false)
  },
  mounted () {
    initSelect2(this.$refs.select, false, this.isMultiple, this.value, this.options, this.update);
  },
  methods: {
    update (event) {
      const value = extractSelect2Value(this.$refs.select, this.options, this.isMultiple, this.isObjectDriven);
      this.$emit('input', value);
    }
  }
};
</script>

<style src="select2/dist/css/select2.min.css"/>
<style src="@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css"/>
