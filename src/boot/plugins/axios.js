import { boot } from 'quasar/wrappers';
import axios from 'axios';
import messages from 'src/data/messages/index';

import { useLogout } from 'src/composables/auth/useLogout';
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const config = {
  baseURL: 'https://api-bii.preview.im/api/v1/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
};
const api = axios.create(config);

const getToken = () => {
  return localStorage.getItem('bii-token');
};
const setToken = (token) => {
  return new Promise((resolve, reject) => {
    if (token) {
      api.defaults.headers.common.Authorization = 'Bearer ' + token;
      localStorage.setItem('bii-token', token);
      resolve(true);
    } else reject(messages.auth.tokenNotFound);
  });
};

const token = getToken();

if (token) { setToken(token); }

// INTERCEPTORS
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const { logout } = useLogout();
      logout();
    }

    if (error.response && error.response.status === 429) {
      window.alert('Network is Slow. Please try again in some time.');
    }
    // If status is not provided, axios is not sure what happend!
    if (!error.response && !error.status) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error.response);
    }
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, setToken, getToken };
