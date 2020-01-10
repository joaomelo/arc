<template>
  <LayoutGrid>
    <DialogLogin />
  </LayoutGrid>
</template>

<script>
import { LayoutGrid } from '@/core/layouts';
import DialogLogin from './dialog-login.vue';
export default {
  name: 'PageLogin',
  components: {
    LayoutGrid,
    DialogLogin
  }
};
</script>
