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

import { p } from '@/common/components-helpers';
import { i18n } from '@/core/i18n';
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
  mounted () {
    this.initSelect2();
  },
  methods: {
    update (event) {
      const value = this.selectedValue();
      this.$emit('input', value);
    },
    initSelect2 () {
      JQuery(this.$refs.select).select2({
        theme: 'bootstrap4',
        placeholder: this.placeholder(),
        tags: this.isTaggable,
        tokenSeparators: [',', ' '],
        data: this.dataSelect()
      });
      JQuery(this.$refs.select).on('change', this.update);
    },
    placeholder () {
      const placeholderKey = this.isTaggable ? 'placeholders.enter' : 'placeholders.select';
      const placeholderPlural = this.isMultiple ? 2 : 1;
      return i18n.tc(placeholderKey, placeholderPlural);
    },
    initialOptions () {
      const rawData = JSON.parse(JSON.stringify(this.options));
      if (!rawData || !Array.isArray(rawData)) throw new Error('Options must be a array');
      return rawData;
    },
    initialValues () {
      return JSON.parse(JSON.stringify(this.values));
    },
    selectedValues () {
      const selectedIds = JQuery(this.$refs.select).select2('data').map(v => v.id);
      if (selectedIds.length === 0) return;

      const values = this.isObjectDriven ? this.initialOptions.filter(o => selectedIds.includes(o.id)) : selectedIds;
      return this.isMultiple ? values : values[0];
    },
    dataSelect () {
      let hasSelected = false;
      const data = this.initialOptions.map(option => {
        const dataItem = {
          id: option.id || option,
          text: option.title || option
        };
        if (this.isOptionSelected(option)) {
          hasSelected = true;
          dataItem.selected = 'selected';
        };
        return dataItem;
      });

      if (!hasSelected && !this.isMultiple) {
        data.unshift({
          id: '',
          text: ''
        });
      }

      return data;
    },
    isOptionSelected (option) {
      let result = false;

      if (option && this.initialValues) {
        const isArray = Array.isArray(this.initialValues);
        const oid = option.id || option;

        if (isArray && this.initialValues.find(v => v === oid || v.id === oid)) {
          result = true;
        }
        if (!isArray && (oid === this.initialValues || oid === this.initialValues.id)) {
          result = true;
        }
      }

      return result;
    }
  }
};
</script>

<style src="select2/dist/css/select2.min.css"/>
<style src="@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css"/>
