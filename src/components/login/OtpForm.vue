<template>
  <ApolloMutation
    clientId="publicClient"
    :mutation="
      (gql) =>
        gql`
          ${otpVerify}
        `
    "
    :variables="variables"
    @done="
      form.notifySuccess(
        `Welcome ${$event.data.verifyCode.user.name} to BuildItIndia`
      )
    "
    @error="(error) => form.notifyError(error.message)"
    v-slot="{ mutate, loading }"
  >
    <q-form @submit="mutate()" class="q-gutter-md">
      <q-input
        class="col-4"
        v-model="code"
        label="OTP"
        mask="####"
        fill-mask="#"
        :rules="[(val) => (val && val.length > 0) || 'Field is required*']"
      />

      <PrimaryButton
        label="Login"
        icon="done"
        type="submit"
        :loading="loading"
      />
    </q-form>
  </ApolloMutation>
</template>

<script>
import otpVerify from 'src/graph/otp/verify.gql';
import { useForm } from 'src/composables/useForm';

export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  computed: {
    variables() {
      return {
        username: this.username,
        password: this.password,
        code: Number(this.code),
        codeFor: 'sign_in',
      };
    },
  },
  setup() {
    const form = useForm();
    return {
      otpVerify,
      form,
    };
  },
  data() {
    return {
      code: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
