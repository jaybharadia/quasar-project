import { apolloClient, httpLink, errorLink } from 'src/boot/plugins/graphql';
import messages from 'src/data/messages';
import { useLogout } from 'src/composables/auth/useLogout';
import { showLoading } from 'src/utilities/loading';
import { setContext } from '@apollo/client/link/context';

export const useGraphql = () => {
  const setToken = (token) => {
    return new Promise((resolve, reject) => {
      if (token) {
        const authLink = setAuthorizationHeader(token);
        apolloClient.setLink(errorLink.concat(authLink.concat(httpLink)));
        resolve(true);
      } else reject(messages.auth.tokenNotFound);
    });
  };

  const handle401 = () => {
    const { logout } = useLogout();
    logout();
  };

  const handle429 = () => {
    showLoading({
      messages: messages.network.tooManyRequest
    });
  };

  const setAuthorizationHeader = (authToken) => {
    return setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: authToken ? `Bearer ${authToken}` : ''
        }
      };
    });
  };

  return {
    setToken,
    handle401,
    handle429
  };
};
