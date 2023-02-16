import { get as getAllCategories } from 'src/api/category'

import { ref } from 'vue'
export function useCategory () {
  const isLoading = ref(false)
  const items = ref([])

  const getData = () => {
    isLoading.value = true
    return getAllCategories().then((res) => {
      isLoading.value = false

      items.value = res.data
      return res.data
    })
  }

  return {
    getData,
    isLoading,
    items
  }
}
