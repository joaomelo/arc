<template>
  <div
    :style="{ maxWidth: '400px' }"
    class="mx-auto"
  >
    <FormBase @submit="handleSubmit">
      <template #header>
        <div>
          <p class="mb-0">
            {{ $t('auth.sign-up-to-arc') }}
          </p>
          <LinkBase
            route-name="signIn"
            :text="$t('auth.go-sign-in')"
            class="text-subtitle-2"
          />
        </div>
      </template>

      <template #default>
        <ControlEmail
          id="email"
          v-model="email"
          :label="$t('auth.email')"
          rules="required"
        />
        <ControlPasswordWithConfirmation
          v-model="password"
          :ids="['password','repeat-password']"
          :labels="[$t('auth.password'),$t('auth.password-repeat')]"
          rules="required"
        />
      </template>

      <template #footer>
        <ButtonPrimary
          id="sign-up"
          :label="$t('auth.sign-up')"
        />
      </template>
    </FormBase>
    <MessageError
      :error-message="errorMessage"
      class="mt-2"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  FormBase,
  ControlEmail,
  ControlPasswordWithConfirmation,
  ButtonPrimary,
  LinkBase,
  MessageError
} from '../components';

export default {
  name: 'PageSignUp',
  components: {
    FormBase,
    ControlEmail,
    ControlPasswordWithConfirmation,
    ButtonPrimary,
    MessageError,
    LinkBase
  },
  data () {
    return {
      email: '',
      password: '',
      errorMessage: null
    };
  },
  methods: {
    ...mapActions(['signUpAction']),
    async handleSubmit () {
      try {
        const method = 'email';
        const credentials = { email: this.email, password: this.password };
        await this.signUpAction({ method, credentials });
      } catch (error) {
        if (error.isOperational) {
          this.errorMessage = {
            code: error.code,
            text: this.$t(error.description)
          };
        } else {
          throw error;
        }
      }
    }
  }
};
</script>
