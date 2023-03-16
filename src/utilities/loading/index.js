import { Loading, QSpinnerClock } from 'quasar';

const defaults =
{
  message: '',
  timer: 5000,
  spinnerColor: 'primary',
  spinner: QSpinnerClock,
  spinnerSize: '40'
};
export const showLoading = (config, timer = 3000) => {
  Loading.show({
    ...defaults,
    ...config
  });

  setTimeout(() => {
    Loading.hide();
  }, timer);
};
