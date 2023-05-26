interface Props {
  campos: any[]
  linhas: any
}
export default function DataTable(props: Props) {
  return (
    <table className="simple-table">
      <thead>
        {
          props.campos.map((e) => (
            <th key={e.id}>
              {e.name}
            </th>
          ))
        }
      </thead>
      <tbody>
        {props.linhas}
      </tbody>
    </table>
  );
}