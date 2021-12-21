import Table from "@core/components/Table";
import { IProduct } from "shared/mocks";
import { calculateDiscountPrice } from "../helpers";

export type IProductQuantity = Partial<IProduct> & {
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
    price: calculateDiscountPrice(product, product.quantity)
  }));

  const priceWithoutDiscount = products.reduce((prev, acum) => {
    return prev + acum.cost * acum.quantity;
  }, 0);

  const totalPrice = rows.reduce((prev, acum) => {
    return prev + acum.price;
  }, 0);

  const savedPrice = (priceWithoutDiscount - totalPrice).toFixed(2);

  return (
    <div>
      <Table columns={columns} rows={rows} />
      <div style={{ margin: "20px 0" }}>{`Total price: $${totalPrice}`}</div>
      <div
        style={{ margin: "20px 0" }}
      >{`You saved $${savedPrice} today.`}</div>
    </div>
  );
}
