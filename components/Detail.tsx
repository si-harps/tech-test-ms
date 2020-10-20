import styles from "./Detail.module.css";
import classnames from "classnames";
import { priceConversion } from "../src/helpers";

interface Props {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  text: string;
}

const Detail: React.FC<Props> = ({ id, name, image, currentPrice, originalPrice, text }) => {
  return <div key={id} className={styles.detail}>
    <h3 className={styles.title}>{ name }</h3>
    <img className={styles.asset} src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${image}`} />
    <span className={styles.row}>£{ priceConversion(currentPrice) }</span>
    { originalPrice && <span className={classnames(styles.row, styles.strikethrough)}>
      Original Price: £{ priceConversion(originalPrice) }
    </span> }
    <p className={styles.description}>{ text }</p>
  </div>
}

export default Detail;