import { reactive } from 'vue';

const useOtp = () => {
  const originalState = {
    resendOtpLoading: false,
    isOtpLoading: false,
    timerSeconds: 120,
    isResendOtpDisable: true,
    code: null,
    showTimer: true,
    codeFor: '',
    actionLabel: 'Send OTP'
  };

  const state = reactive({ ...originalState });

  const onOtpSend = () => {
    state.isResendOtpDisable = true;
    state.isOtpLoading = false;
    state.showTimer = true;
    state.actionLabel = 'Resend OTP';
  };

  const resetOtp = () => {
    Object.assign(state, originalState);
  };

  const onTimerExpire = () => {
    state.showTimer = false;
    state.isResendOtpDisable = false;
  };

  return {
    state,
    methods: {
      resetOtp,
      onOtpSend,
      onTimerExpire
    }
  };
};

export { useOtp };
