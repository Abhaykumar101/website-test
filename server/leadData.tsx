import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.ooulet.in/graphql",
  cache: new InMemoryCache(),
});
