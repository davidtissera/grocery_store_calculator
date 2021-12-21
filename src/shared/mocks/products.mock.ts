export type IProduct = {
  name: "Milk" | "Bread" | "Banana" | "Apple";
  cost: number;
  amountOfProductsInDiscount?: number;
  discount_cost?: number;
};

export const products: IProduct[] = [
  {
    name: "Milk",
    cost: 3.97,
    discount_cost: 2.5,
    amountOfProductsInDiscount: 2
  },
  {
    name: "Bread",
    cost: 2.17,
    discount_cost: 2.0,
    amountOfProductsInDiscount: 3
  },
  { name: "Banana", cost: 0.99 },
  { name: "Apple", cost: 0.89 }
];
