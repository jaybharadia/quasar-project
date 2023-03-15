import logoutGql from 'src/graph/auth/logout.gql';
import { useMutation, provideApolloClient } from '@vue/apollo-composable';
import { routerInstance } from 'src/router';
import { useAlert } from '../useAlert';
import messages from 'src/data/messages/index';
import gqlTag from 'graphql-tag';
import { apolloClient } from 'src/boot/plugins/graphql';
// import { getToken } from 'src/utilities/auth';
const useLogout = () => {
  provideApolloClient(apolloClient);
  const { notifyError, notifySuccess } = useAlert();

  const { loading, onDone, onError, mutate } = useMutation(gqlTag`${logoutGql}`, {
    context: {
      mutationName: 'logout'
    }

  });

  const logout = () => {
    localStorage.removeItem('bii-token');
    mutate();
    onDone(() => {
      routerInstance.push({ name: 'login-page' });
      notifySuccess('Success');
    });

    onError((error) => {
      notifyError(error.message || messages.errorMessage);
    });

    return {
      loading
    };
  };

  return {
    logout
  };
};

export { useLogout };
