<template>
  <div>
    <h1>Joker Page</h1>
    <p
      v-for="p in profiles"
      :key="p.id"
    >
      {{ p.title }}
    </p>
  </div>
</template>

<script>
import { getProfiles } from '@/modules/profiles';

export default {
  name: 'Joker',
  computed: {
    profiles () {
      return getProfiles();
    }
  }
};
</script>
