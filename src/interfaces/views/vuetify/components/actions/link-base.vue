<template>
  <router-link
    :id="routeName | elementId('action')"
    :to="{name: routeName}"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'LinkBase',
  props: {
    routeName: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
