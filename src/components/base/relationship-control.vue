<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <select
      :id="controlId"
      class="form-control"
      :value="initial"
      @change="update"
    >
      <option
        :disabled="isRequired"
        value="none"
      >
        Please select a option
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
  name: 'RelationshipControl',
  components: {
    ControlWrapper
  },
  props: {
    value: p(Object, null),
    label: p(String),
    isRequired: p(Boolean, false),
    items: p(Array)
  },
  data () {
    return {
      initial: this.value ? this.value.id : 'none'
    };
  },
  methods: {
    update (event) {
      const item = event.target.value === 'none'
        ? undefined
        : this.items.find(item => item.id === event.target.value);
      this.$emit('input', item);
    }
  }
};
</script>
