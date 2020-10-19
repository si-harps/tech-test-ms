import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";

const App = ({ Component, pageProps }) => {

  const client = useApollo(pageProps.initialApolloState);

  return <ApolloProvider client={client}>
    <Component { ...pageProps } />
  </ApolloProvider>
}

export default App;