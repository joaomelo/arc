<template>
  <form class="bg-white rounded p-3">
    <slot />
    <div class="text-right">
      <BaseButton
        class="btn-secondary"
        @click="cancel"
      >
        cancel
      </BaseButton>
      <BaseButton
        class="btn-primary ml-1"
        @click="save"
      >
        save
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from '@/components/base/base-button.vue';

export default {
  name: 'FormDialog',
  components: { BaseButton },
  created () {
    document.addEventListener('keyup', this.keyPressed);
  },
  destroyed () {
    document.removeEventListener('keyup', this.keyPressed);
  },
  methods: {
    cancel () {
      this.$emit('cancel');
    },
    save () {
      this.$emit('save');
    },
    keyPressed (event) {
      if (event.keyCode === 27) {
        this.cancel();
      } else if (event.keyCode === 13) {
        this.save();
      }
    }
  }
};
</script>
