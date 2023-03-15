import { setAuthorizationHeader, apolloClient, httpLink, errorLink } from 'src/boot/plugins/graphql';
import messages from 'src/data/messages';
import { useLogout } from 'src/composables/auth/useLogout';

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

  return {
    setToken,
    handle401
  };
};
