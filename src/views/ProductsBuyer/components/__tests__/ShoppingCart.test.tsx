import { render, RenderResult } from "@testing-library/react";
import { products } from "shared/mocks";
import ShoppingCart, { IShoppingCart } from "../ShoppingCart";

describe("ShoppingCart", () => {
  const getComponent: (
    overrideProps: Partial<IShoppingCart>
  ) => RenderResult = (overrideProps) => {
    const defaultProps = {
      productsToBuy: [],
      handleBuyProducts: jest.fn()
    };
    return render(<ShoppingCart {...defaultProps} {...overrideProps} />);
  };

  it("should render without crashing", () => {
    const component = getComponent({});

    expect(component).toBeDefined();
  });

  it("should render corresponding amount of products inputs according prop", () => {
    const overrideProps = {
      productsToBuy: products
    };
    const component = getComponent(overrideProps);

    expect(component.getByLabelText("Milk")).toBeDefined();
    expect(component.getByLabelText("Bread")).toBeDefined();
    expect(component.getByLabelText("Banana")).toBeDefined();
    expect(component.getByLabelText("Apple")).toBeDefined();
  });
});
