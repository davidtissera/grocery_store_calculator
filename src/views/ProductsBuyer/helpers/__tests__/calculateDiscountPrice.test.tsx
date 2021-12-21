import { calculateDiscountPrice } from "../index";

describe("calculateDiscountPrice", () => {
  describe("When discount_cost or amount_of_items_with_discount are not present", () => {
    const product = {
      name: "Apple",
      cost: 5,
      quantity: 3
    };
    const price = calculateDiscountPrice(product);

    it("should return cost times quantity", () => {
      expect(price).toBe(15);
    });
  });

  describe("When discount_cost and amount_of_items_with discount are present", () => {
    const productWithDiscount = {
      name: "Milk",
      cost: 5,
      discount_cost: 2.5,
      amount_of_products_with_discount: 2
    };
    describe("When discount proportion is float", () => {
      it("should return price with discount", () => {
        const price = calculateDiscountPrice({
          ...productWithDiscount,
          quantity: 7
        });
        expect(price).toBe(20);
      });
    });

    describe("When discount proportion is integer", () => {
      it("should return price with discount", () => {
        const price = calculateDiscountPrice({
          ...productWithDiscount,
          quantity: 6
        });
        expect(price).toBe(7.5);
      });
    });
  });
});
