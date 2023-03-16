import { setAuthorizationHeader, apolloClient, httpLink, errorLink } from 'src/boot/plugins/graphql';
import messages from 'src/data/messages';
import { useLogout } from 'src/composables/auth/useLogout';
import { showLoading } from 'src/utilities/loading';

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

  return {
    setToken,
    handle401,
    handle429
  };
};
