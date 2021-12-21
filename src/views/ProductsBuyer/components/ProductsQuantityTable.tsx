import Table from "@core/components/Table";
import { IProduct } from "shared/mocks";
import { calculateDiscountPrice } from "../helpers";

export type IProductQuantity = IProduct & {
  quantity: number;
  price: number;
};

export interface IProductQuantityTable {
  products: IProductQuantity[];
}

export default function ProductsQuantityTable(props: IProductQuantityTable) {
  const { products } = props;

  const columns = [
    { name: "name", header: "Item" },
    { name: "quantity", header: "Quantity" },
    { name: "price", header: "Price" }
  ];

  const rows = products.map((product) => ({
    name: product.name,
    quantity: product.quantity,
    price: calculateDiscountPrice(product)
  }));

  const priceWithoutDiscount = products.reduce((prev, acum) => {
    return prev + acum.cost * acum.quantity;
  }, 0);

  const totalPrice = rows.reduce((prev, acum) => {
    return prev + acum.price;
  }, 0);

  const savedPrice = priceWithoutDiscount - totalPrice;

  return (
    <div>
      <Table columns={columns} rows={rows} />
      <div style={{ margin: "20px 0" }}>{`Total price: $${totalPrice.toFixed(
        2
      )}`}</div>
      <div style={{ margin: "20px 0" }}>{`You saved $${savedPrice.toFixed(
        2
      )} today.`}</div>
    </div>
  );
}
