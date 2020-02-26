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
import { BaseLink } from '@src/core/components';
import { getCurrentProfile } from '../data';

export default {
  name: 'LinkPreferences',
  components: { BaseLink },
  computed: {
    currentId () {
      const profile = getCurrentProfile();
      return profile ? profile.id : null;
    }
  }
};
</script>
