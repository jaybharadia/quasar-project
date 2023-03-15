import { setToken } from 'src/boot/plugins/axios';
import { useGraphql } from '../useGraphql';
import messages from 'src/data/messages';
import { routerInstance } from 'src/router';
import { useAlert } from '../useAlert';

const useLogin = () => {
  const graphql = useGraphql();

  const { notifyError, notifySuccess } = useAlert();

  const afterLogin = (token, res) => {
    const axiosPromise = setToken(token);

    const graphPromise = graphql.setToken(token);

    Promise.all([axiosPromise, graphPromise]).then(() => {
      routerInstance.push({ name: 'home-page' });
    }).catch(() => {
      notifyError(messages.auth.tokenNotFound);
    });

    if (res.showKYCApproveNotification) {
      notifySuccess(messages.notifyKycApprove);
    }
  };
  return {
    afterLogin
  };
};

export { useLogin };
