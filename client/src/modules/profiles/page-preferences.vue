<template>
  <BaseDialog
    title="Update Preferences"
  >
    <template>
      <v-form ref="form">
        <v-text-field
          v-model="publicEmail"
          label="Public Email"
          :rules="[requiredRule]"
          readonly
          disabled
        />
        <v-text-field
          v-model="nickname"
          label="Nickname"
          :rules="[requiredRule]"
          required
        />
        <v-select
          v-model="locale"
          label="Language"
          :items="supportedLocales"
          item-text="title"
          item-value="id"
          :rules="[requiredRule]"
          required
        />
      </v-form>
    </template>
    <template v-slot:actions>
      <SaveCancel
        @cancel="$router.go(-1)"
        @save="save"
      />
    </template>
  </BaseDialog>
</template>

<script>
import { startLoading } from '__cli/core/loader';
import { BaseDialog, SaveCancel, requiredRule } from '__cli/core/components';
import { supportedLocales } from '__cli/core/i18n';
import { authMech } from '../domain';

export default {
  name: 'PagePreferences',
  components: { BaseDialog, SaveCancel },
  data () {
    const { publicEmail, nickname, locale } = authMech.state.userData;
    return {
      requiredRule,
      supportedLocales,
      publicEmail,
      nickname,
      locale
    };
  },
  methods: {
    save () {
      const stop = startLoading('saving preferences');
      authMech
        .updateProps({ nickname: this.nickname, locale: this.locale })
        .then(() => this.$router.go(-1))
        .finally(() => stop());
    }
  }
};
</script>
