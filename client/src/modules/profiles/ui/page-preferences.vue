<template>
  <BaseDialog
    title="Update Preferences"
  >
    <template>
      <v-form ref="form">
        <v-text-field
          v-model="publicEmail"
          label="Public Email"
          readonly
          disabled
        />
        <v-text-field
          v-model="nickname"
          label="Nickname"
          :rules="[v => !!v || this.$t('auth.email-required')]"
          required
        />
        <v-select
          v-model="locale"
          label="Language"
          :items="supportedLocales"
          item-text="title"
          item-value="id"
          :rules="[v => !!v || this.$t('auth.email-required')]"
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
import { showSuccess, showError } from '__cli/core/messages';
import { BaseDialog, SaveCancel } from '__cli/core/components';
import { supportedLocales } from '__cli/core/i18n';
import { profilesCollection, getCurrentProfile } from '../domain';

export default {
  name: 'PagePreferences',
  components: { BaseDialog, SaveCancel },
  data () {
    const { publicEmail, nickname, locale } = getCurrentProfile();
    return {
      supportedLocales,
      publicEmail,
      nickname,
      locale
    };
  },
  methods: {
    save () {
      const stop = startLoading('saving preferences');
      profilesCollection
        .update({ nickname: this.nickname, locale: this.locale })
        .then(() => {
          this.$router.go(-1);
          showSuccess('profile updated');
        })
        .catch(error => showError(error.message))
        .finally(() => stop());
    }
  }
};
</script>
