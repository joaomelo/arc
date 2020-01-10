<template>
  <div class="mb-3">
    <Navbar />
    <LayoutGrid>
      <router-view />
    </LayoutGrid>
  </div>
</template>

<script>
import { LayoutGrid } from '@/core/layouts';
import Navbar from './navbar.vue';
export default {
  name: 'Desktop',
  components: {
    LayoutGrid,
    Navbar
  }
};
</script>
