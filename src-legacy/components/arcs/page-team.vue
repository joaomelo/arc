<template>
  <PageItem
    v-bind="$attrs"
    :title="$tc('arcs.arc', 1)"
    :item="arc"
    :action="action"
  >
    <ControlText
      v-model="arc.name"
      :label="$t('fields.name')"
      is-required
    />
    <ControlTextarea
      v-model="arc.description"
      :label="$t('fields.description')"
    />
    <ControlSelect
      v-model="arc.owner"
      :label="$t('arcs.owner')"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-required
      readonly
    />
    <ControlSelect
      v-model="arc.editors"
      :label="$tc('arcs.editors', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
    />
    <ControlSelect
      v-model="arc.members"
      :label="$tc('arcs.members', 2)"
      item-text="publicEmail"
      item-value="id"
      :items="profilesCollection.items"
      is-multiple
    />
  </PageItem>
</template>

<script>
import { ControlText, ControlTextarea, ControlSelect } from '@/shared/components';
import { PageItem } from '@/business/items';
import { profilesCollection, getCurrentProfile } from '@/business/profiles';
import { arcs, addArc, updateArc } from '../domain';

export default {
  name: 'PageArc',
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
      arc: isAdd ? { owner: getCurrentProfile().id } : { ...arcs.getItem(this.id) },
      action: isAdd ? addArc : updateArc,
      profilesCollection
    };
  }
};
</script>
