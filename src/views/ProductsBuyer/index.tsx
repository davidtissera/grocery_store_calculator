import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import { IProduct } from "shared/mocks";
import { calculateDiscountPrice } from "./helpers";

export interface IProductsBuyer {
  products: IProduct[];
}

export default function ProductsBuyer(props: IProductsBuyer) {
  const { products } = props;
  const [newProducts, setNewProducts] = useState([]);

  const handleBuyProducts = (values) => {
    const transformProductQuantity = (product: IProduct) => {
      return {
        ...product,
        quantity: values[product.name]
      };
    };
    const productsWithQuantity: any = products.map(transformProductQuantity);

    setNewProducts(productsWithQuantity);
  };

  console.log(newProducts);

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
