<template>
  <div class="card mb-3">
    <div class="card-body">
      <BaseViewDetail
        :is-title="true"
        :display="title"
      />
      <div v-if="!collapsed">
        <BaseViewDetail
          v-for="d in details"
          :key="d.label"
          :is-title="false"
          :label="d.label"
          :display="d.display"
        />
      </div>
    </div>
    <div class="card-body pt-0 d-flex justify-content-start">
      <div class="mr-auto">
        <BaseButton
          :disabled="!canEdit"
          class="btn-secondary"
          @click="$emit('edit')"
        >
          {{ $t('forms.edit') }}
        </BaseButton>
        <BaseButton
          :disabled="!canEdit"
          class="btn-secondary"
          @click="$emit('del')"
        >
          {{ $t('forms.delete') }}
        </BaseButton>
      </div>

      <BaseButton
        v-if="details.length > 0"
        class="btn-primary"
        @click="show"
      >
        {{ showText }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { p } from '@/common/components-helpers';
import BaseViewDetail from './base-view-detail.vue';
import BaseButton from './base-button.vue';

export default {
  name: 'BaseView',
  components: {
    BaseViewDetail,
    BaseButton
  },
  props: {
    title: p(String),
    details: p(Array, []),
    canEdit: p(Boolean, false)
  },
  data () {
    return {
      collapsed: true
    };
  },
  computed: {
    showText () {
      return this.collapsed ? this.$t('forms.show') : this.$t('forms.hide');
    }
  },
  methods: {
    show () {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
