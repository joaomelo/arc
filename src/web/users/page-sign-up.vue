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
  ButtonPrimary
} from '@/web/components';

export default {
  name: 'PageSignUp',
  components: { FormBase, ControlEmail, ControlPasswordWithConfirmation, ButtonPrimary },
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['signUpAction']),
    handleSubmit () {
      this.signUpAction({ email: this.email, password: this.password });
    }
  }
};
</script>
