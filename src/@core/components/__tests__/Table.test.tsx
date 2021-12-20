import Table, { ITable } from "../Table";
import { render, RenderResult } from "@testing-library/react";

describe("Table", () => {
  const getComponent: (defaultProps: ITable) => RenderResult = (
    defaultProps
  ) => {
    return render(<Table {...defaultProps} />);
  };

  it("should render without crashing", () => {
    const defaultProps = {
      rows: [],
      columns: []
    };
    const component = getComponent(defaultProps);

    expect(component).toBeDefined();
  });
});
