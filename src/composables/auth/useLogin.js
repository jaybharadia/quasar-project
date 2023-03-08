import { setToken } from 'src/boot/plugins/axios';
import { useQuasar } from 'quasar';
import { useGraphql } from '../useGraphql';
import messages from 'src/data/messages';
import { routerInstance } from 'src/router';

const useLogin = () => {
  const $q = useQuasar();

  const graphql = useGraphql();

  const afterLogin = (token, res) => {
    const axiosPromise = setToken(token);

    const graphPromise = graphql.setToken(token);

    Promise.all([axiosPromise, graphPromise]).then(() => {
      routerInstance.push({ name: 'home-page' });
    }).catch(() => {
      $q.notify({
        type: 'negative',
        message: messages.auth.tokenNotFound
      });
    });

    if (res.showKYCApproveNotification) {
      $q.notify({
        type: 'positive',
        message: messages.notifyKycApprove
      });
    }
  };
  return {
    afterLogin
  };
};

export { useLogin };
