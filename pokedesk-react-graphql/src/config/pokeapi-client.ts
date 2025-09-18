import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// GraphQL client configuration
const pokeapiClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.pokeapi.co/v1beta2",
  }),
  cache: new InMemoryCache(),
});

export { pokeapiClient };
