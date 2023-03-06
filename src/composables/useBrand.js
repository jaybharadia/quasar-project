import { get as getAll } from 'src/api/brands';
import { ref } from 'vue';

export function useBrand() {
  const isLoading = ref(false);
  const items = ref([]);

  const getData = () => {
    isLoading.value = true;
    return getAll().then((res) => {
      isLoading.value = false;

      items.value = res.data;
      return res.data;
    });
  };

  return {
    isLoading,
    getData,
    items
  };
}
