<template>
  <ValidationProvider
    v-slot="{ errors, passed }"
    :name="label"
    :rules="rules"
  >
    <!--
      ValidationProvider requires a v-model. That's why bellow we
      don't rely on the effect of using v-bind and v-on and also
      opted out from slots and went with the vue 'component'.
      The attribute data-has-passed is intended to be used by test suites
    -->
    <component
      :is="control"
      :id="controlId"
      v-model="innerValue"
      :label="label"
      :errors="errors"
      :success="passed"
      :data-has-passed="passed"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
import { camelCase, upperFirst } from 'lodash-es';

export default {
  name: 'ControlWrapper',
  props: {
    control: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      innerValue: this.value
    };
  },
  computed: {
    controlId () {
      const computerLabel = upperFirst(camelCase(this.label));
      return `control${computerLabel}`;
    }
  },
  watch: {
    innerValue (newValue) {
      this.$emit('input', newValue);
    },
    value (newValue) {
      this.innerValue = newValue;
    }
  }
};
</script>
