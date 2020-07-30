<template>
  <PageItem
    v-slot="{ itemClone }"
    v-bind="$attrs"
    :title="$tc('teams.team', 1)"
    :collection="teamsCollection"
  >
    <ControlText
      v-model="itemClone.name"
      :label="$t('fields.name')"
      is-required
    />
    <ControlSelect
      v-model="itemClone.editors"
      :label="$tc('teams.editors', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
      is-required
    />
    <!-- <ControlSelect
      v-model="itemClone.managers"
      :label="$t('fields.teams.managers')"
      :is-multiple="true"
      :is-object-driven="true"
      :options="$store.getters.getOtherProfiles"
    />
    <ControlText
      v-if="clone.owner"
      v-model="clone.owner.title"
      :label="$t('fields.teams.owner')"
      read-only
    />
    <ControlSelect
      v-model="clone.staff"
      :label="$t('fields.teams.staff')"
      :is-multiple="true"
      :is-object-driven="true"
      :options="$store.getters.getOtherProfiles"
    /> -->
  </PageItem>
</template>

<script>
import { ControlText, ControlSelect } from '__cli/core/components';
import { PageItem } from '__cli/modules/items';
import { profilesCollection } from '__cli/modules/profiles';
import { teamsCollection } from '../domain';

export default {
  name: 'TeamEdit',
  components: {
    PageItem,
    ControlText,
    ControlSelect
  },
  data () {
    return {
      teamsCollection,
      profilesCollection
    };
  }
};
</script>
