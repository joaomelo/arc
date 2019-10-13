<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <select
      :id="controlId"
      class="form-control"
      :value="value"
      @change="update"
    >
      <option
        disabled
        selected
        value=""
      >
        Select a option
      </option>
      <option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
      >
        {{ item.title }}
      </option>
    </select>
  </ControlWrapper>
</template>

<script>
import ControlWrapper from './control-wrapper.vue';
import { p } from '@/helpers/props.js';

export default {
  name: 'SelectControl',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p(String, ''),
    items: p(Array)
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value);
    }
  }

};
</script>
