<template>
  <ControlWrapper
    :control="control"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import ControlWrapper from './control-wrapper';
import TextBase from './text-base';

export default {
  name: 'ControlText',
  components: { ControlWrapper },
  data () {
    return {
      control: TextBase
    };
  }
};
</script>
