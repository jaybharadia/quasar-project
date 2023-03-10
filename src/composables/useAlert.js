import { Notify } from 'quasar';
const useAlert = () => {
  const notifyError = (message) => {
    Notify.create({
      type: 'negative',
      message: message || 'Something went wrong. Please try again in some time.'
    });
  };

  return {
    notifyError
  };
};

export { useAlert };
