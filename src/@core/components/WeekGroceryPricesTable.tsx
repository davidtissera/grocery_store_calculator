import Table from "@core/components/Table";
import { products } from "shared/mocks";

export default function WeekGroceryPricesTable() {
  const columns = [
    { name: "name", header: "Item" },
    { name: "cost", header: "Unit price" },
    { name: "discount_cost", header: "Sale price" }
  ];
  const rows = products;

  return (
    <>
      <h1>Local Grocery Store Pricing Table</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
}
