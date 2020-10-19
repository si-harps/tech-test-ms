import { useRouter } from "next/router";
import { RouteComponentProps } from '@reach/router';
import styles from "./User.module.css";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../gql";

interface UserProps extends RouteComponentProps {
  offerIds?: Array<string>;
}

// interface Props {
//   offerIds?: Array<string>;
// }

const User: React.FC<UserProps> = ({ offerIds }) => {

  const router = useRouter();

  const {
    data, 
    loading, 
    error 
  } = useQuery(GET_USER, {
    variables: { id: router.query.user }
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{`Error...! ${error}`}</span>;

  return <div>
    <pre>{JSON.stringify(data.user, null, 2)}</pre>
    <img src={`/gonesoon_icon.jpg`} />
    <img src={`/loyalty_icon.jpg`} />
    <img src={`/sale_icon.jpg`} />
  </div>
}

export default User;