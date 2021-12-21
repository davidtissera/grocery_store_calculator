import Table, { ITable } from "@core/components/Table";
import { render, RenderResult } from "@testing-library/react";
import { products as productsMock, IProduct } from "shared/mocks";

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

  describe("When columns || rows are empty or not defined", () => {
    it("should render empty component", () => {
      const defaultProps: ITable = {
        columns: [],
        rows: []
      };
      const component = getComponent(defaultProps);

      expect(component.container).toBeEmptyDOMElement();
    });
  });

  describe("When columns & rows are not empty and have data", () => {
    it("should render all the columns headers according props", () => {
      const columns = [
        { name: "name", header: "Item" },
        { name: "cost", header: "Unit price" }
      ];
      const rows: IProduct[] = productsMock;
      const defaultProps = {
        rows,
        columns
      };
      const component = getComponent(defaultProps);

      const itemHeader = component.getByRole("columnheader", { name: "Item" });
      const unitPriceHeader = component.getByRole("columnheader", {
        name: "Unit price"
      });

      expect(itemHeader).toBeInTheDocument();
      expect(unitPriceHeader).toBeInTheDocument();
    });

    it("should render all rows according props", () => {
      const columns = [
        { name: "name", header: "Item" },
        { name: "cost", header: "Unit price" }
      ];
      const rows: IProduct[] = productsMock;
      const defaultProps = {
        rows,
        columns
      };

      const component = getComponent(defaultProps);
      const tableRows = component.getAllByRole("row");

      expect(tableRows).toHaveLength(rows.length);
    });
  });
});
