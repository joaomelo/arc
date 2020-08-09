<template>
  <PageItem
    v-bind="$attrs"
    :title="$tc('teams.team', 1)"
    :item="team"
    :action="action"
  >
    <ControlText
      v-model="team.name"
      :label="$t('fields.name')"
      is-required
    />
    <ControlTextarea
      v-model="team.description"
      :label="$t('fields.description')"
    />
    <ControlSelect
      v-model="team.owner"
      :label="$t('teams.owner')"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-required
      readonly
    />
    <ControlSelect
      v-model="team.editors"
      :label="$tc('teams.editors', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
    />
    <ControlSelect
      v-model="team.members"
      :label="$tc('teams.members', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
    />
  </PageItem>
</template>

<script>
import { ControlText, ControlTextarea, ControlSelect } from '__cli/core/components';
import { PageItem } from '__cli/modules/items';
import { profilesCollection, getCurrentProfile } from '__cli/modules/profiles';
import { teams, addTeam, updateTeam } from '../domain';

export default {
  name: 'PageTeam',
  components: {
    PageItem,
    ControlText,
    ControlTextarea,
    ControlSelect
  },
  props: {
    id: {
      type: String,
      default: 'add'
    }
  },
  data () {
    const isAdd = this.id === 'add';
    return {
      team: isAdd ? { owner: getCurrentProfile().id } : { ...teams.getItem(this.id) },
      action: isAdd ? addTeam : updateTeam,
      profilesCollection
    };
  }
};
</script>
