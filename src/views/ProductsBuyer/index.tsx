import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import ProductsQuantityTable, {
  IProductQuantity
} from "./components/ProductsQuantityTable";
import { IProduct } from "shared/mocks";

export interface IProductsBuyer {
  products: IProduct[];
}

export default function ProductsBuyer(props: IProductsBuyer) {
  const { products } = props;
  const [newProducts, setNewProducts] = useState<IProductQuantity[] | []>([]);

  const handleBuyProducts = (values: Record<IProduct["name"], number>) => {
    const transformProductQuantity = (product: IProduct) => {
      return {
        ...product,
        quantity: values[product.name]
      };
    };
    const productsWithQuantity: IProductQuantity[] = products.map(
      transformProductQuantity
    );

    setNewProducts(productsWithQuantity);
  };

  return (
    <>
      <h1>Pick your products</h1>
      <ShoppingCart
        productsToBuy={products}
        handleBuyProducts={handleBuyProducts}
      />
      <ProductsQuantityTable products={newProducts} />
    </>
  );
}
