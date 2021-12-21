import { IProductQuantity } from "../components/ProductsQuantityTable";

export const calculateDiscountPrice: (product: IProductQuantity) => number = (
  product
) => {
  if (!product.amount_of_products_with_discount || !product.discount_cost) {
    const price = product.cost * product.quantity;

    return price;
  }

  const discountProportion =
    product.quantity / product.amount_of_products_with_discount;

  if (discountProportion % 1 !== 0) {
    const discountPrice = (product.quantity - 1) * product?.discount_cost;

    return discountPrice + product.cost;
  }

  return product.quantity * product?.discount_cost;
};

export const getProductsTotalPriceAndDiscount = (
  products: IProductQuantity[]
) => {
  const totalWithoutDiscount = products.reduce((prev: number, acum) => {
    return prev + acum.cost * acum.quantity;
  }, 0);

  const totalWithDiscount = products.reduce((prev, acum) => {
    return prev + acum.price;
  }, 0);

  return {
    totalWithDiscount,
    totalWithoutDiscount
  };
};
