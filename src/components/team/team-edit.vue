<template>
  <div>
    <TextControl
      v-model="item.title"
      label="Title"
    />
    <RelationshipControl
      v-model="item.parent"
      label="Parent"
      :items="$store.getters.getOtherTeams(item.id)"
    />
    <TextControl
      v-if="item.owner"
      v-model="item.owner.title"
      label="Owner"
      read-only
    />
    <RelationshipControl
      v-model="item.managers"
      label="Managers"
      :is-required="false"
      :is-single="false"
      :items="$store.getters.getOtherProfiles"
    />
    <RelationshipControl
      v-model="item.staff"
      label="Staff"
      :is-required="false"
      :is-single="false"
      :items="$store.getters.getOtherProfiles"
    />
  </div>
</template>

<script>
import { p } from '@/helpers/props.js';
import TextControl from '@/components/base/text-control.vue';
import RelationshipControl from '@/components/base/relationship-control.vue';

export default {
  name: 'TeamEdit',
  components: {
    TextControl,
    RelationshipControl
  },
  props: {
    item: p(Object)
  }
};
</script>
