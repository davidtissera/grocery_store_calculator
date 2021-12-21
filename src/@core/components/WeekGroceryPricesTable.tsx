import Table from "@core/components/Table";
import { IProduct, products } from "shared/mocks";

export default function WeekGroceryPricesTable() {
  const columns = [
    { name: "name", header: "Item" },
    { name: "cost", header: "Unit price" },
    { name: "sale_price", header: "Sale price" }
  ];

  const getSalePriceProduct = (product: IProduct) => {
    const {
      amount_of_products_with_discount: amountOfProductsInDiscount,
      discount_cost: discountCost
    } = product;
    if (amountOfProductsInDiscount == undefined || discountCost == undefined) {
      return false;
    }

    return {
      ...product,
      sale_price: `${amountOfProductsInDiscount} for $${
        discountCost * amountOfProductsInDiscount
      }`
    };
  };

  const rows = products.map((product) => {
    const salePriceProduct = getSalePriceProduct(product);
    if (!salePriceProduct) {
      return product;
    }

    return salePriceProduct;
  });

  return (
    <>
      <h1>Local Grocery Store Pricing Table</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
}
