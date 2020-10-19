import styles from "./List.module.css";
import Card from "./Card";

interface Price {
  current_price: number;
  original_price: number | null;
}

interface Product {
  id: number;
  name: string;
  price: Price;
  image_key: string;
}

interface Props {
  products: Product[];
}

const List: React.FC<Props> = ({ products }) => {

  return <div className={styles.grid}>
    { products.map( (product, i) => {
      return <Card
        key={+product.id}
        id={+product.id}
        name={product.name}
        image={product.image_key}
        currentPrice={product.price.current_price}
        originalPrice={product.price.original_price}
      />
    })}
  </div>
}

export default List