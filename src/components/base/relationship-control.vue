<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <multiselect
      :id="controlId"
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
    value: p(Object, null),
    label: p(String),
    isRequired: p(Boolean, false),
    isSingle: p(Boolean, true),
    items: p(Array)
  },
  data () {
    return {
      initial: this.value ? this.value.id : 'none'
    };
  },
  methods: {
    update (value, id) {
      this.$emit('input', value);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
