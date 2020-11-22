<template>
  <CardItem
    :item="item"
    :collection="challengesCollection"
    title-field="title"
    edit-route="challenge-edit"
  />
</template>

<script>
import { CardItem } from '__cli/modules/items';
import { challengesCollection } from '../domain';

export default {
  name: 'CardChallenge',
  components: { CardItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      challengesCollection
    };
  }
};
</script>
