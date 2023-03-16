import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql
} from '@apollo/client/core';
import { boot } from 'quasar/wrappers';
import VueApolloComponents from '@vue/apollo-components';
import { createApolloProvider } from '@vue/apollo-option';
import {
  ApolloClients
} from '@vue/apollo-composable';

import { getToken } from 'src/utilities/auth';

import { onError } from '@apollo/client/link/error';

import { useAlert } from 'src/composables/useAlert';
import { useGraphql } from 'src/composables/useGraphql';
const { handle401, handle429, setToken } = useGraphql();

// import fetch from 'cross-fetch';

// HTTP connection to the API

export const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.GRAPHQL_URL
  // fetch,
});

const publicHttpLink = createHttpLink({
  uri: process.env.GRAPHQL_OPEN_URL
});

// const authLink = setContext((_, { headers }) => {
//   const authToken = '';

//   return authToken
//     ? { headers: { ...headers, authorization: `token ${authToken}` } }
//     : { headers };
// });

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

const cache = new InMemoryCache();

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    if (networkError.statusCode === 401 && operation.getContext().operationName !== 'logout') {
      // Handling 401 logout mutation infinite loop case
      handle401();
    }

    // Handling logout 401 case to avoid infinite loop
    const alert = useAlert();

    alert.notifyError(networkError.result.message);

    if (networkError.statusCode === 429) {
      handle429();
    }
  }
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache

});

export const publicApolloClient = new ApolloClient({
  link: publicHttpLink,
  cache
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,

  clients: {
    public: publicApolloClient
  }
});

// Set token if found on app reload
const token = getToken();
if (token) { setToken(token); }

export default boot(({ app }) => {
  app.provide('$gql', gql);
  app.provide(ApolloClients, {
    default: apolloClient,
    public: publicApolloClient
  });
  app.use(apolloProvider);
  app.use(VueApolloComponents);
});
