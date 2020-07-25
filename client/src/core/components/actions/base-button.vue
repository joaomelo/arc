<template>
  <v-btn
    :color="color"
    :icon="icon && !text"
    @click="$emit('click')"
  >
    <v-icon
      v-if="icon"
      :left="!!text"
    >
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
};
</script>
