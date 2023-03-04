<template>
  <div class="text-center q-mt-md">
    <p v-if="loading">Fetching...</p>
    <p v-else class="message text-body1">Message: {{ msg }}</p>

    <div class="col-12 text-center">
      <router-link class="text-primary" to="/">Return home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'

import { useQuery } from '@vue/apollo-composable'
// import gql from 'graphql-tag'
export default defineComponent({
  name: 'FetchMessage',
  props: {
    message: {
      type: String,
      require: true
    }
  },
  mounted () {
  },
  setup (props) {
    const gqlInstance = inject('$gql')

    console.log('gqlInstance-->', gqlInstance)

    const VUE_APOLLO_QUASAR_GREETING = gqlInstance`
      query ($greeting: String!) {
        hello(greeting: $greeting)
      }
    `

    const { result, loading } = useQuery(VUE_APOLLO_QUASAR_GREETING, {
      greeting: props.message
    })

    const msg = computed(() =>
      result.value ? result.value.hello : 'can not find greeting'
    )

    return {
      msg,
      loading
    }
  }
})
</script>
