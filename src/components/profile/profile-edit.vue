<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="profiles"
    #default="{ clone }"
  >
    <TextControl
      v-model="clone.title"
      :label="$t('fields.account.email')"
      read-only
    />
    <ControlSelect
      v-model="clone.lang"
      :label="$t('fields.account.language')"
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
import ControlSelect from '@/components/forms/control-select.vue';

export default {
  name: 'ProfileEdit',
  components: {
    ItemEdit,
    TextControl,
    ControlSelect
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
