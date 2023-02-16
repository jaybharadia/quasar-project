<template>
    <q-drawer show-if-above :model-value="isOpen" side="left" bordered mini-to-overlay :mini="false" :width="width"
        >
      <!-- drawer content -->
      <q-scroll-area :style="{ 'border-right': '1px solid #ddd', height: '100%' }">

        <q-list padding>
          <div class="q-pa-sm">Categories</div>
          <q-separator  />

          <div class="q-pa-md" v-if="categories.isLoading.value">
    <q-linear-progress indeterminate />

    <q-linear-progress indeterminate color="primary" class="q-mt-sm" />

    <q-linear-progress indeterminate color="primary" class="q-mt-sm" />

    <q-linear-progress indeterminate rounded color="primary" class="q-mt-sm" />

    <q-linear-progress indeterminate rounded color="primary" class="q-mt-sm" />

    <q-linear-progress indeterminate rounded color="primary" class="q-mt-sm" />
  </div>

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
export default {

  logoHeight: '150px',
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
