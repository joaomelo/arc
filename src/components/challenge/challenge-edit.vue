<template>
  <div>
    <TextControl
      v-model="item.title"
      label="Title"
    />
  </div>
</template>

<script>
import { p } from '@/helpers/props.js';
import TextControl from '@/components/base/text-control.vue';

export default {
  name: 'ChallengeEdit',
  components: {
    TextControl
  },
  props: {
    item: p(Object)
  }
};
</script>
