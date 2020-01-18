<template>
  <BaseLink
    v-if="currentId"
    :to="{ name: 'profileEdit', params: { itemId: currentId }}"
    router-link
  >
    {{ $t('modules.profiles.preferences') }}
  </BaseLink>
</template>

<script>
import { BaseLink } from '@/core/components';
export default {
  name: 'LinkPreferences',
  components: { BaseLink },
  computed: {
    currentId () {
      return 'teste';
    }
  }
};
</script>
