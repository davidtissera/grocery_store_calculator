export type IProduct = {
  name: "Milk" | "Bread" | "Banana" | "Apple";
  cost: number;
  discount_cost?: `${number} for $${number}`;
};

export const products: IProduct[] = [
  { name: "Milk", cost: 3.97, discount_cost: "2 for $5.00" },
  { name: "Bread", cost: 2.17, discount_cost: "3 for $6.00" },
  { name: "Banana", cost: 0.99 },
  { name: "Apple", cost: 0.89 }
];
