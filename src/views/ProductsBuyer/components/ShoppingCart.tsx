import React, { useState } from "react";
import { IProduct } from "shared/mocks";

export interface IShoppingCart {
  productsToBuy: IProduct[];
  handleBuyProducts: (formValues: Record<string, string>) => void;
}

export default function ShoppingCart(props: IShoppingCart) {
  const [isSubmitting, setSubmitting] = useState(false);
  const { productsToBuy, handleBuyProducts } = props;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    setSubmitting(true);
    const elements = ((event as unknown) as any).target.elements;
    event.preventDefault();

    const formValues = Object.assign(
      {},
      ...productsToBuy.map((product) => {
        return {
          [product.name]: +elements[product.name].value
        };
      })
    );

    setTimeout(() => {
      handleBuyProducts(formValues);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <form name="shopping-cart-form" onSubmit={handleSubmit}>
      {productsToBuy.map((product) => {
        return (
          <div key={product.name}>
            <div style={{ margin: "5px 0" }}>
              <label htmlFor={product.name}>{product.name}</label>
            </div>
            <div>
              <input
                id={product.name}
                name={product.name}
                defaultValue={0}
                type="number"
                min={0}
              />
            </div>
          </div>
        );
      })}
      <button role="button" type="submit" style={{ margin: "10px 0px" }}>
        {isSubmitting ? "Your order is being processed..." : "Buy"}
      </button>
    </form>
  );
}
