export interface ITable {
  rows: any[];
  columns: any[];
}

export default function Table(props: ITable) {
  const { columns, rows } = props;

  return <div>Table</div>;
}
