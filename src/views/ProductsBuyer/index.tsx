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
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Pick you products</h1>
          <ShoppingCart
            productsToBuy={products}
            handleBuyProducts={handleBuyProducts}
          />
        </div>
        {newProducts.length > 0 && (
          <div style={{ marginLeft: "20px" }}>
            <h1>Your shopping list</h1>
            <ProductsQuantityTable products={newProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
