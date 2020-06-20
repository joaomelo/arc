<template>
  <ItemsList
    :view-component="viewComponent"
    item-type="challenge"
  />
</template>

<script>
import ItemsList from '__cli/components/item/items-list.vue';
import ChallengeView from './challenge-view.vue';

export default {
  name: 'ChallengesList',
  components: { ItemsList },
  data () {
    return {
      viewComponent: ChallengeView
    };
  }
};
</script>
