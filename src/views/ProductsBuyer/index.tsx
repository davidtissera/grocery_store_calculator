import ShoppingCart from "./components/ShoppingCart";
import { IProduct } from "shared/mocks";

export interface IProductsBuyer {
  products: IProduct[];
}

export default function ProductsBuyer(props: IProductsBuyer) {
  const { products } = props;

  const handleBuyProducts = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1>Buy items</h1>
      <ShoppingCart
        productsToBuy={products}
        handleBuyProducts={handleBuyProducts}
      />
    </>
  );
}
