<template>
  <ItemEdit
    #default="{ clone: result}"
    :item-id="itemId"
    item-collection="results"
  >
    <ControlText
      v-model="result.title"
      :label="$t('fields.common.title')"
      is-required
    />
    <ControlSelect
      v-model="result.asset"
      :label="$tc('collections.asset', 1)"
      :is-object-driven="true"
      :options="$store.getters.getAssets"
      is-required
    />
    <ControlStatus
      v-model="result.status"
    />
    <ControlTag
      v-model="result.tags"
      :label="$t('fields.common.tags')"
    />
    <ControlTextarea
      v-model="result.description"
      :label="$t('fields.common.description')"
    />
    <ControlCheckbox
      v-model="result.recurrent"
      :label="$t('fields.results.recurrent')"
      @input="clearDaterange(result.recurrent)"
    />
    <ControlDaterange
      ref="daterange"
      v-model="result.period"
      :label="$t('fields.results.period')"
      :is-disabled="result.recurrent"
      :is-required="!result.recurrent"
    />
  </itemedit>
</template>

<script>
import { p } from '@/common/components-helpers';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';
import ControlTextarea from '@/components/forms/control-textarea.vue';
import ControlSelect from '@/components/forms/control-select.vue';
import ControlStatus from '@/components/forms/control-status.vue';
import ControlTag from '@/components/forms/control-tag.vue';
import ControlCheckbox from '@/components/forms/control-checkbox.vue';
import ControlDaterange from '@/components/forms/control-daterange.vue';

export default {
  name: 'ResultEdit',
  components: {
    ItemEdit,
    ControlText,
    ControlTextarea,
    ControlSelect,
    ControlStatus,
    ControlTag,
    ControlCheckbox,
    ControlDaterange
  },
  props: {
    itemId: p(String)
  },
  methods: {
    clearDaterange (recurrent) {
      this.$refs.daterange.update(null);
    }
  }
};
</script>
