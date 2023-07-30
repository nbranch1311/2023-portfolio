import React from 'react';
import PropTypes from 'prop-types';

export const TableHeader = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup, i) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${i}`}>
          {headerGroup.headers.map((column, i) => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              key={`th-${i}`}
              className="p-2 px-4 border"
            >
              {column.render('Header')}
              <span>
                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

const HeaderPropType = PropTypes.shape({
  getHeaderGroupProps: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.any).isRequired,
});

TableHeader.propTypes = {
  headerGroups: PropTypes.arrayOf(HeaderPropType).isRequired,
};
