<template>
  <PageItem
    v-slot="{ itemClone }"
    v-bind="$attrs"
    :title="$tc('challenges.challenge', 1)"
    :collection="challengesCollection"
  >
    <ControlText
      v-model="itemClone.title"
      :label="$t('fields.title')"
      is-required
    />
  </PageItem>
</template>

<script>
import { ControlText } from '@/shared/components';
import { PageItem } from '@/business/items';
import { challengesCollection } from '../domain';

export default {
  name: 'ArcEdit',
  components: {
    PageItem,
    ControlText
  },
  data () {
    return {
      challengesCollection
    };
  }
};
</script>
