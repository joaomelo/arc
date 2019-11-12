<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <Multiselect
      :id="controlId"
      :multiple="!isSingle"
      :close-on-select="isSingle"
      :allow-empty="!isRequired"
      :value="valueObject"
      :options="items"
      track-by="id"
      label="title"
      @input="update"
    />
  </ControlWrapper>
</template>

<script>
import Multiselect from 'vue-multiselect';
import ControlWrapper from '@/components/base/control-wrapper.vue';
import { p } from '@/helpers/props.js';

export default {
  name: 'ControlSelect',
  components: {
    Multiselect,
    ControlWrapper
  },
  props: {
    value: p([String, Number], null),
    label: p(String),
    isRequired: p(Boolean, false),
    isSingle: p(Boolean, true),
    items: p(Array)
  },
  computed: {
    valueObject () {
      return this.items.find(i => i.id === this.value);
    }
  },
  methods: {
    update (value, id) {
      this.$emit('input', value.id);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
