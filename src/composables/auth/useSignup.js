import { routerInstance } from 'src/router';
import { setToken } from 'src/boot/plugins/axios';
import { useAlert } from '../useAlert';
import { useGraphql } from '../useGraphql';
import messages from 'src/data/messages';
export const useSignup = () => {
  const graphql = useGraphql();
  const { notifyError, notifySuccess } = useAlert();

  const afterSignup = (token, res) => {
    const axiosPromise = setToken(token);

    const graphPromise = graphql.setToken(token);

    Promise.all([axiosPromise, graphPromise]).then(() => {
      routerInstance.push({ name: 'home-page' });

      notifySuccess('Signup successfull. Welcome to BuildItIndia');
    }).catch(() => {
      notifyError(messages.auth.tokenNotFound);
    });
  };
  return {
    afterSignup
  };
};
