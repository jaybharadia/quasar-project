<template>
    <q-drawer show-if-above :model-value="isOpen" side="left" bordered mini-to-overlay :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        >
      <!-- drawer content -->
      <q-scroll-area :style="{ 'border-right': '1px solid #ddd', height: '100%' }">

        <q-list padding>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="home" />
                </q-item-section>

                <q-item-section>
                  Home
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="location_city" />
                </q-item-section>

                <q-item-section>
                  Projects
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="receipt" />
                </q-item-section>

                <q-item-section>
                  Orders
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="article" />
                </q-item-section>

                <q-item-section>
                  Invoices
                </q-item-section>
              </q-item>
            </q-list>
      </q-scroll-area>

    </q-drawer>

</template>

<script>
export default {
  logoHeight: '150px',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      miniState: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
