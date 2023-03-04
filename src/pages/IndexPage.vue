<template>
  <q-page class="flex flex-center">

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />

    <FetchExample message="vue3-apollo-quasar starter.dev!"/>

  </q-page>
</template>

<script>
import FetchExample from './FetchExample.vue'
export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },
  components: {
    FetchExample
  }
}
</script>

<style scoped>

</style>
