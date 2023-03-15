import { Notify } from 'quasar';
const useAlert = () => {
  const notifyError = (message) => {
    Notify.create({
      type: 'negative',
      message: message || 'Something went wrong. Please try again in some time.'
    });
  };

  const notifySuccess = (message) => {
    console.log('notify success->>', message);
    Notify.create({
      type: 'positive',
      message: message || 'Success'
    });
  };

  return {
    notifyError,
    notifySuccess
  };
};

export { useAlert };
