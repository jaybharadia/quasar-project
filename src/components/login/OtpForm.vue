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
      <div>
        <q-input
          class="col-4"
          v-model="code"
          label="OTP"
          mask="####"
          fill-mask="#"
          :rules="[(val) => (val && val.length > 0) || 'Field is required*']"
        />

        <PrimaryButton
          icon="wifi_protected_setup"
          label="Resend OTP"
          :loading="resendOtpLoading"
          :disable="isResendOtpDisable"
          @click="mutateResendOtp()"
        />
      </div>

      <Timer
        v-if="showTimer"
        :seconds="timerSeconds"
        label="Resend OTP in"
        @timeup="
          showTimer = false;
          isResendOtpDisable = false;
        "
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
import Timer from 'src/components/Timer.vue';
import { useMutation } from '@vue/apollo-composable';
import login from 'src/graph/auth/login.gql';
import { inject, getCurrentInstance } from 'vue';
export default {
  components: {
    Timer
  },

  props: {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    getOtpOnDefaultPartner: {
      type: Boolean
    }
  },
  computed: {
    variables() {
      return {
        username: this.username,
        password: this.password,
        code: Number(this.code),
        codeFor: 'sign_in'
      };
    }
  },
  data() {
    return {
      code: null,
      showTimer: true,
      timerSeconds: 120,
      isResendOtpDisable: true
    };
  },
  setup(props) {
    const form = useForm();
    const instance = getCurrentInstance();
    const gqlTag = inject('$gql');

    const {
      loading: resendOtpLoading,
      onDone,
      onError,
      mutate: mutateResendOtp
    } = useMutation(gqlTag`${login}`, {
      variables: {
        username: props.username,
        password: props.password,
        defaultPartnerOtpSend: props.getOtpOnDefaultPartner
      },
      clientId: 'public'
    });

    onDone((res) => {
      form.notifySuccess(res.data.login.message);
      instance.data.isResendOtpDisable = true;
      instance.data.showTimer = true;
    });

    onError((error) => {
      form.notifyError(error.message);
    });

    return {
      otpVerify,
      form,
      resendOtpLoading,
      mutateResendOtp
    };
  }
};
</script>

<style lang="scss" scoped></style>
