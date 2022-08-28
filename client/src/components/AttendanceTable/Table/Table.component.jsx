import React from "react";
import { useTable } from "react-table";

export default function Table({ columns, data, defaultColumn }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn
  })

  return (
    <table {...getTableProps()} className="table table-bordered">
      <thead>
        {headerGroups.map((headerGroup) => (
           <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map(column => (
             <th {...column.getHeaderProps()} style={{
              minWidth: column.minWidth,
              width: column.width,
              maxWidth: column.maxWidth
            }}>{column.render('Header')}</th>
           ))}
         </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}