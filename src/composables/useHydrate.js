const userStore = useUserStore();
import { useUserStore } from 'stores/user-store';
import { useQuery } from '@vue/apollo-composable';
const useHydrate = () => {
  const userStore = useUserStore();
  const hydrate = (res) => {
    userStore.setUser(res);
  };
};
