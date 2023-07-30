import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSortBy, useTable } from 'react-table';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

export const Table = ({ data, columns }) => {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useSortBy,
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <TableHeader headerGroups={headerGroups} />
      <TableBody
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
    </table>
  );
};

const ColumnPropType = PropTypes.shape({
  Header: PropTypes.string.isRequired,
  accessor: PropTypes.string.isRequired,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(ColumnPropType).isRequired,
  sortable: PropTypes.bool,
  filterable: PropTypes.bool,
};
