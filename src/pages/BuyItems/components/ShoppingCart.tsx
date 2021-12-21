import React from "react";
import { IProduct } from "shared/mocks";

export interface IShoppingCart {
  productsToBuy: IProduct[];
  handleSubmitValues: (formValues: Record<string, string>) => void;
}

export default function ShoppingCart(props: IShoppingCart) {
  const { productsToBuy, handleSubmitValues } = props;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
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

    handleSubmitValues(formValues);
  };

  return (
    <form name="shopping-cart-form" onSubmit={handleSubmit}>
      {productsToBuy.map((product) => {
        return (
          <div key={product.name}>
            <label htmlFor={product.name}>{product.name}</label>
            <input
              id={product.name}
              name={product.name}
              defaultValue={0}
              type="number"
              min={0}
            />
          </div>
        );
      })}
      <button role="button" type="submit">
        Buy
      </button>
    </form>
  );
}
