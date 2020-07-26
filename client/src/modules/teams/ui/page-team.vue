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
    <!-- <ControlText
      v-if="clone.owner"
      v-model="clone.owner.title"
      :label="$t('fields.teams.owner')"
      read-only
    />
    <ControlSelect
      v-model="clone.managers"
      :label="$t('fields.teams.managers')"
      :is-multiple="true"
      :is-object-driven="true"
      :options="$store.getters.getOtherProfiles"
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
import { ControlText } from '__cli/core/components';
import { PageItem } from '__cli/modules/items';
import { teamsCollection } from '../domain';

export default {
  name: 'TeamEdit',
  components: {
    PageItem,
    ControlText
  },
  data () {
    return {
      teamsCollection
    };
  }
};
</script>
