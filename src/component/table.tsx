import React from 'react';

interface TableProps {
  data: Array<{ name: string }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
