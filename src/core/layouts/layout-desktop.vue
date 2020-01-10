<template>
  <div class="mb-3">
    <NavbarDesktop />
    <LayoutGrid>
      <router-view />
    </LayoutGrid>
  </div>
</template>

<script>
import LayoutGrid from './layout-grid.vue';
import NavbarDesktop from './navbar-desktop.vue';
export default {
  name: 'LayoutDesktop',
  components: {
    LayoutGrid,
    NavbarDesktop
  }
};
</script>
