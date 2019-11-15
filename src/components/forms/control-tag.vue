<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <Multiselect
      :id="controlId"
      :multiple="true"
      :close-on-select="false"
      :allow-empty="true"
      :taggable="true"
      :value="value"
      :options="value"
      @input="update"
      @tag="addTag"
    />
  </ControlWrapper>
</template>

<script>
import Multiselect from 'vue-multiselect';
import ControlWrapper from './control-wrapper.vue';
import { p } from '@/helpers/props.js';

export default {
  name: 'ControlTag',
  components: {
    Multiselect,
    ControlWrapper
  },
  props: {
    value: p(Array, () => []),
    label: p(String)
  },
  methods: {
    update (value) {
      this.$emit('input', value);
    },
    addTag (newTag) {
      this.value.push(newTag);
      this.$emit('input', this.value);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
