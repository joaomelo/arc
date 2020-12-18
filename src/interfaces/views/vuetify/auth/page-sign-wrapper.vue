<template>
  <PageBase>
    <FormBase @submit="$emit('sign')">
      <template #header>
        <div>
          <p class="mb-0">
            {{ $t(config.headerText) }}
          </p>
          <LinkBase
            :route-name="config.link.route"
            :text="$t(config.link.text)"
            class="text-subtitle-2"
          />
        </div>
      </template>

      <template #default>
        <slot />
      </template>

      <template #footer>
        <ButtonPrimary
          :id="config.button.id"
          :label="$t(config.button.label)"
        />
      </template>
    </FormBase>
    <MessageError
      :message="$t(config.error.text)"
      :code="config.error.code"
      class="mt-4"
    />
    <MessageInfo
      :message="$t('auth.disclaimer')"
      class="mt-4"
    />
  </PageBase>
</template>

<script>
import {
  FormBase,
  ButtonPrimary,
  LinkBase,
  MessageError,
  MessageInfo,
  PageBase
} from '../components';

export default {
  name: 'PageSignWrapper',
  components: {
    FormBase,
    ButtonPrimary,
    LinkBase,
    MessageError,
    MessageInfo,
    PageBase
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
};
</script>
