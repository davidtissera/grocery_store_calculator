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

  if (columns.length === 0 || rows.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th role="columnheader" key={column.name}>
                {column.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          return (
            <tr role="row" key={`row-${idx}`}>
              {columns.map((column) => {
                const cellValue = row[column.name];
                return (
                  <td key={`${column.name}-${cellValue}`}>
                    {column.Cell ? column.Cell(cellValue) : cellValue}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
