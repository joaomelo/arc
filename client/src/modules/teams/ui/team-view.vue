<template>
  <ItemView
    :title="item.name"
    :subtitle="item.id"
  >
    <template v-slot:details>
      <ItemViewDetail
        label="Admins"
        :display="item.admins"
      />
      <ItemViewDetail
        label="Editors"
        :display="item.editors"
      />
      <ItemViewDetail
        label="Members"
        :display="item.members"
      />
    </template>
    <!-- <template v-slot:actions>
      <BaseButton
        :disabled="!canEdit"
        class="btn-secondary"
        @click="$emit('edit')"
      >
        {{ $t('forms.edit') }}
      </BaseButton>
      <BaseButton
        :disabled="!canEdit"
        class="btn-secondary"
        @click="$emit('del')"
      >
        {{ $t('forms.delete') }}
      </BaseButton>
    </template> -->
  </ItemView>
</template>

<script>
import { ItemView, ItemViewDetail } from '__cli/modules/items';

export default {
  name: 'TeamView',
  components: {
    ItemView,
    ItemViewDetail
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
