<template>
  <form>
    <slot />
    <div class="text-right">
      <button
        type="button"
        class="btn btn-secondary"
        @click="cancel"
      >
        cancel
      </button>
      <button
        type="submit"
        class="btn btn-primary ml-1"
        @click.prevent="save"
      >
        save
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BaseForm',
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
