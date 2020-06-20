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
import JQuery from 'jquery';
import 'select2/dist/js/select2.min.js';

import { p } from '__cli/common/components-helpers';
import ControlWrapper from './control-wrapper.vue';

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
  data () {
    return {
      initialValuesAsStrings: JSON.parse(JSON.stringify(this.value)),
      initialOptionsAsStrings: JSON.parse(JSON.stringify(this.options))
    };
  },
  computed: {
    placeholder () {
      const plural = this.isMultiple ? 2 : 1;
      const key = this.isTaggable ? 'text' : 'select';
      const placeholder = this.$tc(`components.controls.${key}.placeholder`, plural);
      return placeholder;
    },
    selectedValues () {
      const selectedIds = JQuery(this.$refs.select).select2('data').map(v => v.id);
      if (selectedIds.length === 0) return;

      const values = this.isObjectDriven
        ? this.initialOptionsAsStrings.filter(o => selectedIds.includes(o.id))
        : selectedIds;
      const result = this.isMultiple ? values : values[0];
      return result;
    }
  },
  mounted () {
    JQuery(this.$refs.select).select2({
      theme: 'bootstrap4',
      placeholder: this.placeholder,
      tags: this.isTaggable,
      tokenSeparators: [',', ' '],
      data: this.mountDataObject()
    });
    JQuery(this.$refs.select).on('change', this.update);
  },
  methods: {
    update (event) {
      const value = this.selectedValues;
      this.$emit('input', value);
    },
    mountDataObject () {
      let hasSelectedValue = false;
      const data = this.initialOptionsAsStrings.map(option => {
        const dataItem = {
          id: option.id || option,
          text: option.title || option
        };

        let isOptionSelected = false;
        if (this.initialValuesAsStrings) {
          const isArray = Array.isArray(this.initialValuesAsStrings);
          const oid = option.id || option;

          isOptionSelected = isArray
            ? !!this.initialValuesAsStrings.find(v => v === oid || v.id === oid)
            : (oid === this.initialValuesAsStrings || oid === this.initialValuesAsStrings.id);
        }

        if (isOptionSelected) {
          hasSelectedValue = true;
          dataItem.selected = 'selected';
        };

        return dataItem;
      });

      // provides select2 with a empty option for selection
      if (!hasSelectedValue && !this.isMultiple) {
        data.unshift({
          id: '',
          text: ''
        });
      }

      return data;
    }
  }
};
</script>

<style src="select2/dist/css/select2.min.css"/>
<style src="@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css"/>
