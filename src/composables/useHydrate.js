import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import hydrateGql from 'src/graph/hydrate.gql';
export const useHydrate = () => {
  const hydrate = (res) => {
    const HYDRATE_GQL = gql`${hydrateGql}`;

    const { loading, onError, onResult } = useQuery(HYDRATE_GQL);

    return {
      loading,
      onResult,
      onError
    };
  };

  return {
    hydrate
  };
};
