import { useQuasar } from 'quasar';
export function useForm () {
  const $q = useQuasar();
  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Please check the data filled in form'
    });
  };

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Success'
    });
  };

  return {
    notifyError,
    notifySuccess
  };
}
