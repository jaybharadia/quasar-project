import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import hydrateGql from 'src/graph/hydrate.gql';
import { useQuasar } from 'quasar';
import messages from 'src/data/messages';
export const useHydrate = () => {
  const hydrate = (res) => {
    const HYDRATE_GQL = gql`${hydrateGql}`;

    const { loading, onError, onResult } = useQuery(HYDRATE_GQL);

    const $q = useQuasar();

    const afterHydrate = (res) => {
      $q.notify({
        type: 'positive',
        message: messages.user.welcome(res.name ? res.name : '')
      });
    };

    return {
      loading,
      onResult,
      onError,
      afterHydrate
    };
  };

  return {
    hydrate
  };
};
