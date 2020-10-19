import { useRouter } from "next/router";
import { RouteComponentProps } from '@reach/router';
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../gql";
import Detail from "@components/Detail";
import User from "@components/User";

interface ProductProps extends RouteComponentProps {}

const ProductPage: React.FC<ProductProps> = () => {

  const router = useRouter();

  const {
    data, 
    loading, 
    error 
  } = useQuery(GET_PRODUCT, {
    variables: { id: router.query.id }
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{`Error...! ${error}`}</span>;

  const {
    id,
    name,
    image_key,
    price,
    information,
    offer_ids
  } = data.product;
  
  return <div>
    <button onClick={ () => router.back() }>Back</button>
    <Detail 
      id={+id}
      name={name}
      image={image_key}
      currentPrice={price.current_price}
      originalPrice={price.original_price}
      text={information[0]?.section_text}
    />
    <User 
      offerIds={offer_ids}
    />
  </div>
}

export default ProductPage;