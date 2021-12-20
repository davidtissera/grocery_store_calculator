import React from "react";

export type IColumn = {
  name: string;
  header: string;
  Cell?: (cellValue: any) => React.ReactElement;
};

export interface ITable {
  rows: Record<string, any>[];
  columns: IColumn[];
}

export default function Table(props: ITable) {
  const { columns, rows } = props;

  return <div>Table</div>;
}
