import React from 'react';
import { data, Table } from 'components/Table';

const Portfolio = () => (
  <div>
    <h1>This is the Portfolio Page</h1>
    <Table
      data={data}
      columns={[
        { Header: 'Identifier', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Location', accessor: 'path' },
        { Header: 'Type', accessor: 'type' },
        { Header: 'Favorite', accessor: 'starred' },
      ]}
    />
  </div>
);

export default Portfolio;
