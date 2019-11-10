<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="profiles"
    #default="{ clone }"
  >
    <TextControl
      v-model="clone.title"
      label="Email"
      readonly
    />
    <RelationshipControl
      v-model="clone.lang"
      label="Language"
      :is-required="true"
      :is-single="true"
      :items="languages"
    />
  </itemedit>
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
