<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <input
      :id="controlId"
      ref="dateInput"
      type="text"
      class="form-control"
      :required="isRequired"
      :readonly="isReadonly"
      :disabled="isDisabled"
      :placeholder="$tc('placeholders.select', 1)"
    >
  </ControlWrapper>
</template>

<script>
import JQuery from 'jquery';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.js';

import ControlWrapper from './control-wrapper.vue';
import { p } from '@/components/common/props.js';

export default {
  name: 'ControlDaterange',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p(Object, null),
    isRequired: p(Boolean, false),
    isReadonly: p(Boolean, false),
    isDisabled: p(Boolean, false)
  },
  mounted () {
    this.initDaterange();
  },
  methods: {
    update (start, end, label) {
      const newValue = (start && end) ? { start: start.toDate(), end: end.toDate() } : null;
      this.syncInput(newValue);
      this.$emit('input', newValue);
    },
    initDaterange () {
      JQuery(this.$refs.dateInput).daterangepicker({
        opens: 'left',
        autoUpdateInput: false
      }, this.update);
      JQuery(this.$refs.dateInput).on('cancel.daterangepicker', (ev, picker) => this.update());
      this.syncInput(this.value);
    },
    syncInput (range) {
      const hasRange = range && range.start && range.end;
      const f = d => moment(d).format('DD/MM/YYYY');
      this.$refs.dateInput.value = hasRange ? `${f(range.start)} - ${f(range.end)}` : '';
    }
  }
};
</script>

<style src="bootstrap-daterangepicker/daterangepicker.css"/>
