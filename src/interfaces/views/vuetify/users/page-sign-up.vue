<template>
  <div>
    <FormBase
      title="Sing Up"
      @submit="handleSubmit"
    >
      <template #default>
        <ControlEmail
          v-model="email"
          label="E-mail"
          rules="required"
        />
        <ControlPasswordWithConfirmation
          v-model="password"
          :labels="['Password', 'Repeat password']"
          rules="required"
        />
      </template>
      <template #footer>
        <ButtonPrimary label="Sign Up" />
      </template>
    </FormBase>
    <MessageError
      :error="error"
      class="mt-2"
    />
    <router-link :to="{name: 'signIn'}">
      Has a account? Go to SignIn
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  FormBase,
  ControlEmail,
  ControlPasswordWithConfirmation,
  ButtonPrimary,
  MessageError
} from '../components';

export default {
  name: 'PageSignUp',
  components: { FormBase, ControlEmail, ControlPasswordWithConfirmation, ButtonPrimary, MessageError },
  data () {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    ...mapActions(['signUpAction']),
    async handleSubmit () {
      try {
        const service = 'email';
        const credentials = { email: this.email, password: this.password };
        await this.signUpAction({ service, credentials });
      } catch (error) {
        this.error = { ...error };
      }
    }
  }
};
</script>
