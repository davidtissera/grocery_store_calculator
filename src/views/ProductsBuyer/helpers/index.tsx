import { IProduct } from "shared/mocks";

export const calculateDiscountPrice: (
  product: IProduct,
  quantity: number
) => number = (product, quantity) => {
  if (!product.amountOfProductsInDiscount || !product.discount_cost) {
    const price = product.cost * quantity;

    return price;
  }

  const amount = quantity / product?.amountOfProductsInDiscount;
  if (amount % 1 !== 0) {
    const discountPrice = (quantity - 1) * product?.discount_cost;

    return discountPrice + product.cost;
  }

  return quantity * product?.discount_cost;
};
