import React from "react";

export const Table = ({ selectedPatient, children }) => {
  return (
    <div>
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            {selectedPatient === "" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
