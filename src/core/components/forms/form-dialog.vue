<template>
  <form
    ref="form"
    class="bg-white rounded p-3"
    novalidate
    @submit.prevent="save"
  >
    <slot />
    <p
      v-if="operationalError"
      class="text-danger"
    >
      {{ operationalError }}
    </p>
    <div class="text-right">
      <BaseButton
        v-if="!hideCancelButton"
        class="btn-secondary"
        @click="cancel"
      >
        {{ $t('forms.cancel') }}
      </BaseButton>
      <BaseButton
        type="submit"
        class="btn-primary ml-1"
      >
        {{ submitText }}
      </BaseButton>
    </div>
  </form>
</template>

<script>
import { p } from '@/common/components-helpers';
import { BaseButton } from '@/core/components/base';

export default {
  name: 'FormDialog',
  components: { BaseButton },
  props: {
    altSubmitText: p(String, ''),
    hideCancelButton: p(Boolean, false)
  },
  data () {
    return {
      operationalError: ''
    };
  },
  computed: {
    submitText () {
      return this.altSubmitText ? this.altSubmitText : this.$t('forms.save');
    }
  },
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
      if (this.validate()) {
        this.$emit('save');
      }
    },
    validate () {
      this.reset(); // remove any previous operational error message
      const form = this.$refs.form;
      form.classList.add('was-validated');
      return form.checkValidity();
    },
    throwOperationalError (message) {
      this.reset(); // clear fields validation styles
      this.operationalError = message;
    },
    reset () {
      const form = this.$refs.form;
      form.classList.remove('was-validated');
      this.operationalError = '';
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
