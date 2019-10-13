<template>
  <ItemEdit
    :item-id="itemId"
    item-type="asset"
    #default="{item: asset}"
  >
    <TextControl
      v-model="asset.alias"
      label="Alias"
    />
    <TextControl
      v-model="asset.title"
      label="Title"
    />
    <SelectControl
      v-model="asset.team"
      label="Team"
      :items="teams"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';
import SelectControl from '@/components/base/select-control.vue';

export default {
  name: 'AssetEdit',
  components: {
    ItemEdit,
    TextControl,
    SelectControl
  },
  props: {
    itemId: p(String)
  },
  computed: {
    teams () {
      return this.$store.getters.getMyTeams;
    }
  }
};
</script>
