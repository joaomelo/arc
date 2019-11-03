<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <multiselect
      :id="controlId"
      :multiple="!isSingle"
      :close-on-select="isSingle"
      :allow-empty="!isRequired"
      :value="value"
      :options="items"
      track-by="id"
      label="title"
      @input="update"
    />
  </ControlWrapper>
</template>

<script>
import Multiselect from 'vue-multiselect';

import ControlWrapper from './control-wrapper.vue';
import { p } from '@/helpers/props.js';

export default {
  name: 'RelationshipControl',
  components: {
    Multiselect,
    ControlWrapper
  },
  props: {
    value: p([Object, Array], () => []),
    label: p(String),
    isRequired: p(Boolean, false),
    isSingle: p(Boolean, true),
    items: p(Array)
  },
  methods: {
    update (value, id) {
      console.log(value);
      console.log(this.value);

      this.$emit('input', value);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
