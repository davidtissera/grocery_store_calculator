import { fireEvent, render, RenderResult } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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

  it.only("should call handleSubmitValues when clicking submit button", () => {
    const handleBuyProducts = jest.fn();
    const overrideProps = {
      productsToBuy: products,
      handleBuyProducts
    };
    const component = getComponent(overrideProps);
    const milkInput = component.getByLabelText("Milk");
    const breadInput = component.getByLabelText("Bread");
    const submit = component.getByRole("button", { name: "Buy" });

    act(() => {
      fireEvent.change(milkInput, {
        target: {
          value: 4
        }
      });
    });

    act(() => {
      fireEvent.change(breadInput, {
        target: {
          value: 8
        }
      });
    });

    act(() => {
      fireEvent.click(submit);
    });

    expect(true).toBeTruthy();
    expect(handleBuyProducts).toHaveBeenCalledWith({
      Milk: 4,
      Bread: 8,
      Apple: 0,
      Banana: 0
    });
  });
});
