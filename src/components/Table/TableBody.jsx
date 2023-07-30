import React from 'react';
import PropTypes from 'prop-types';

export const TableBody = ({ getTableBodyProps, rows, prepareRow }) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} key={`tr-${i}`}>
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  key={`td-${i}`}
                  className="p-2 px-4 border"
                >
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

const CellPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
});

const RowPropType = PropTypes.shape({
  getRowProps: PropTypes.func.isRequired,
  cells: PropTypes.arrayOf(CellPropType).isRequired,
});

TableBody.propTypes = {
  getTableBodyProps: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(RowPropType).isRequired,
  prepareRow: PropTypes.func.isRequired,
};
