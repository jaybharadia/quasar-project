<template>
  <ApolloMutation
    clientId="public"
    :mutation="
      (gql) =>
        gql`
          ${otpVerify}
        `
    "
    :variables="variables"
    @done="onLoginSuccess"
    @error="(error) => notifyError(error.message)"
    v-slot="{ mutate, loading }"
  >
    <q-form @submit="mutate()" class="q-gutter-md">
      <div>
        <q-input
          class="col-4"
          v-model="otp.state.code"
          label="OTP"
          mask="####"
          fill-mask="#"
          :rules="[(val) => (val && val.length > 0) || 'Field is required*']"
        />

        <PrimaryButton
          icon="wifi_protected_setup"
          label="Resend OTP"
          :loading="resendOtpLoading"
          :disable="otp.state.isResendOtpDisable"
          @click="mutateResendOtp()"
        />
      </div>

      <Timer
        v-if="otp.state.showTimer"
        :seconds="otp.state.timerSeconds"
        label="Resend OTP in"
        @timeup="otp.methods.onTimerExpire()"
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
import { useOtp } from 'src/composables/useOtp';
import Timer from 'src/components/Timer.vue';
import { useMutation } from '@vue/apollo-composable';
import login from 'src/graph/auth/login.gql';
import { inject } from 'vue';
import { useAlert } from 'src/composables/useAlert';
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
        code: Number(this.otp.state.code),
        codeFor: 'sign_in'
      };
    }
  },
  data() {
    return {};
  },
  setup(props) {
    const gqlTag = inject('$gql');

    const { notifyError, notifySuccess } = useAlert();

    const otp = useOtp();

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
      notifySuccess(res.data.login.message);
      otp.methods.onOtpSend();
    });

    onError((error) => {
      notifyError(error.message);
      otp.methods.resetOtp();
    });

    return {
      otpVerify,
      notifyError,
      notifySuccess,
      resendOtpLoading,
      mutateResendOtp,
      otp
    };
  },
  methods: {
    onLoginSuccess($event) {
      this.$emit('login-success', {
        user: $event.data.verifyCode.user,
        token: $event.data.verifyCode.token
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
