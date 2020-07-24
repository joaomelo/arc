<template>
  <BaseDialog
    :title="$t('profiles.update-preferences')"
  >
    <template>
      <v-form ref="form">
        <v-text-field
          v-model="publicEmail"
          :label="$t('profiles.public-email')"
          readonly
          disabled
        />
        <v-text-field
          v-model="nickname"
          :label="$t('profiles.nickname')"
          :rules="[v => !!v || this.$t('profiles.nickname-required')]"
          required
        />
        <v-select
          v-model="locale"
          :label="$t('profiles.language')"
          :items="supportedLocales"
          item-text="title"
          item-value="id"
          :rules="[v => !!v || this.$t('profiles.language-required')]"
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
          showSuccess(this.$t('profiles.preferences-updated'));
        })
        .catch(error => showError(error.message))
        .finally(() => stop());
    }
  }
};
</script>
