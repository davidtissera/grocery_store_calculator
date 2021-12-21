export const calculateDiscountPrice: (
  product: any,
  amountOfProductsToBuy: number
) => number = (product, amountOfProductsToBuy) => {
  const amount = amountOfProductsToBuy / product?.amountOfProductsInDiscount;

  if (amount % 1 !== 0) {
    const discountPrice = (amountOfProductsToBuy - 1) * product?.discount_cost;

    return discountPrice + product.cost;
  }

  return amountOfProductsToBuy * product?.discount_cost;
};
