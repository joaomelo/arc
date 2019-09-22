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
    async logout () {
      await this.$auth.logout();
    }
  }
};
</script>
