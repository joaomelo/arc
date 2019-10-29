<template>
  <a
    v-if="email"
    href="#"
    @click="logout"
  >
    Logout from {{ email }}
  </a>
</template>

<script>
export default {
  name: 'Logout',
  computed: {
    email () {
      return this.$store.getters.getCurrentProfile && this.$store.getters.getCurrentProfile.title;
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout');
      this.$router.push({ name: 'login' });
    }
  }
};
</script>
