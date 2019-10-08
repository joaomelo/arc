<template>
  <ItemsList
    :view-component="viewComponent"
    item-type="team"
  />
</template>

<script>
import ItemsList from '@/components/item/items-list.vue';
import TeamView from './team-view.vue';

export default {
  name: 'TeamsList',
  components: { ItemsList },
  data () {
    return {
      viewComponent: TeamView
    };
  }
};
</script>
