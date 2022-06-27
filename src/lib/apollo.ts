import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4w7ulfu25za01ukcslm039t/master",
  cache: new InMemoryCache(),
});
