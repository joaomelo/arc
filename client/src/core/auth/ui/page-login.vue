<template>
  <LayoutGrid>
    <DialogLogin />
  </LayoutGrid>
</template>

<script>
import { LayoutGrid } from '__cli/core/layouts';
import DialogLogin from './dialog-login.vue';
export default {
  name: 'PageLogin',
  components: {
    LayoutGrid,
    DialogLogin
  }
};
</script>
