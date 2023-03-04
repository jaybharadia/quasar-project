<template>
    <q-drawer show-if-above :model-value="isOpen" side="left" bordered mini-to-overlay :mini="false" :width="width"
        >
      <!-- drawer content -->
      <q-scroll-area :style="{ 'border-right': '1px solid #ddd', height: '100%' }">

        <q-list padding>
          <!-- <div class="q-pa-sm">Categories</div> -->
          <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Categories</q-toolbar-title>
    </q-toolbar>
          <q-separator  />

          <LinearProgress v-if="categories.isLoading.value" :rows="3" color="primary-light"/>

          <template v-else>

            <q-item clickable v-ripple v-for="category in categories.items.value" :key="category.id">

              <q-item-section>
                {{  category.name }}
              </q-item-section>
            </q-item>
          </template>

            </q-list>
      </q-scroll-area>

    </q-drawer>

</template>

<script>
import { useCategory } from 'src/composables/useCategory'
import LinearProgress from 'components/loader/LinearProgress.vue'
export default {

  logoHeight: '150px',
  components: {
    LinearProgress
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      miniState: false
    }
  },

  setup () {
    const categories = useCategory()
    categories.getData()
    return {
      categories
    }
  },
  async created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
