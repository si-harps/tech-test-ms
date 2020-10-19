import { useQuery } from "@apollo/client";
import List from "@components/List";
import { initializeApollo } from "src/apollo";
import { GET_PRODUCT_LIST } from "../gql";

const IndexPage: React.FC = () => {

  const { 
    data, 
    loading, 
    error 
  } = useQuery(GET_PRODUCT_LIST);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{`Error...! ${error}`}</span>;

  return <List products={data.productList} />;
}

export const getStaticProps = async () => {

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCT_LIST
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default IndexPage;