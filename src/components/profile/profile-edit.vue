<template>
  <ItemEdit
    :item-id="itemId"
    item-type="profile"
    #default="{item: profile}"
  >
    <TextControl
      v-model="profile.title"
      label="Email"
      readonly
    />
    <RelationshipControl
      v-model="profile.lang"
      label="Language"
      :is-required="true"
      :is-single="true"
      :items="languages"
    />
  </ItemEdit>
</template>

<script>
import { locales } from '@/i18n';
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';
import RelationshipControl from '@/components/base/relationship-control.vue';

export default {
  name: 'ProfileEdit',
  components: {
    ItemEdit,
    TextControl,
    RelationshipControl
  },
  props: {
    itemId: p(String)
  },
  data () {
    return {
      languages: locales
    };
  }
};
</script>
