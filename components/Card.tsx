import styles from "./Card.module.css";
import Link from "next/link";
import classnames from "classnames";
import { priceConversion } from "../src/helpers";

interface Props {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
}

const Card: React.FC<Props> = ({ id, name, image, currentPrice, originalPrice }) => {

  const user = 1; // Changeable user

  return <div key={id} className={styles.card}>
    <h3 className={styles.title}>{ name }</h3>
    <Link href={{
      pathname: `/product/[id]`,
      query: { id, user }
    }}>
      <img className={styles.asset} src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${image}`} />
    </Link>
    <span className={styles.row}>£{ priceConversion(currentPrice) }</span>
    { originalPrice && <span className={classnames(styles.row, styles.strikethrough)}>
      Original Price: £{ priceConversion(originalPrice) 
    }</span> }
  </div>
}

export default Card;