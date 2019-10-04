<template>
  <ItemsList
    :view-component="viewComponent"
    type="challenge"
    getter="getChallenges"
    setter="setChallenges"
  />
</template>

<script>
import ItemsList from '@/components/item/items-list.vue';
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
