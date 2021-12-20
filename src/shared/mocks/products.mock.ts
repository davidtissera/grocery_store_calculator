export type IProduct = {
  name: "Milk" | "Bread" | "Banana" | "Apple";
  cost: number;
};

export const products: IProduct[] = [
  { name: "Milk", cost: 3.97 },
  { name: "Bread", cost: 2.17 },
  { name: "Banana", cost: 0.99 },
  { name: "Apple", cost: 0.89 }
];
