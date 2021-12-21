import WeekGroceryPricesTable from "@core/components/WeekGroceryPricesTable";
import ProductsBuyer from "./views/ProductsBuyer";
import { products } from "shared/mocks";

export default function App() {
  return (
    <>
      <WeekGroceryPricesTable />
      <ProductsBuyer products={products} />
    </>
  );
}
