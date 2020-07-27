<template>
  <CardItem
    :id="item.id"
    :title="item.name"
    :subtitle="item.id"
    @edit="id => $emit('edit', id)"
    @del="id => $emit('del', id)"
  >
    <!-- <template v-slot:details>
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
    <template v-slot:actions>
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
  </CardItem>
</template>

<script>
import { CardItem } from '__cli/modules/items';

export default {
  name: 'CardTeam',
  components: { CardItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
