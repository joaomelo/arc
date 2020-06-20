<template>
  <component
    :is="type"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
import { p } from '@src/common/components-helpers';

export default {
  props: {
    routerLink: p(Boolean, false)
  },
  computed: {
    type () {
      return this.routerLink ? 'router-link' : 'a';
    }
  }
};
</script>
