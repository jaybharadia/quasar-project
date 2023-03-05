<template>
  <ApolloMutation
    clientId="public"
    :mutation="
      (gql) =>
        gql`
          ${login}
        `
    "
    :variables="{
      username,
      password,
      defaultPartnerOtpSend: getOtpOnDefaultPartner
    }"
    @done="
      form.notifySuccess($event.data.login.message);
      $emit('credential-success', {
        username,
        password,
        getOtpOnDefaultPartner
      });
    "
    @error="(error) => form.notifyError(error.message)"
    v-slot="{ mutate, loading }"
  >
    <q-form @submit="mutate()" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Username *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Field is required*']"
      />

      <PasswordToggleInput
        v-model="password"
        lazy-rules
        filled
        label="Your password *"
        :rules="[(val) => (val && val.length > 0) || 'Field is required*']"
      />

      <div>
        <q-toggle
          class="q-block"
          v-model="getOtpOnDefaultPartner"
          checked-icon="check"
          color="positive"
          label="Get OTP on Default Partner"
          unchecked-icon="clear"
        />
      </div>

      <PrimaryButton
        label="GET OTP"
        icon="lock"
        :loading="loading"
        type="submit"
      />
    </q-form>
  </ApolloMutation>
</template>

<script>
import login from 'src/graph/auth/login.gql';
import { useForm } from 'src/composables/useForm';
export default {
  components: {},
  setup() {
    const form = useForm();

    return {
      login,
      form
    };
  },
  mounted() {},

  data() {
    return {
      username: 'jay',
      password: 'Dev@7$pan',
      getOtpOnDefaultPartner: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
