import { IProductQuantity } from "../../components/ProductsQuantityTable";
import { getProductsTotalPriceAndDiscount } from "../index";

describe("getTotalProductsTotalPriceAndDiscount", () => {
  it("should return corresponding sum according products structure", () => {
    const products: Partial<IProductQuantity>[] = [
      { cost: 1, quantity: 3, price: 2 },
      { cost: 2, quantity: 6, price: 10 },
      { cost: 3, quantity: 8, price: 20 }
    ];
    const {
      totalWithDiscount,
      totalWithoutDiscount
    } = getProductsTotalPriceAndDiscount(products);

    expect(totalWithDiscount).toBe(32);
    expect(totalWithoutDiscount).toBe(39);
  });
});
