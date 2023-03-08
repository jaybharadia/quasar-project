import { setAuthorizationHeader, apolloClient, httpLink } from 'src/boot/plugins/graphql';
import messages from 'src/data/messages';
export const useGraphql = () => {
  const setToken = (token) => {
    return new Promise((resolve, reject) => {
      if (token) {
        const authLink = setAuthorizationHeader(token);
        apolloClient.setLink(authLink.concat(httpLink));
        resolve(true);
      } else reject(messages.auth.tokenNotFound);
    });
  };

  return {
    setToken
  };
};
