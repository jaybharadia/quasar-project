<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { setupGraphQL } from 'src/boot/plugins/graphql'
setupGraphQL()
export default defineComponent({
  name: 'App'
})
</script>
