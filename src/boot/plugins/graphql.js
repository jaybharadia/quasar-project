import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql
} from '@apollo/client/core'
import { boot } from 'quasar/wrappers'
import VueApolloComponents from '@vue/apollo-components'
import { createApolloProvider } from '@vue/apollo-option'
import {
  provideApolloClient
} from '@vue/apollo-composable'
import { setContext } from '@apollo/client/link/context'
// import fetch from 'cross-fetch';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.GRAPHQL_URL
  // fetch,
})

const publicHttpLink = createHttpLink({
  uri: process.env.GRAPHQL_OPEN_URL
})

const authLink = setContext((_, { headers }) => {
  const authToken = ''

  return authToken
    ? { headers: { ...headers, authorization: `token ${authToken}` } }
    : { headers }
})

// Cache implementation
// export const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         count: {
//           read() {
//             return counter();
//           },
//         },
//       },
//     },
//   },
// });

const cache = new InMemoryCache()
// Create the apollo client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})

export const publicApolloClient = new ApolloClient({
  link: publicHttpLink,
  cache
})

export const setupGraphQL = () => {
  return provideApolloClient(apolloClient)
}

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,

  clients: {
    publicClient: publicApolloClient
  }
})

export default boot(({ app }) => {
  app.provide('$gql', gql)
  app.use(apolloProvider)
  app.use(VueApolloComponents)
})
