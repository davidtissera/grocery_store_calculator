import ShoppingCart from "./components/ShoppingCart";
import { products } from "shared/mocks";

export default function BuyItemsView() {
  const handleSubmitValues = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <>
      <h1>Buy items</h1>
      <ShoppingCart
        productsToBuy={products}
        handleSubmitValues={handleSubmitValues}
      />
    </>
  );
}
