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
import 'bootstrap-daterangepicker/daterangepicker.js';

import ControlWrapper from './control-wrapper.vue';
import { p } from '__cli/common/components-helpers';
import { daterangeToString } from '__cli/components/common/conversions.js';

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
      const l = s => this.$t(`daterange.${s}`);
      const d = s => l(`days.${s}`);
      const m = s => l(`months.${s}`);
      const localeOptions = {
        format: l('format'),
        separator: ' - ',
        applyLabel: l('apply'),
        cancelLabel: l('cancel'),
        fromLabel: l('from'),
        toLabel: l('to'),
        weekLabel: l('week'),
        daysOfWeek: [d('su'), d('mo'), d('tu'), d('we'), d('th'), d('fr'), d('sa')],
        monthNames: [m('jan'), m('feb'), m('mar'), m('apr'), m('may'), m('jun'), m('jul'), m('aug'), m('sep'), m('oct'), m('nov'), m('dec')],
        firstDay: 1
      };

      JQuery(this.$refs.dateInput).daterangepicker({
        opens: 'center',
        autoUpdateInput: false,
        cancelButtonClasses: 'btn-secondary',
        locale: localeOptions
      }, this.update);

      // on cacel press the component should clear the data
      JQuery(this.$refs.dateInput).on('cancel.daterangepicker', (ev, picker) => this.update(null));

      this.syncInput(this.value);
    },
    syncInput (range) {
      this.$refs.dateInput.value = daterangeToString(range);
    }
  }
};
</script>

<style src="bootstrap-daterangepicker/daterangepicker.css"/>
