<template>
  <ItemEdit
    #default="{ clone }"
    :item-id="itemId"
    item-collection="profiles"
  >
    <ControlText
      v-model="clone.title"
      :label="$t('fields.account.email')"
      read-only
    />
    <ControlSelect
      v-model="clone.lang"
      :label="$t('fields.account.language')"
      :is-required="true"
      :items="languages"
    />
  </itemedit>
</template>

<script>
import { locales } from '@/i18n';
import { p } from '@/components/common/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';
import ControlSelect from '@/components/forms/control-select.vue';

export default {
  name: 'ProfileEdit',
  components: {
    ItemEdit,
    ControlText,
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
