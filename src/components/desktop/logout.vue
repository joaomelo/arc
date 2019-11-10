<template>
  <a
    href="#"
    @click="logout"
  >
    Logout
  </a>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    logout () {
      this.$store.dispatch('logout');
    }
  }
};
</script>
