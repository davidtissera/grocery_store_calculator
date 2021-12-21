import Table from "@core/components/Table";
import { IProduct } from "shared/mocks";
import {
  calculateDiscountPrice,
  getProductsTotalPriceAndDiscount
} from "../helpers";

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
    {
      name: "price",
      header: "Price",
      Cell: (cellValue: number) => <>{`$${cellValue.toFixed(2)}`}</>
    }
  ];

  const rows = products.map((product) => ({
    ...product,
    price: calculateDiscountPrice(product)
  }));

  const {
    totalWithDiscount,
    totalWithoutDiscount
  } = getProductsTotalPriceAndDiscount(rows);

  const savedPrice = totalWithoutDiscount - totalWithDiscount;

  return (
    <div>
      <Table columns={columns} rows={rows} />
      <div
        style={{ margin: "20px 0" }}
      >{`Total price: $${totalWithDiscount.toFixed(2)}`}</div>
      <div style={{ margin: "20px 0" }}>{`You saved $${savedPrice.toFixed(
        2
      )} today.`}</div>
    </div>
  );
}
