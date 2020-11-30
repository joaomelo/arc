<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <v-form
      novalidate
      @submit.prevent="handleSubmit(innerHandleSubmit)"
    >
      <DialogCard
        v-bind="$attrs"
      >
        <template
          v-for="(_, slot) of $scopedSlots"
          #[slot]="scope"
        >
          <slot
            :name="slot"
            v-bind="scope"
          />
        </template>
      </DialogCard>
    </v-form>
  </ValidationObserver>
</template>

<script>
import { DialogCard } from '../dialogs';
export default {
  name: 'FormBase',
  components: { DialogCard },
  methods: {
    innerHandleSubmit () {
      this.$emit('submit');
    }
  }
};
</script>
