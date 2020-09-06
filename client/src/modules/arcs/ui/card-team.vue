<template>
  <CardItem
    :item="item"
    :del="delArc"
    edit-route="arc-edit"
  >
    <template v-slot:details>
      <LookupText
        :value="item.owner"
        :label="$t('arcs.owner')"
        text-field="publicEmail"
        key-field="id"
        :items="profilesCollection.items"
      />
      <LookupText
        :value="item.editors"
        :label="$tc('arcs.editors', 2)"
        text-field="publicEmail"
        key-field="id"
        :items="profilesCollection.items"
      />
      <LookupText
        :value="item.members"
        :label="$tc('arcs.members', 2)"
        text-field="publicEmail"
        key-field="id"
        :items="profilesCollection.items"
      />
      <BaseText
        :value="item.description"
        :label="$t('fields.description')"
      />
    </template>
  </CardItem>
</template>

<script>
import { BaseText, LookupText } from '__cli/core/components';
import { CardItem } from '__cli/modules/items';
import { delArc } from '../domain';
import { profilesCollection } from '__cli/modules/profiles';

export default {
  name: 'CardArc',
  components: { CardItem, BaseText, LookupText },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      delArc,
      profilesCollection
    };
  }
};
</script>
