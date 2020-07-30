<template>
  <PageItem
    v-slot="{ itemClone }"
    v-bind="$attrs"
    :title="$tc('teams.team', 1)"
    :collection="teamsCollection"
    :default-item="defaultTeam"
  >
    <ControlText
      v-model="itemClone.name"
      :label="$t('fields.name')"
      is-required
    />
    <ControlSelect
      v-model="itemClone.owner"
      :label="$t('teams.owner')"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-required
      readonly
    />
    <ControlSelect
      v-model="itemClone.editors"
      :label="$tc('teams.editors', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
    />
    <ControlSelect
      v-model="itemClone.members"
      :label="$tc('teams.members', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
    />
  </PageItem>
</template>

<script>
import { ControlText, ControlSelect } from '__cli/core/components';
import { PageItem } from '__cli/modules/items';
import { profilesCollection, getCurrentProfile } from '__cli/modules/profiles';
import { teamsCollection } from '../domain';

export default {
  name: 'PageTeam',
  components: {
    PageItem,
    ControlText,
    ControlSelect
  },
  data () {
    return {
      teamsCollection,
      defaultTeam: { owner: getCurrentProfile().id },
      profilesCollection
    };
  }
};
</script>
