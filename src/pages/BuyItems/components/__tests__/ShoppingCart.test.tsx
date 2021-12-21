import { render, RenderResult } from "@testing-library/react";
import ShoppingCart, { IShoppingCart } from "../ShoppingCart";

describe("ShoppingCart", () => {
  const getComponent: (defaultProps: IShoppingCart) => RenderResult = (
    defaultProps
  ) => {
    return render(<ShoppingCart {...defaultProps} />);
  };

  it("should render without crashing", () => {
    const component = getComponent({});

    expect(component).toBeDefined();
  });
});
