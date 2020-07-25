<template>
  <BaseButton
    v-bind="$attrs"
    icon="mdi-logout"
    :text="$t('auth.sign-out')"
    @click="signOut"
  />
</template>

<script>
import { BaseButton } from '__cli/core/components';
import { signOut } from '../domain';

export default {
  name: 'ButtonLogout',
  components: { BaseButton },
  methods: {
    signOut
  }
};
</script>
