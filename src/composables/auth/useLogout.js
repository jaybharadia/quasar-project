import logoutGql from 'src/graph/auth/logout.gql';
import { useMutation, provideApolloClient } from '@vue/apollo-composable';
import { routerInstance } from 'src/router';
import { useAlert } from '../useAlert';
import messages from 'src/data/messages/index';
import gqlTag from 'graphql-tag';
import { apolloClient } from 'src/boot/plugins/graphql';
const useLogout = () => {
  provideApolloClient(apolloClient);
  const { notifyError, notifySuccess } = useAlert();

  const { loading, onDone, onError, mutate } = useMutation(gqlTag`${logoutGql}`, {
    context: {
      operationName: 'logout'
    }
  });

  const logout = () => {
    routerInstance.push({ name: 'login-page' });
    mutate();
    onDone(() => {
      localStorage.removeItem('bii-token');
      notifySuccess('Success');
    });

    onError((error) => {
      notifyError(error.message || messages.errorMessage);
    });

    return true;
  };

  return {
    logout,
    loading
  };
};

export { useLogout };
