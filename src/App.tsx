import Table from "@core/components/Table";
import { products } from "shared/mocks";

export default function App() {
  const columns = [
    { name: "name", header: "Item" },
    { name: "cost", header: "Unit price" },
    { name: "sale_price", header: "Sale price" }
  ];
  const rows = products;

  return <Table columns={columns} rows={rows} />;
}
