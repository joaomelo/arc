<template>
  <form
    ref="form"
    class="bg-white rounded p-3"
    novalidate
    @submit.prevent="save"
  >
    <slot />
    <div class="text-right">
      <BaseButton
        class="btn-secondary"
        @click="cancel"
      >
        {{ $t('forms.cancel') }}
      </BaseButton>
      <BaseButton
        type="submit"
        class="btn-primary ml-1"
      >
        {{ $t('forms.save') }}
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
      const form = this.$refs.form;
      form.classList.add('was-validated');
      if (form.checkValidity()) {
        this.$emit('save');
      }
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
